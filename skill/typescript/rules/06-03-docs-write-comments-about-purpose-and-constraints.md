---
title: Write Comments About Purpose and Constraints
titleKo: 주석에는 이름에 없는 목적과 제약을 문장으로 적습니다
impact: HIGH
impactDescription: 몇 해 뒤에 코드를 여는 사람도 주석을 한눈에 읽고 고칠 수 있습니다
appliesWhen:
  - TypeScript, TSX의 상자나 한 줄 주석 문구를 추가, 수정, 번역하거나 검토할 때
  - 상자 바로 아래 코드를 바꿀 때
  - 주석 모양을 바꾸거나 블록 주석, TSDoc 태그를 쓰려 할 때
tags: docs, comments
---

## Write Comments About Purpose and Constraints

**Impact: HIGH (몇 해 뒤에 코드를 여는 사람도 주석을 한눈에 읽고 고칠 수 있습니다)**

주석에는 이름과 시그니처에 없는 목적, 제약, 부수효과만 적습니다.
적을 정보가 없으면 주석을 지웁니다.
상자를 둘 자리는 `docs-put-boxes-on-groups-and-blocks`가 정합니다.

### 언어

주석 언어는 프로젝트의 AGENTS.md가 정합니다.
정하지 않았으면 한국어로 씁니다.
한 저장소의 주석은 한 언어로 씁니다.

| 언어 | 문장 |
| --- | --- |
| 영어 | 현재형 평서문으로 쓰고 문장 끝에 마침표를 찍습니다. 상자 제목은 대문자로 씁니다 |
| 한국어 | 한다체 평서문으로 쓰고 문장 끝에 마침표를 찍습니다. 상자 제목은 명사구로 씁니다 |

코드 이름, 제품 이름, 약어는 어느 언어에서나 원문 그대로 씁니다.

### 모양

TypeScript, TSX 주석은 `//` 줄 주석으로만 씁니다.
`/** */`, `/* */`, JSX `{/* */}` 블록 주석은 쓰지 않고 마우스 오버 설명도 기대하지 않습니다.
모양은 상자와 한 줄 `//` 둘이고 상자 위아래 줄의 대시 88개는 Black의 기본 줄 길이에서 가져왔습니다.

| 상자 부분 | 기준 |
| --- | --- |
| 위아래 줄 | `// ` 뒤 대시 88개로 91칸입니다. 함수 본문 안 상자도 대시 개수가 같고 들여쓴 만큼 오른쪽으로 길어집니다 |
| 제목 | 상자의 첫 줄입니다. 무엇을 다루는지 말하는 짧은 이름이고 문장으로 쓰지 않습니다 |
| 본문 | 제목 아래 빈 `//` 줄 뒤에 문장으로 씁니다. 줄이 91칸(한글 2칸)을 넘으면 다음 줄로 이어 쓰고 생각이 바뀌면 빈 `//` 줄로 문단을 나눕니다 |
| 항목 | 이름마다 따로 할 말이 있을 때 둡니다. 이름은 `//   ` 뒤에 한 줄로, 설명은 다음 줄부터 `//      ` 뒤에 문장으로 씁니다 |
| 값 목록 | 값마다 뜻이 다르면 항목 설명 아래 `//        ` 뒤에 값과 뜻을 두 칸 띄워 맞춥니다 |
| 빈 `//` 줄 | 제목 뒤, 문단 사이, 항목 사이에만 둡니다. 상자는 빈 줄로 시작하거나 끝나지 않습니다 |
| 상자 앞뒤 | 위에 빈 줄 하나를 둡니다. 블록 첫 줄이면 두지 않습니다. 바로 아래는 코드이고 상자 둘을 붙이지 않습니다 |

덧붙일 사실이 없는 구획 상자는 제목만 둡니다.
한 줄 `//`는 바로 아래 한 줄에만 해당하는 이유 하나를 문장으로 적습니다.
테스트 사례의 준비, 실행, 검증 구간은 테스트 규칙이 정한 한 줄 구간 주석을 따르고 이 상자 기준을 적용하지 않습니다.
`// biome-ignore`, `/* @vite-ignore */` 같은 도구 지시 주석은 그 도구가 정한 꼴을 따릅니다.

### 고정 항목

대상이 따로 없는 사실은 아래 이름의 항목으로 적습니다.
한 줄 `//`로 적을 때는 `// 예외: 문장`처럼 이름 뒤에 쌍점을 붙입니다.

| 한국어 | 영어 | 뜻 |
| --- | --- | --- |
| `제약` | `Constraint` | 바깥(API, 라이브러리, 명세, 기획)이 정해 코드가 따르는 조건 |
| `예외` | `Exception` | 규칙을 비껴간 자리와 확인할 수 있는 근거. `docs-justify-convention-exceptions-with-a-reason-comment`의 자리 |
| `임시` | `Temporary` | 없어질 사실과 지울 조건 |

괄호 꼬리는 출처 전용입니다.
누가 정했는지와 연도를 포함한 날짜, 또는 티켓 ID를 문장 끝 마침표 앞에 적습니다.
`(백엔드 답변 2026-10-14)`, `(backend reply 2026-10-14)`, `(기획 PLAN-123)`가 그 예입니다.
날짜만 있는 `(2026-10-14)`는 출처가 아닙니다.

### 내용

| 내용 | 판정 |
| --- | --- |
| 이유, 제약, 단위와 형식, 경계값 | 적습니다. 원인과 결과는 `그래서`, `because`처럼 문장으로 잇습니다 |
| 파일 밖과의 관계(같은 쿼리 키를 쓰는 곳, 무효화를 누가 하는지) | 적습니다 |
| 이름과 코드가 이미 말하는 것, 바로 아래 코드를 옮긴 설명 | 쓰지 않습니다 |
| 이름과 타입을 옮겨 적는 항목 | 쓰지 않습니다. 이름과 타입에 없는 정보가 있는 대상만 적습니다 |
| 예전 동작과 바뀐 경위 | 쓰지 않습니다. 커밋 메시지에 둡니다 |
| 비유와 의인화(`몫`, `껍데기`, `babysit`) | 쓰지 않습니다. `담당`, `래퍼`, `실패`, `교체`처럼 그대로 적습니다 |
| 가운뎃점이나 대시로 잇는 나열 | 쉼표로 잇습니다. 화살표는 `호출 → 결과` 예시에만 씁니다 |
| `@param`, `@returns`, `@deprecated`, `@example`, `{@link}` 같은 TSDoc 태그 | 쓰지 않습니다. 매개변수와 반환값은 본문이나 항목에, 사용 예는 `호출 → 결과` 줄에, 폐기 예정은 `임시` 항목에 대체 이름과 함께 적습니다 |
| `@api`, `@helper`, `@field`, `@summary` 같은 역할 태그 | 쓰지 않습니다. 이름과 문법이 드러내는 역할을 태그로 반복하지 않습니다 |
| 부르는 API 경로(`엔드포인트:` 줄) | 쓰지 않습니다. 부르는 함수의 정의로 이동하면 보입니다 |
| AI 도움 표시 | 쓰지 않습니다. 커밋 메시지와 `git blame`이 맡습니다 |
| 코드를 고친 뒤 바로 위 상자 | 문장이 아직 맞는지 함께 확인합니다. 맞지 않는 문장은 고치거나 지웁니다 |

### 한국어로 쓸 때의 낱말

| 낱말 | 주석 표기 |
| --- | --- |
| 우리말로 통하는 일반 낱말 | 우리말이나 흔한 음차. request는 요청, product는 상품, back 버튼은 뒤로가기 또는 백 버튼, reset은 리셋 |
| 우리말이 없거나 어색한 기술 용어 | 한글 음차. provider는 프로바이더, wrapper는 래퍼, render는 렌더 |
| 코드 이름, 제품 이름, 약어 | 원문 그대로. `QueryClientProvider`, MUI, API |

조사는 영어 낱말 뒤에도 붙여 씁니다(`MUI가`).

참고: [Google 코드 리뷰 가이드: 주석](https://google.github.io/eng-practices/review/reviewer/looking-for.html#comments),
[Go 문서: 선언 바로 위에 두는 문서 주석](https://go.dev/doc/comment),
[Rust 스타일 가이드: 줄 주석 `//`을 블록 주석보다 선호](https://doc.rust-lang.org/style-guide/#comments),
[ESLint 문서: multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style),
[Black 문서: 기본 줄 길이 88](https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html).

**Incorrect 1 (선언 이름을 옮겨 적기만 합니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/01-incorrect-1.ts

<<< ../examples/docs-write-comments-about-purpose-and-constraints/01-incorrect-2.ts

**Correct 1 (제목 아래에 이름에 없는 사실을 문장으로 더합니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/02-correct-1.ts

<<< ../examples/docs-write-comments-about-purpose-and-constraints/02-correct-2.ts

**Incorrect 2 (긴 문장 하나에 경위, 가운뎃점, 대시를 섞습니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/03-incorrect.ts

**Correct 2 (제목과 지금 참인 사실의 문장으로 나눕니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/04-correct.ts

**Incorrect 3 (이름과 설명을 한 줄에 붙여 설명의 시작 칸이 줄마다 다릅니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/05-incorrect.ts

**Correct 3 (이름 줄 아래에 설명을 들여 씁니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/06-correct.ts

**Incorrect 4 (역할 태그로 선언의 성격을 다시 적습니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/07-incorrect.ts

**Correct 4 (태그를 지우고 선언이 맡는 일을 문장으로 적습니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/08-correct.ts

**Incorrect 5 (바뀐 경위와 날짜만 있는 괄호를 적습니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/09-incorrect.ts

**Correct 5 (지금 참인 사실에 출처를 붙이고 없어질 사실은 `임시` 항목으로 둡니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/10-correct.ts

**Incorrect 6 (낱말을 화살표로 이어 이유가 문장으로 읽히지 않습니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/11-incorrect.ts

**Correct 6 (원인과 결과를 문장으로 잇습니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/12-correct.ts

**Incorrect 7 (블록 주석과 `//` 한 줄로 선언을 설명합니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/13-incorrect-1.ts

<<< ../examples/docs-write-comments-about-purpose-and-constraints/13-incorrect-2.ts

**Correct 7 (같은 내용을 선언 바로 위 상자로 적습니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/14-correct-1.ts

<<< ../examples/docs-write-comments-about-purpose-and-constraints/14-correct-2.ts

**Correct (주석 언어가 영어인 프로젝트는 같은 모양을 영어 문장과 대문자 제목으로 씁니다):**

<<< ../examples/docs-write-comments-about-purpose-and-constraints/15-correct.ts
