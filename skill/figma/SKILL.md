---
name: convention-figma
description: Use when a request includes a figma.com URL, Figma node, or design screenshot and asks to implement, update, or match UI against it, or asks to build or change components, properties, variables, notes, or releases in a Figma library file. Governs library file structure and naming, Figma MCP call order and token budget, reading messy or annotated design files, and verifying parity.
metadata:
  author: agent-conventions
  version: "1.0.0"
---

# Figma Convention Router

## 1. 변경 범위 판정

요청, 계획, diff에서 아래를 가른다.

**범위에 드는 것**

- 요청에 `figma.com` URL, Figma 노드 id, 디자인 스크린샷이 있고 화면을 구현, 수정, 대조하라는 실제 변경
- Figma에서 읽은 값, 문구, 아이콘, 구조를 코드에 추가, 삭제, 이동, 이름 변경하는 것
- Figma 라이브러리 파일의 페이지, master, 속성, 변수, 노트, 릴리스를 만들거나 고치는 것.
  코드 부품을 master로 그리는 것도 들고, 읽기 전용 스크립트로 라이브러리 검사만 돌리는 것도 든다
- `convention-blueprint`가 설계 문서의 재료로 Figma를 읽는 경우.
  `read` 규칙대로 읽고 코드를 바꾸지 않았으면 `verify` 규칙은 측정 대상 없음과 읽은 노드, `get_design_context`, 질문 항목만 보고한다

**범위에 들지 않는 것**

- Figma가 참고 자료일 뿐인 경우.
  Figma 링크가 있어도 API, 데이터 매핑, 권한 로직만 바꾸는 경우
- "동작만" 고치라고 명시한 경우
- `/make/`, `/board/`, `/slides/` URL. 이 skill의 호출 순서는 `/design/` 파일 기준이다.
  `/file/` URL은 `/design/`과 같게 본다.
- 이동에 그대로 딸려 온 마크업과 스타일.
  diff에 삭제+추가로 보여도 변경으로 다시 세지 않는다.
- 화면 파일 안의 구성. 화면 파일에 화면을 그리는 일은 이 skill이 정하지 않는다

적용되지 않는 규칙의 선택 사항을 새로 들여와 스스로 범위를 넓히지 않는다.

작업 종류를 먼저 가른다.

| 작업 | 신호 | 먼저 읽을 절 |
| --- | --- | --- |
| 라이브러리 구성 | Figma 라이브러리 파일에 쓴다. master, 속성, 변수, 노트, 릴리스를 만들거나 고친다. 코드 부품을 master로 그린다. 검사만 돌린다 | 1~7절 `file`, `layer`, `property`, `variable`, `note`, `release`, `script`. 검사만이면 12절 라이브러리 검사 |
| 구현 | Figma URL, 노드, 스크린샷을 읽고 코드를 바꾼다. 라이브러리 master가 기준이면 master를 읽고 부품 코드를 바꾼다 | 8절 `read`. master가 기준이면 11절 `transcription-carry-library-properties-into-props-and-stories`도 |
| 둘 다 | master를 고치고 코드도 맞춘다 | 1~7절 다음 11절 `transcription-carry-library-properties-into-props-and-stories`와 12절. 8절은 방금 고친 노드가 아닌 노드를 읽을 때만 |

Figma 파일이 라이브러리 파일인지는 사용자가 말하거나 페이지 목록의 기호(`★`, `¶`, `❖`)로 가른다.
모르면 묻는다.

TSX 화면이나 컴포넌트가 바뀌면 `convention-react`를 함께 활성화한다.
`convention-react`가 `convention-typescript`를 켠다.
stylesheet, `className`, 토큰 값이 바뀌면 `convention-css`를 함께 활성화한다.
story 파일이나 story의 design 링크가 바뀌면 `convention-storybook`을 함께 활성화한다.
Figma를 읽기만 하거나 Figma에만 쓰고 코드를 바꾸지 않으면 어느 companion도 켜지 않는다.

`use_figma`를 부르기 전에 Figma 공식 `figma-use`, `figma-generate-library` 스킬을 도구 설명대로 먼저 읽는다.
그 공식 스킬과 이 skill이 부딪히면 이 skill이 우선한다.
특히 PascalCase 부품 이름, `_` 내부 부품, variant 30개 상한, 여러 페이지 동시 쓰기는 따르지 않는다.
근거와 대신 할 일은 `script-read-the-official-skills-and-keep-these-names` contract가 말한다.

`get_design_context`를 부를 때 Figma 공식 `figma-design-to-code` 스킬을 도구 설명대로 먼저 읽는다.
그 공식 스킬과 이 skill이 부딪히면 이 skill이 우선한다.
특히 "`get_design_context` 응답으로만 구현", "성긴 응답이면 자식을 병렬로 모두 호출"은 따르지 않는다.
"첫 호출에 스크린샷 포함", "에셋은 다른 도구로 받지 않음"도 따르지 않는다.
`get_metadata` 도구 설명의 "`get_design_context`를 먼저"도 따르지 않는다.
근거와 대신 할 일은 `read-call-design-context-only-on-small-unmatched-nodes` contract가 말한다.

## 2. 인덱스 훑기

활성화한 skill마다 그 `SKILL.md`의 로드 계약을 따른다.
이 skill과 companion 각각의 `RULES_INDEX.md`를 끝까지 훑는다.
이 skill의 인덱스는 [RULES_INDEX.md](./RULES_INDEX.md)이다.
각 규칙의 `appliesWhen`을 변경 범위와 대조하고 첫 match에서 멈추지 않는다.
애매하면 적용되는 쪽으로 본다.

MCP를 부르기 전에 `read` 섹션 규칙부터 읽는다.
호출 순서와 대상 노드가 거기서 정해진다.
`use_figma`로 쓰기 전에 `script` 섹션 규칙부터 읽는다.
쓰는 차례와 Plugin API 함정이 거기서 정해진다.

## 3. 규칙 읽고 구현

걸리는 규칙의 `contracts/<id>.md`를 읽는다.
등급이 읽는 범위를 정한다.
contract 첫머리가 그 범위를 말한다.

| 등급 | 읽는 범위 |
| --- | --- |
| `CRITICAL` | `rules/NN-MM-<id>.md` 원문을 설명과 예제까지 전부 읽는다. 마무리 전에 결과 코드를 원문의 `Correct` 예제와 다시 대조한다 |
| `HIGH` | 원문을 설명과 예제까지 전부 읽는다 |
| `MEDIUM` | contract에 실린 규범과 첫 `Incorrect`, `Correct` 짝을 읽는다. 판단이 모호하면 원문을 읽는다 |

정확한 원문 경로는 contract의 full rule 링크가 가리킨다.

- `requiresSelected` 대상은 함께 적용한다.
  다른 skill의 규칙이면 그 companion도 활성화한다.
- `reviewWith` 대상은 변경 범위에 비춰 다시 판단한다.
  자동으로 적용하지는 않는다.
- `completionGate` 규칙은 마무리 시 항상 적용한다.
  인덱스가 그 표시를 달아 준다.

규칙이 질문을 요구하면 그 질문이 구현을 막는지 먼저 가른다.
답이 없으면 어떤 모양을 만들지 못 정하는 것(조건을 모르는 숨긴 요소, 위계와 순서의 불일치)만 구현 전에 묻는다.
문구, 목적지, 긴 값 처리처럼 기본값을 둘 수 있는 것은 가정을 적고 구현한 뒤 질문 목록에 올린다.

걸린 규칙은 등급과 무관하게 전부 지킨다.
등급은 지킬지 말지가 아니라 얼마나 깊이 읽는지를 정한다.

규칙이나 companion이 새로 걸리면 인덱스를 다시 훑는다.
더 걸리는 게 없으면 멈춘다.

## 4. 범위 변경

작업 중 범위가 늘거나 바뀌면 1번부터 다시 판정하고 활성 인덱스를 다시 훑는다.
conditional companion도 다시 판정한다.
질문에 답이 와서 구현 대상이 바뀌어도 다시 판정한다.

## 5. 마무리

변경 diff를 적용한 규칙에 비춰 다시 훑는다.
위반이 있으면 file/line과 수정안으로 보고한다.
Figma 라이브러리 변경은 file/line 대신 페이지와 node id로 보고한다.
`completionGate` 규칙의 실측 판정과 보고 항목을 마무리 보고에 싣는다.
라이브러리 구성만 한 작업은 렌더 실측 대신 그 규칙의 라이브러리 검사와 보고 항목을 싣는다.
lint, typecheck, build, 스크린샷을 눈으로 대조한 결과는 컨벤션을 지켰다는 근거가 아니다.

전체 검토를 명시적으로 요청받거나 index, contract가 손상됐을 때만 `rules/*.md`를 번호 순서로 읽는다.
