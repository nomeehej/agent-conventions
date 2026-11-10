---
title: Write Korean Comments About Purpose and Constraints
titleKo: 주석에는 목적과 제약만 짧은 한국어 명사형으로 적습니다
impact: HIGH
impactDescription: 몇 해 뒤에 코드를 여는 사람도 주석을 한눈에 읽고 고칠 수 있습니다
appliesWhen:
  - TypeScript, TSX의 상자나 한 줄 주석 문구를 추가, 수정, 번역하거나 검토할 때
  - 상자 바로 아래 코드를 바꿀 때
  - 주석 모양을 바꾸거나 블록 주석, TSDoc 태그를 쓰려 할 때
tags: docs, comments
---

## Write Korean Comments About Purpose and Constraints

**Impact: HIGH (몇 해 뒤에 코드를 여는 사람도 주석을 한눈에 읽고 고칠 수 있습니다)**

주석에는 이름과 시그니처에 없는 목적, 제약, 부수효과만 스펙 문서의 한국어로 적습니다.
적을 정보가 없으면 주석을 지웁니다.
상자를 둘 자리는 `docs-put-boxes-on-groups-and-blocks`가 정합니다.

### 문장

| 항목 | 기준 |
| --- | --- |
| 끝맺음 | 한자어 명사로 끝냅니다(`조회`, `병합`, `미포함`, `필요`, `불가`, `고정`). 용언을 명사형으로 바꾼 `읽음`, `둠`, `넘김`, `합쳐짐`은 쓰지 않습니다. 상태를 말하는 `없음`, `있음`, `않음`, `열림`, `닫힘` 다섯만 허용하고 `같음`, `선택됨`, `비어 있음`은 `일치`, `선택`, `빈 값`처럼 씁니다. 줄 끝에는 마침표를 찍지 않습니다 |
| 한 줄 | 사실 하나만 적습니다. 상자의 요약 줄만 무엇과 핵심을 쉼표로 이어 둘을 적습니다(`배송 예정일 계산, 출고 마감과 휴일 반영`) |
| 조사 | 주제 조사는 한 줄에 하나까지(`패턴 ID는 영역별 URL 직접 조회`), 목적격 조사는 생략합니다. 쓸 때는 영어 낱말 뒤에도 붙여 씁니다(`MUI가`) |
| 접속 | `그래서`, `때문에`, `위해`, `~라서`, `덕분`을 쓰지 않습니다. 원인과 결과는 `→`로 잇습니다(`같은 쿼리 키 → 요청은 한 번`) |
| 비유 | `몫`, `껍데기`, `무너짐`, `길이 남음`, `갈아 끼움`, `흔들림` 같은 비유와 의인화를 쓰지 않습니다. `담당`, `래퍼`, `실패`, `복귀 경로`, `교체`, `변동`으로 적습니다 |
| 군더더기 | 꾸밈말, 경위를 뺍니다. 예전 동작과 바뀐 과정은 커밋 메시지에 둡니다 |
| 나열 | 쉼표로 잇습니다. 가운뎃점과 대시는 쓰지 않고 화살표는 인과와 예시에만 씁니다 |

### 낱말

| 낱말 | 주석 표기 |
| --- | --- |
| 우리말로 통하는 일반 낱말 | 우리말이나 흔한 음차. request는 요청, product는 상품, back 버튼은 뒤로가기 또는 백 버튼, reset은 리셋 |
| 우리말이 없거나 어색한 기술 용어 | 한글 음차. provider는 프로바이더, wrapper는 래퍼, render는 렌더 |
| 코드 이름, 제품 이름, 약어 | 원문 그대로. `QueryClientProvider`, MUI, API |

아래는 자주 바꿔 쓰는 낱말입니다.

| 용언 명사형, 비유 | 스펙 낱말 |
| --- | --- |
| 읽음, 가져옴 | 조회, 수신 |
| 받음, 넘김, 줌 | 수신, 전달, 반환 |
| 씀, 둠, 놓음 | 사용, 배치, 보관 |
| 그림, 보임, 표시됨 | 렌더, 표시 |
| 붙음, 뺌, 비움, 채움 | 추가, 제외, 초기화, 입력 |
| 나눔, 묶음, 합쳐짐, 맞춤 | 분리, 병합, 일치 |
| 남음, 바뀜, 겹침 | 유지, 변경, 중첩 |
| 정함, 고름, 잡음, 좁힘 | 결정, 선택, 계산, 제한 |
| 몫, 자리 | 담당, 구간 |

### 모양

TypeScript, TSX 주석은 `//` 줄 주석으로만 씁니다.
`/** */`, `/* */`, JSX `{/* */}` 블록 주석은 쓰지 않고 마우스 오버 설명도 기대하지 않습니다.
모양은 상자와 한 줄 `//` 둘이고 상자 위아래 줄의 대시 88개는 Black의 기본 줄 길이에서 가져왔습니다.
상자 안은 커밋 메시지와 같은 차례로 요약 줄부터 씁니다.

| 상자 부분 | 기준 |
| --- | --- |
| 위아래 줄 | `// ` 뒤 대시 88개로 91칸입니다. 함수 본문 안 상자도 대시 개수가 같고 들여쓴 만큼 오른쪽으로 길어집니다 |
| 안쪽 줄 | 모두 `// `로 시작하고 91칸(한글 2칸)을 넘지 않습니다. 빈 줄 자리에는 `//`만 둡니다 |
| 차례 | 요약 줄, 본문, 목록, 예시. 없는 덩어리는 뺍니다 |
| 요약 줄 | 상자의 첫 줄입니다. 덧붙일 사실이 하나뿐이면 요약 줄에 합치고 넘치면 뒷부분을 본문으로 내립니다 |
| 본문 | 이유, 제약, 단위와 형식, 파일 밖과의 관계, 경계값을 한 줄에 하나씩 적습니다. 어려운 내용은 줄이 늘어도 됩니다 |
| 목록 | `이름: 설명` 한 줄. 이름마다 따로 할 말이 있을 때만 씁니다. 요약 줄과 같은 열에서 시작하고 설명 칸을 공백으로 맞추지 않습니다 |
| 예시 | `호출 → 결과` 한 줄씩. 공용 값 함수 상자의 마지막 덩어리입니다 |
| 빈 `//` 줄 | 덩어리 사이에만 둡니다. 상자는 빈 줄로 시작하거나 끝나지 않습니다 |
| 넘치는 줄 | 본문과 목록 줄이 91칸을 넘으면 다음 줄에 두 칸 들여 이어 씁니다 |
| 상자 앞뒤 | 위에 빈 줄 하나를 둡니다. 블록 첫 줄이면 두지 않습니다. 바로 아래는 코드이고 상자 둘을 붙이지 않습니다 |

테스트 사례의 준비, 실행, 검증 구간은 테스트 규칙이 정한 한 줄 구간 주석을 따르고 이 상자 기준을 적용하지 않습니다.
`// biome-ignore`, `/* @vite-ignore */` 같은 도구 지시 주석은 그 도구가 정한 꼴을 따릅니다.

### 목록의 이름

이름 칸에는 설명하는 대상의 이름을 코드 그대로 씁니다.
필드, 상수, 컴포넌트, 클래스 이름이 대상이고 대상이 따로 없는 사실에는 아래 고정 이름을 씁니다.

| 고정 이름 | 뜻 |
| --- | --- |
| `제약` | 바깥(API, 라이브러리, 명세, 기획)이 정해 코드가 따르는 조건 |
| `예외` | 규칙을 비껴간 자리와 확인할 수 있는 근거. `docs-justify-convention-exceptions-with-a-reason-comment`의 자리 |
| `임시` | 없어질 사실과 지울 조건. 예) 서버 작업이 끝나면 삭제 |

괄호 꼬리는 출처 전용입니다.
누가 정했는지와 연도를 포함한 날짜, 또는 티켓 ID를 적습니다(`(백엔드 답변 2026-10-14)`, `(기획 PLAN-123)`).
날짜만 있는 `(2026-10-14)`는 출처가 아닙니다.

### 내용

| 내용 | 판정 |
| --- | --- |
| 이유, 제약, 단위와 형식, 경계값 | 적습니다 |
| 파일 밖과의 관계(같은 쿼리 키를 쓰는 곳, 무효화를 누가 하는지) | 적습니다 |
| 이름과 코드가 이미 말하는 것, 바로 아래 코드를 옮긴 설명 | 쓰지 않습니다 |
| 이름과 타입을 옮겨 적는 목록 줄 | 쓰지 않습니다. 이름과 타입에 없는 정보가 있는 대상만 적습니다 |
| 본문 전체가 영어인 주석 | 쓰지 않습니다. 요약 줄이 영어뿐이면 목록이 한국어여도 요구를 충족하지 못합니다 |
| `@param`, `@returns`, `@deprecated`, `@example`, `{@link}` 같은 TSDoc 태그 | 쓰지 않습니다. 매개변수와 반환값의 정보는 본문이나 목록에, 사용 예는 `호출 → 결과` 줄에, 폐기 예정은 `임시:`에 대체 이름과 함께 적습니다 |
| `@api`, `@helper`, `@field`, `@summary` 같은 역할 태그 | 쓰지 않습니다. 이름과 문법이 드러내는 역할을 태그로 반복하지 않습니다 |
| 부르는 API 경로(`엔드포인트:` 줄) | 쓰지 않습니다. 부르는 함수의 정의로 이동하면 보입니다 |
| AI 도움 표시 | 쓰지 않습니다. 커밋 메시지와 `git blame`이 맡습니다 |
| 코드를 고친 뒤 바로 위 상자 | 문장이 아직 맞는지 함께 확인합니다. 맞지 않는 줄은 고치거나 지웁니다 |

참고: [Google 코드 리뷰 가이드: 주석](https://google.github.io/eng-practices/review/reviewer/looking-for.html#comments),
[Go 문서: 선언 바로 위에 두는 문서 주석](https://go.dev/doc/comment),
[Rust 스타일 가이드: 줄 주석 `//`을 블록 주석보다 선호](https://doc.rust-lang.org/style-guide/#comments),
[ESLint 문서: multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style),
[Black 문서: 기본 줄 길이 88](https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html).

**Incorrect 1 (영문이거나 선언 이름을 옮겨 적기만 합니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/01-incorrect-1.ts

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/01-incorrect-2.ts

**Correct 1 (이름에 없는 정보를 스펙 낱말로 더합니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/02-correct-1.ts

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/02-correct-2.ts

**Incorrect 2 (긴 동사형 문장에 경위, 가운뎃점, 대시, 영어 낱말을 섞습니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/03-incorrect.ts

**Correct 2 (결론과 남은 사실 하나를 요약 줄 하나에 명사형으로 적습니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/04-correct.ts

**Incorrect 3 (제약 셋을 한 문장에 몰아 씁니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/05-incorrect.ts

**Correct 3 (제약을 필드마다 목록 한 줄로 나눕니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/06-correct.ts

**Incorrect 4 (역할 태그로 선언의 성격을 다시 적습니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/07-incorrect.ts

**Correct 4 (태그를 지우고 요약 줄에 선언이 하는 일을 적습니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/08-correct.ts

**Incorrect 5 (바뀐 경위와 날짜만 있는 괄호를 적습니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/09-incorrect.ts

**Correct 5 (지금 참인 사실에 출처를 붙이고 없어질 사실은 `임시:`로 표시합니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/10-correct.ts

**Incorrect 6 (원인과 결과를 `때문에`, `그래서`로 잇습니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/11-incorrect.ts

**Correct 6 (원인과 결과를 `→`로 잇습니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/12-correct.ts

**Incorrect 7 (블록 주석과 `//` 한 줄로 선언을 설명합니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/13-incorrect-1.ts

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/13-incorrect-2.ts

**Correct 7 (같은 내용을 선언 바로 위 상자로 적습니다):**

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/14-correct-1.ts

<<< ../examples/docs-write-korean-comments-about-purpose-and-constraints/14-correct-2.ts
