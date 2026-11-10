export interface PackagePaths {
	currentDir: string;
	packageDir: string;
	repoDir: string;
	skillRootDir: string;
}

// ----------------------------------------------------------------------------------------
// `--all`, `--skill=<이름>`, `--skill-root=<절대 경로>` 인자를 읽은 결과
//
// skillRootDir: fixture나 별도 체크아웃을 대상으로 할 skill 루트, 절대 경로
// ----------------------------------------------------------------------------------------
export interface CliArgs {
	all: boolean;
	skill?: string;
	skillRootDir?: string;
}

export interface SkillPaths {
	skillName: string;
	skillDir: string;
	rulesDir: string;
	metadataPath: string;
	skillEntrypointPath: string;
	sectionsPath: string;
	rulesIndexPath: string;
	ruleContractsDir: string;
	routingEvalsPath: string;
}

export type CompanionMode = "required" | "conditional";

// ----------------------------------------------------------------------------------------
// progressive skill이 선언한 companion skill 관계
//
// mode: required는 항상 활성화, conditional은 appliesWhen이 맞을 때만 활성화
// appliesWhen: conditional일 때만 있는 활성화 조건
// ----------------------------------------------------------------------------------------
export interface SkillCompanion {
	skill: string;
	mode: CompanionMode;
	appliesWhen?: string;
}

// ----------------------------------------------------------------------------------------
// `metadata.json`에서 읽은 skill 메타데이터
//
// lead: 사이트 skill 개요 페이지의 글머리, 다루는 범위를 쉼표로 이은 명사구 한 줄
// references: 사이트 skill 개요 페이지 끝의 참고 자료 목록
// ----------------------------------------------------------------------------------------
export interface SkillMetadata {
	title: string;
	version: string;
	organization: string;
	date?: string;
	abstract: string;
	lead?: string;
	references?: string[];
	companions?: SkillCompanion[];
}

export interface LoadedSkillDocument {
	skillName: string;
	metadata: SkillMetadata;
	sections: SkillSection[];
	rules: SkillRule[];
}

// ----------------------------------------------------------------------------------------
// `rules/_sections.md`에서 읽은 섹션 메타데이터
//
// lead: 사이트 섹션 페이지의 글머리, 주제를 쉼표로 이은 명사구 한 줄, 없으면 빈 문자열
// prefix: 규칙 stable ID의 첫 토큰과 짝이 되는 섹션 접두사
// ----------------------------------------------------------------------------------------
export interface SkillSection {
	order: number;
	title: string;
	titleKo: string;
	lead: string;
	prefix: string;
	impact: string;
	description: string;
}

// ----------------------------------------------------------------------------------------
// 개별 규칙 Markdown 파싱 결과
//
// prefix: stable ID의 첫 토큰, 섹션 prefix와 맞춰 규칙을 섹션에 배정
// impactDescription: 중요도 부연 설명, 본문 Impact 줄과 일치 필수
// appliesWhen: 규칙을 선택하는 한 줄 조건, block list면 불렛을 이은 문장
// appliesWhenBullets: block list로 쓴 appliesWhen의 불렛 원문, 사람용 화면에 노출
// requiresSelected: 이 규칙이 선택되면 함께 선택돼야 하는 규칙 stable ID
// requiredOnCompletion: 활성 skill의 마무리에 항상 선택해야 하는 규칙인지 여부
// reviewWith: 함께 검토할 local 또는 companion 규칙 stable ID
// body: frontmatter를 뺀 본문, `<<<` 스니펫은 코드 펜스로 바꿔 넣은 상태
// source: 스니펫을 바꾸기 전 원문, 사람용 사이트가 `<<<` 줄을 그대로 읽음
// ----------------------------------------------------------------------------------------
export interface SkillRule {
	fileName: string;
	prefix: string;
	title: string;
	titleKo: string;
	impact: string;
	impactDescription?: string;
	tags: string[];
	appliesWhen?: string;
	appliesWhenBullets?: string[];
	requiresSelected: string[];
	requiredOnCompletion: boolean;
	reviewWith: string[];
	body: string;
	source: string;
}

// ----------------------------------------------------------------------------------------
// 라우팅 fixture가 기대하는 활성 skill별 정확한 규칙 분할
//
// expectedSelected: skill 이름 → 선택 규칙 stable ID 목록
// ----------------------------------------------------------------------------------------
export interface RoutingExpectedPartition {
	expectedSkills: string[];
	expectedSelected: Record<string, string[]>;
}

// ----------------------------------------------------------------------------------------
// 최초 선택 뒤 작업 범위가 넓어질 때의 단조 라우팅 오라클
//
// evidence: 범위 확장을 입증하는 구체적인 변경 근거
// files: 범위 확장 뒤 최종 변경 파일 목록
// ----------------------------------------------------------------------------------------
export interface RoutingScopeDrift extends RoutingExpectedPartition {
	evidence: string;
	files: string[];
}

// ----------------------------------------------------------------------------------------
// 작업 하나의 정확한 progressive 라우팅 오라클
//
// id: 전체 매니페스트에서 고유한 시나리오 식별자
// files: 최초 선택 시점의 변경 파일 목록
// scopeDrift: 작업 중 범위가 넓어진 경우의 최종 라우팅 오라클
// ----------------------------------------------------------------------------------------
export interface RoutingEvalScenario extends RoutingExpectedPartition {
	id: string;
	prompt: string;
	files: string[];
	scopeDrift?: RoutingScopeDrift;
}

export interface RoutingEvalManifest {
	version: 1;
	skill: string;
	scenarios: RoutingEvalScenario[];
}
