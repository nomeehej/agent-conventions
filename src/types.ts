export interface PackagePaths {
	currentDir: string;
	packageDir: string;
	repoDir: string;
	skillRootDir: string;
}

// ----------------------------------------------------------------------------------------
// CLI 인자
//
// `--all`, `--skill=<이름>`, `--skill-root=<절대 경로>`를 읽은 결과다.
//
//   skillRootDir
//      fixture나 별도 체크아웃을 대상으로 할 skill 루트이고 절대 경로다.
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
//   mode
//      required는 항상 활성화하고 conditional은 appliesWhen이 맞을 때만 활성화한다.
//
//   appliesWhen
//      conditional일 때만 있는 활성화 조건이다.
// ----------------------------------------------------------------------------------------
export interface SkillCompanion {
	skill: string;
	mode: CompanionMode;
	appliesWhen?: string;
}

// ----------------------------------------------------------------------------------------
// `metadata.json`에서 읽은 skill 메타데이터
//
//   lead
//      사이트 skill 개요 페이지의 글머리이고 다루는 범위를 쉼표로 이은 명사구 한 줄이다.
//
//   references
//      사이트 skill 개요 페이지 끝의 참고 자료 목록이다.
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
//   lead
//      사이트 섹션 페이지의 글머리이고 주제를 쉼표로 이은 명사구 한 줄이다. 없으면 빈
//      문자열이다.
//
//   prefix
//      규칙 stable ID의 첫 토큰과 짝이 되는 섹션 접두사다.
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
//   prefix
//      stable ID의 첫 토큰이고 섹션 prefix와 맞춰 규칙을 섹션에 배정한다.
//
//   impactDescription
//      중요도 부연 설명이고 본문 Impact 줄과 일치해야 한다.
//
//   appliesWhen
//      규칙을 선택하는 한 줄 조건이다. block list면 불렛을 이은 문장이다.
//
//   appliesWhenBullets
//      block list로 쓴 appliesWhen의 불렛 원문이고 사람용 화면에 노출한다.
//
//   requiresSelected
//      이 규칙이 선택되면 함께 선택돼야 하는 규칙 stable ID다.
//
//   requiredOnCompletion
//      활성 skill의 마무리에 항상 선택해야 하는 규칙인지 여부다.
//
//   reviewWith
//      함께 검토할 local 또는 companion 규칙 stable ID다.
//
//   body
//      frontmatter를 뺀 본문이고 `<<<` 스니펫은 코드 펜스로 바꿔 넣은 상태다.
//
//   source
//      스니펫을 바꾸기 전 원문이고 사람용 사이트가 `<<<` 줄을 그대로 읽는다.
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
//   expectedSelected
//      skill 이름이 키이고 값은 선택 규칙 stable ID 목록이다.
// ----------------------------------------------------------------------------------------
export interface RoutingExpectedPartition {
	expectedSkills: string[];
	expectedSelected: Record<string, string[]>;
}

// ----------------------------------------------------------------------------------------
// 범위 확장 뒤의 단조 라우팅 오라클
//
// 최초 선택 뒤 작업 범위가 넓어질 때 쓴다.
//
//   evidence
//      범위 확장을 입증하는 구체적인 변경 근거다.
//
//   files
//      범위 확장 뒤 최종 변경 파일 목록이다.
// ----------------------------------------------------------------------------------------
export interface RoutingScopeDrift extends RoutingExpectedPartition {
	evidence: string;
	files: string[];
}

// ----------------------------------------------------------------------------------------
// 작업 하나의 정확한 progressive 라우팅 오라클
//
//   id
//      전체 매니페스트에서 고유한 시나리오 식별자다.
//
//   files
//      최초 선택 시점의 변경 파일 목록이다.
//
//   scopeDrift
//      작업 중 범위가 넓어진 경우의 최종 라우팅 오라클이다.
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
