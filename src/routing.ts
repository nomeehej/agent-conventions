import {createHash} from "node:crypto";

import {assertRoutingCondition, assertValidRoutingIdentifier, assertValidRuleTarget, toRuleStableId} from "./dependencies.js";
import type {LoadedSkillDocument, SkillCompanion, SkillRule, SkillSection} from "./types.js";

// ----------------------------------------------------------------------------------------
// 섹션 하나에 둘 수 있는 규칙 수의 상한
//
// 섹션 순서를 앞자리로 밀어 정렬 키를 만든다.
// ----------------------------------------------------------------------------------------
const sectionOrdinalStride = 1_000;

const compareRoutingText = (left: string, right: string): number => {
	if (left < right) return -1;

	return left > right ? 1 : 0;
};
const compareEnglishText = (left: string, right: string): number => left.localeCompare(right, "en-US");
const rulesIndexRendererVersion = 2;
const contractRendererVersion = 4;
const supportedImpactLevels = new Set(["CRITICAL", "HIGH", "MEDIUM"]);

export const escapeMarkdownText = (value: string): string => value.replace(/[\r\n]+/g, " ").replace(/([\\`*_[\]()<>!|])/g, "\\$1");

// ----------------------------------------------------------------------------------------
// 표가 아닌 단독 줄에 넣을 scalar 정리
//
// 스팬 밖의 링크와 강조 구문만 무력화한다.
//
// 코드 스팬 안은 그대로 두므로 `React.*` 같은 표기가 유지된다.
//
// escapeMarkdownProse("`React.*` *굵게*") → "`React.*` \*굵게\*"
// ----------------------------------------------------------------------------------------
export const escapeMarkdownProse = (value: string): string =>
	value
		.replace(/[\r\n]+/g, " ")
		.split(/(`[^`]*`)/)
		.map((part, index) => (index % 2 === 1 ? part : part.replace(/([\\*_[\]()<>!|])/g, "\\$1")))
		.join("");

const formatInlineCode = (value: string): string => {
	const normalizedValue = value.replace(/[\r\n]+/g, " ");
	const longestBacktickRun = Math.max(0, ...Array.from(normalizedValue.matchAll(/`+/g), (match) => match[0].length));
	const fence = "`".repeat(longestBacktickRun + 1);
	const needsPadding = /^[ `]|[ `]$/.test(normalizedValue);
	const padding = needsPadding ? " " : "";

	return `${fence}${padding}${normalizedValue}${padding}${fence}`;
};

const encodePathSegment = (value: string): string => encodeURIComponent(value);

// ----------------------------------------------------------------------------------------
// 기준 라우팅 원본 조립 입력
//
//   sections
//      sortSections로 정렬된 local section 목록이다.
//
//   companions
//      sortCompanions로 정렬된 직접 companion 목록이다.
// ----------------------------------------------------------------------------------------
interface CanonicalRoutingSourceArgs {
	document: LoadedSkillDocument;
	sections: SkillSection[];
	companions: SkillCompanion[];
}

export const toRuleId = (rule: SkillRule): string => toRuleStableId(rule.fileName);

// ----------------------------------------------------------------------------------------
// section 안 정렬 키
//
// 파일명 번호 접두사에서 계산하고 번호가 없으면 제목으로 정렬한다.
// ----------------------------------------------------------------------------------------
const calculateRuleFileOrder = (rule: SkillRule): number => {
	const numbered = /^(\d+)-(\d+)-/.exec(rule.fileName);

	return numbered ? Number(numbered[1]) * sectionOrdinalStride + Number(numbered[2]) : Number.MAX_SAFE_INTEGER;
};

// ----------------------------------------------------------------------------------------
// 라우팅 간선 대상 정렬
//
// 생성물과 검증기가 공유하는 코드 포인트 순서로 정렬한다.
// ----------------------------------------------------------------------------------------
export const sortRoutingTargets = (targets: string[]): string[] => [...targets].sort(compareRoutingText);

// ----------------------------------------------------------------------------------------
// 섹션 접두사가 같은 local 규칙 목록
//
// 제목과 ID는 en-US 로캘 순서로 비교한다.
// ----------------------------------------------------------------------------------------
export const filterRulesForSection = (section: SkillSection, rules: SkillRule[]): SkillRule[] =>
	rules
		.filter((rule) => rule.prefix === section.prefix)
		.sort(
			(left, right) =>
				calculateRuleFileOrder(left) - calculateRuleFileOrder(right) ||
				compareEnglishText(left.title, right.title) ||
				compareEnglishText(toRuleId(left), toRuleId(right)),
		);

// ----------------------------------------------------------------------------------------
// compact index 전용 정렬
//
// 제목과 ID는 로캘이 아닌 코드 포인트 순서로 비교한다.
// ----------------------------------------------------------------------------------------
const filterRoutingRulesForSection = (section: SkillSection, rules: SkillRule[]): SkillRule[] =>
	rules
		.filter((rule) => rule.prefix === section.prefix)
		.sort(
			(left, right) =>
				calculateRuleFileOrder(left) - calculateRuleFileOrder(right) ||
				compareRoutingText(left.title, right.title) ||
				compareRoutingText(toRuleId(left), toRuleId(right)),
		);

const exampleMarkerPattern = /^ {0,3}\*\*(Incorrect|Correct)(?:\s+\d+)?(?:\s+\(.+\))?:?\*\*[ \t]*$/;

// ----------------------------------------------------------------------------------------
// 규범 산문 안에 둘 수 있는 유일한 펜스 언어
//
// 흐름도는 예시가 아니라 산문의 일부이므로 Incorrect 경계 앞에 올 수 있다.
// ----------------------------------------------------------------------------------------
const proseFenceLanguage = "mermaid";
const fencePattern = /^ {0,3}(`{3,}|~{3,})(.*)$/;

// ----------------------------------------------------------------------------------------
// 생성 contract의 줄 끝 공백 제거
//
// Markdown 강제 줄바꿈 의미는 백슬래시로 보존한다.
// ----------------------------------------------------------------------------------------
const normalizeContractLine = (line: string): string => {
	const hasMarkdownHardBreak = / {2,}$/.test(line);
	const normalizedLine = line.trimEnd();

	if (normalizedLine.length === 0) return "";

	return hasMarkdownHardBreak ? `${normalizedLine}\\` : normalizedLine;
};

// ----------------------------------------------------------------------------------------
// 여러 줄로 접어 쓴 `**Impact: ...**` 선언의 복원
//
// 한 줄로 이어 붙인다. 긴 선언은 소스에서 접어 쓰고 여기서 이어 붙이므로 계약 비교는 한 줄
// 기준으로 유지된다.
// ----------------------------------------------------------------------------------------
const joinFoldedImpactDeclaration = (lines: readonly string[]): string[] => {
	const joined: string[] = [];

	for (const line of lines) {
		const previous = joined[joined.length - 1];
		const isOpenImpact = previous !== undefined && /^\s*\*\*Impact:/.test(previous) && !previous.endsWith("**");

		if (isOpenImpact && line.trim().length > 0) {
			joined[joined.length - 1] = `${previous} ${line.trim()}`;
			continue;
		}

		joined.push(line);
	}

	return joined;
};

// ----------------------------------------------------------------------------------------
// 전체 규칙 본문에서 뽑은 compact contract 조각
//
//   normativeBody
//      첫 예시 라벨 앞 규범 산문이고 헤딩은 `#` 한 단계 올린다.
//
//   firstExamplePair
//      첫 예시 라벨부터 첫 Correct 펜스 끝까지이고 MEDIUM contract에 그대로 실린다.
// ----------------------------------------------------------------------------------------
interface NormativeRuleContract {
	normativeBody: string;
	firstExamplePair: string;
}

// ----------------------------------------------------------------------------------------
// 규범 앞부분과 첫 Incorrect 경계 검증
//
// 전체 규칙 본문에서 펜스 예시 밖의 경계를 찾는다.
// ----------------------------------------------------------------------------------------
const readNormativeRuleContract = (rule: SkillRule): NormativeRuleContract => {
	const normalizedBody = rule.body.replace(/\r\n?/g, "\n");
	const lines = normalizedBody.split("\n");
	let activeFenceCharacter: "`" | "~" | undefined;
	let activeFenceLength = 0;
	let activeExampleMarker: "Incorrect" | "Correct" | undefined;
	let activeExampleHasContent = false;
	let currentOffset = 0;
	let incorrectBoundaryOffset: number | undefined;
	let firstExamplePairEndOffset: number | undefined;
	let pendingExampleMarker: "Incorrect" | "Correct" | undefined;
	let correctMarkerFound = false;

	for (const [lineIndex, line] of lines.entries()) {
		const fenceMatch = fencePattern.exec(line);

		if (fenceMatch) {
			const fence = fenceMatch[1];
			const fenceCharacter = fence[0] as "`" | "~";

			if (activeFenceCharacter === undefined) {
				const fenceLanguage = (fenceMatch[2] ?? "").trim();

				if (incorrectBoundaryOffset === undefined && fenceLanguage !== proseFenceLanguage) {
					throw new Error(
						`${toRuleId(rule)}: compact contract must not contain a fenced example before the Incorrect boundary; only a ${proseFenceLanguage} diagram may sit in the prose.`,
					);
				}

				activeExampleMarker = pendingExampleMarker;
				activeExampleHasContent = false;
				pendingExampleMarker = undefined;

				activeFenceCharacter = fenceCharacter;
				activeFenceLength = fence.length;
			} else if (
				fenceCharacter === activeFenceCharacter &&
				fence.length >= activeFenceLength &&
				(fenceMatch[2] ?? "").trim().length === 0
			) {
				if (activeExampleMarker !== undefined && !activeExampleHasContent) {
					throw new Error(`${toRuleId(rule)}: ${activeExampleMarker} fenced example must contain non-whitespace content.`);
				}

				if (activeExampleMarker === "Correct") {
					if (!correctMarkerFound) {
						firstExamplePairEndOffset = currentOffset + line.length;
					}

					correctMarkerFound = true;
				}

				activeFenceCharacter = undefined;
				activeFenceLength = 0;
				activeExampleMarker = undefined;
				activeExampleHasContent = false;
			} else if (activeExampleMarker !== undefined && line.trim().length > 0) {
				activeExampleHasContent = true;
			}
		} else if (activeFenceCharacter === undefined) {
			const marker = exampleMarkerPattern.exec(line);

			if (marker) {
				if (pendingExampleMarker !== undefined) {
					throw new Error(`${toRuleId(rule)}: ${pendingExampleMarker} marker must be followed by a fenced example.`);
				}

				// 첫 예시 라벨이 규범과 예시의 경계이고, 도구 설정처럼 대비가 뜻이 없는 규칙은 Correct만
				// 가능하다.
				if (incorrectBoundaryOffset === undefined) {
					incorrectBoundaryOffset = currentOffset;
				}

				pendingExampleMarker = marker[1] as "Incorrect" | "Correct";
			} else if (incorrectBoundaryOffset !== undefined && line.trim().length > 0) {
				throw new Error(
					`${toRuleId(rule)}: compact contract has prose after the first Incorrect boundary at body line ${lineIndex + 1}; move normative prose before examples.`,
				);
			}
		} else if (activeExampleMarker !== undefined && line.trim().length > 0) {
			activeExampleHasContent = true;
		}

		currentOffset += line.length + (lineIndex < lines.length - 1 ? 1 : 0);
	}

	if (activeFenceCharacter !== undefined) {
		throw new Error(`${toRuleId(rule)}: full rule body has an unclosed fenced example.`);
	}

	if (pendingExampleMarker !== undefined) {
		throw new Error(`${toRuleId(rule)}: ${pendingExampleMarker} marker must be followed by a fenced example.`);
	}

	if (incorrectBoundaryOffset === undefined) {
		throw new Error(`${toRuleId(rule)}: compact contract requires an anchored Incorrect or Correct example boundary.`);
	}

	if (!correctMarkerFound || firstExamplePairEndOffset === undefined) {
		throw new Error(`${toRuleId(rule)}: full rule body requires at least one fenced Correct example after the first example marker.`);
	}

	const normativeLines = joinFoldedImpactDeclaration(
		normalizedBody.slice(0, incorrectBoundaryOffset).trim().split("\n").map(normalizeContractLine),
	);
	const normativeBody = normativeLines.join("\n");
	const expectedHeading = `## ${rule.title}`;
	const expectedImpact = `**Impact: ${rule.impact} (${rule.impactDescription})**`;
	const headingCount = normativeLines.filter((line) => line.startsWith("## ")).length;
	const impactLines = normativeLines.filter((line) => /^\s*\*\*Impact:/.test(line));
	const guidanceLines = normativeLines.filter(
		(line) => line.trim().length > 0 && line !== expectedHeading && !/^\s*\*\*Impact:/.test(line),
	);

	if (normativeLines[0] !== expectedHeading || headingCount !== 1) {
		throw new Error(`${toRuleId(rule)}: compact contract requires exactly one heading matching frontmatter title.`);
	}

	if (impactLines.length !== 1 || impactLines[0] !== expectedImpact) {
		throw new Error(`${toRuleId(rule)}: compact contract requires exactly one Impact declaration matching frontmatter.`);
	}

	if (guidanceLines.length === 0) {
		throw new Error(`${toRuleId(rule)}: compact contract requires normative guidance before the Incorrect boundary.`);
	}

	return {
		normativeBody: normativeBody.replace(/^## /, "# "),
		firstExamplePair: normalizedBody.slice(incorrectBoundaryOffset, firstExamplePairEndOffset).trim(),
	};
};

// ----------------------------------------------------------------------------------------
// 기본 로드할 compact contract 생성
//
// Selected, Unknown 규칙이 대상이다.
// ----------------------------------------------------------------------------------------
export const generateRuleContractMarkdown = (rule: SkillRule): string => {
	if (!supportedImpactLevels.has(rule.impact)) {
		throw new Error(`${toRuleId(rule)}: unsupported impact level "${rule.impact}"; expected CRITICAL, HIGH, or MEDIUM.`);
	}

	const {normativeBody, firstExamplePair} = readNormativeRuleContract(rule);
	const fullRuleLink = `../rules/${encodePathSegment(rule.fileName)}`;
	const routingMetadata = [
		rule.requiresSelected.length === 0
			? undefined
			: `**Requires selected:** ${sortRoutingTargets(rule.requiresSelected).map(formatInlineCode).join(", ")} (함께 적용)`,
		rule.requiredOnCompletion ? "**Required on completion:** 마무리 시 항상 적용" : undefined,
	]
		.filter((line): line is string => line !== undefined)
		.join("\n\n");
	const routingMetadataBlock = routingMetadata.length === 0 ? "" : `\n\n${routingMetadata}`;
	const fullRuleNotice = (tail: string): string =>
		`# ${escapeMarkdownText(rule.title)}\n\n**Impact: ${rule.impact}**${routingMetadataBlock}\n\n> ${rule.impact} rule: must read the [full rule](${fullRuleLink}) in full, prose and every example, before implementation or review${tail}.\n`;

	if (rule.impact === "CRITICAL") return fullRuleNotice(", and re-check the result against its Correct examples before completion");
	if (rule.impact === "HIGH") return fullRuleNotice("");

	return `${normativeBody}${routingMetadataBlock}\n\n${firstExamplePair}\n\n> 나머지 예시와 예외는 [full rule](${fullRuleLink})에 있습니다.\n`;
};

const sortSections = (sections: SkillSection[]): SkillSection[] =>
	[...sections].sort(
		(left, right) =>
			left.order - right.order || compareRoutingText(left.title, right.title) || compareRoutingText(left.prefix, right.prefix),
	);

// ----------------------------------------------------------------------------------------
// local 규칙 stable ID 목록 계산
//
// compact index와 같은 순서로 계산한다.
// ----------------------------------------------------------------------------------------
export const toCanonicalRoutingRuleIds = (document: LoadedSkillDocument): string[] =>
	sortSections(document.sections).flatMap((section) => filterRoutingRulesForSection(section, document.rules).map(toRuleId));

const sortCompanions = (companions: SkillCompanion[]): SkillCompanion[] =>
	[...companions].sort(
		(left, right) =>
			compareRoutingText(left.skill, right.skill) ||
			compareRoutingText(left.mode, right.mode) ||
			compareRoutingText(left.appliesWhen ?? "", right.appliesWhen ?? ""),
	);

const assertRuleAssignments = (document: LoadedSkillDocument, sections: SkillSection[]): void => {
	assertValidRoutingIdentifier(document.skillName, `${document.skillName}: routing index skill name`);

	for (const section of sections) {
		assertValidRoutingIdentifier(section.prefix, `${document.skillName}: section prefix`);
	}

	const ruleIds = document.rules.map(toRuleId);
	const duplicateRuleId = ruleIds.find((ruleId, index) => ruleIds.indexOf(ruleId) !== index);

	if (duplicateRuleId) {
		throw new Error(`${document.skillName}: duplicate rule stable ID "${duplicateRuleId}" in local rules.`);
	}

	for (const rule of document.rules) {
		if (!rule.fileName.endsWith(".md")) {
			throw new Error(`${document.skillName}: invalid rule filename "${rule.fileName}"; routing rules must use a .md suffix.`);
		}

		assertValidRoutingIdentifier(toRuleId(rule), `${document.skillName}: ${rule.fileName} stable ID`);
		assertValidRoutingIdentifier(rule.prefix, `${document.skillName}: ${rule.fileName} section prefix`);

		for (const tag of rule.tags) {
			assertValidRoutingIdentifier(tag, `${document.skillName}: ${rule.fileName} tag`);
		}

		for (const reviewTarget of rule.reviewWith) {
			assertValidRuleTarget(reviewTarget, `${document.skillName}: ${rule.fileName}`, "reviewWith");
		}

		for (const requiredTarget of rule.requiresSelected) {
			assertValidRuleTarget(requiredTarget, `${document.skillName}: ${rule.fileName}`, "requiresSelected");
		}

		const assignmentCount = sections.filter((section) => section.prefix === rule.prefix).length;

		if (assignmentCount !== 1) {
			throw new Error(
				`${document.skillName}: every local rule must be assigned exactly once; "${toRuleId(rule)}" matched ${assignmentCount} sections.`,
			);
		}

		assertRoutingCondition(rule.appliesWhen, `${document.skillName}: ${rule.fileName} appliesWhen for RULES_INDEX.md`);
	}
};

const assertDirectCompanions = (skillName: string, companions: SkillCompanion[]): void => {
	for (const companion of companions) {
		assertValidRoutingIdentifier(companion.skill, `${skillName}: companion routing skill name`);
	}

	const companionNames = companions.map((companion) => companion.skill);
	const duplicateCompanionName = companionNames.find((companionName, index) => companionNames.indexOf(companionName) !== index);

	if (duplicateCompanionName) {
		throw new Error(`${skillName}: duplicate direct companion "${duplicateCompanionName}" in routing index input.`);
	}
};

// ----------------------------------------------------------------------------------------
// 라우팅에 영향을 주는 값만 정규 JSON으로 직렬화
//
// 결과의 sha256이 `RULES_INDEX.md`의 Routing digest다.
// ----------------------------------------------------------------------------------------
const createCanonicalRoutingSource = (args: CanonicalRoutingSourceArgs): string => {
	const {document, sections, companions} = args;

	return JSON.stringify({
		skill: document.skillName,
		title: document.metadata.title,
		version: document.metadata.version,
		rulesIndexRendererVersion,
		contractRendererVersion,
		companions: companions.map((companion) => ({skill: companion.skill, mode: companion.mode, appliesWhen: companion.appliesWhen ?? null})),
		sections: sections.map((section) => ({
			order: section.order,
			title: section.title,
			prefix: section.prefix,
			impact: section.impact,
			rules: filterRoutingRulesForSection(section, document.rules).map((rule) => ({
				id: toRuleId(rule),
				bodySha256: createHash("sha256").update(rule.body).digest("hex"),
				title: rule.title,
				impact: rule.impact,
				appliesWhen: rule.appliesWhen,
				requiresSelected: sortRoutingTargets(rule.requiresSelected),
				requiredOnCompletion: rule.requiredOnCompletion,
				reviewWith: sortRoutingTargets(rule.reviewWith),
				tags: [...rule.tags].sort(compareRoutingText),
			})),
		})),
	});
};

export const toRoutingOrdinalPrefix = (skillName: string): string => {
	const firstAlphanumericCharacter = Array.from(skillName).find((character) => /[A-Za-z0-9]/.test(character));

	if (!firstAlphanumericCharacter) {
		throw new Error(`${skillName}: skill name must contain an alphanumeric character for routing ordinals.`);
	}

	return firstAlphanumericCharacter.toUpperCase();
};

// ----------------------------------------------------------------------------------------
// 규칙 파일명의 `NN-MM-` 번호로 계산한 local 순번
//
// 사이트 번호와 `rules/` 파일명 번호가 같아야 사람이 규칙을 바로 찾는다. 파일명 번호는
// validate에서 선택이라 번호가 없으면 파일 순번을 쓴다.
//
// formatRoutingOrdinal("react", "03-02-foo.md", 5) → "R03-02"
// formatRoutingOrdinal("react", "foo.md", 5) → "R05"
// ----------------------------------------------------------------------------------------
export const formatRoutingOrdinal = (skillName: string, fileName: string, localOrdinal: number): string => {
	const ordinalPrefix = toRoutingOrdinalPrefix(skillName);
	const numberMatch = /^(\d+)-(\d+)-/.exec(fileName);

	if (!numberMatch) return `${ordinalPrefix}${String(localOrdinal).padStart(2, "0")}`;

	const [, sectionNumber, ruleNumber] = numberMatch;

	return `${ordinalPrefix}${sectionNumber}-${ruleNumber}`;
};

// ----------------------------------------------------------------------------------------
// compact `RULES_INDEX.md` 생성
//
// 같은 입력은 항상 같은 결과를 낸다.
// ----------------------------------------------------------------------------------------
export const generateRulesIndexMarkdown = (document: LoadedSkillDocument, directCompanions: SkillCompanion[]): string => {
	const orderedSections = sortSections(document.sections);
	const orderedCompanions = sortCompanions(directCompanions);
	assertRuleAssignments(document, orderedSections);
	assertDirectCompanions(document.skillName, orderedCompanions);

	const canonicalRoutingSource = createCanonicalRoutingSource({document, sections: orderedSections, companions: orderedCompanions});
	const digest = createHash("sha256").update(canonicalRoutingSource).digest("hex");
	const lines = [
		`# ${escapeMarkdownText(document.metadata.title)} Rule Index`,
		"",
		`- Skill: ${formatInlineCode(document.skillName)}`,
		`- Routing digest: \`sha256:${digest}\``,
	];

	if (orderedCompanions.length > 0) {
		lines.push("", "## Direct Companions", "");

		for (const companion of orderedCompanions) {
			const condition = companion.appliesWhen ? ` · Applies when: ${escapeMarkdownText(companion.appliesWhen)}` : "";
			const companionPathSegment = encodePathSegment(companion.skill);
			lines.push(
				`- ${formatInlineCode(companion.skill)} (${formatInlineCode(companion.mode)})${condition} · [SKILL.md](../${companionPathSegment}/SKILL.md) · [RULES_INDEX.md](../${companionPathSegment}/RULES_INDEX.md)`,
			);
		}
	}

	lines.push("", "## Local Rules", "");
	let localOrdinal = 0;

	for (const section of orderedSections) {
		const rules = filterRoutingRulesForSection(section, document.rules);

		for (const rule of rules) {
			localOrdinal += 1;
			const ordinal = formatRoutingOrdinal(document.skillName, rule.fileName, localOrdinal);
			const reviewWith = rule.reviewWith.length > 0 ? ` | reviewWith: ${sortRoutingTargets(rule.reviewWith).join(", ")}` : "";
			const completionGate = rule.requiredOnCompletion ? " | completionGate" : "";
			lines.push(`- ${ordinal} | ${toRuleId(rule)} | ${escapeMarkdownText(rule.appliesWhen ?? "")}${completionGate}${reviewWith}`);
		}
	}

	return lines.join("\n");
};
