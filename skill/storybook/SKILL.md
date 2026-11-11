---
name: convention-storybook
description: Use when writing, renaming, or reviewing Storybook stories (`*.stories.tsx`), editing `.storybook/` configuration or story context CSS, linking stories to Figma nodes, or building Storybook and running story tests.
metadata:
  author: agent-conventions
  version: "1.0.0"
---

# Storybook Convention Router

## 1. 변경 범위 판정

요청, 계획, diff에서 아래를 가른다.

**범위에 드는 것**

- `src/component/**/*.stories.tsx`의 meta, story, `args`, `beforeEach`, `play`, 데코레이터
- `.storybook/`의 `main.ts`, `preview.tsx`, `manager.ts`, Storybook 전용 vite 설정, story 문맥 CSS
- `parameters.design` 링크와 그 링크를 만드는 story id, 노드 id 표
- `storybook build`, story 테스트 실행, 결과 보고

**범위에 들지 않는 것**

- gallery story(`test/**/*.story.tsx`)와 그것을 mount하는 spec. `convention-testing`이 맡는다
- 화면 전체 story. 화면은 integration과 앱 mock 모드가 맡는다
- story를 고치지 않는 부품 코드 변경(프롭, 속성 값을 더하면 제외)

적용되지 않는 규칙의 선택 사항을 새로 들여와 스스로 범위를 넓히지 않는다.

`convention-typescript`는 항상 함께 활성화한다.
데코레이터, `render`, preview처럼 story가 렌더하는 JSX를 바꿀 때만 `convention-react`를 켠다.
story 문맥 CSS나 클래스 계약을 바꿀 때만 `convention-css`를 켠다.
`play` 단언, 접근성 검사 설정, `tags`의 `!test`, Vitest의 `storybook` project를 바꿀 때만 `convention-testing`을 켠다.

## 2. 인덱스 훑기

활성화한 skill마다 그 `SKILL.md`의 로드 계약을 따른다.
이 skill과 companion 각각의 `RULES_INDEX.md`를 끝까지 훑는다.
이 skill의 인덱스는 [RULES_INDEX.md](./RULES_INDEX.md)이다.
각 규칙의 `appliesWhen`을 변경 범위와 대조하고 첫 match에서 멈추지 않는다.
애매하면 적용되는 쪽으로 본다.

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

걸린 규칙은 등급과 무관하게 전부 지킨다.
등급은 지킬지 말지가 아니라 얼마나 깊이 읽는지를 정한다.

규칙이나 companion이 새로 걸리면 인덱스를 다시 훑는다.
더 걸리는 게 없으면 멈춘다.

## 4. 범위 변경

작업 중 범위가 늘거나 바뀌면 1번부터 다시 판정하고 활성 인덱스를 다시 훑는다.
conditional companion도 다시 판정한다.
Figma 라이브러리 publish로 노드나 속성 이름이 바뀌어도 다시 판정한다.

## 5. 마무리

변경 diff를 적용한 규칙에 비춰 다시 훑는다.
위반이 있으면 file/line과 수정안으로 보고한다.
`completionGate` 규칙의 빌드 결과, 테스트 실행 수, 빠진 design 링크 수를 마무리 보고에 싣는다.
개발 서버에서 story가 보이는 것과 lint, typecheck 통과는 컨벤션을 지켰다는 근거가 아니다.

전체 검토를 명시적으로 요청받거나 index, contract가 손상됐을 때만 `rules/*.md`를 번호 순서로 읽는다.
