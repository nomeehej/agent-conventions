---
title: Do Not Copy Layer Structure into the DOM
titleKo: 레이어 구조를 DOM으로 복제하지 않습니다
impact: HIGH
impactDescription: 디자이너가 도형을 쌓은 방식이 래퍼, 절대 좌표, 임의 값 클래스로 코드에 남지 않습니다
appliesWhen:
  - `get_design_context` 출력의 JSX, `className`, 인라인 SVG를 파일에 옮길 때
  - `get_design_context` 출력의 절대 좌표, `rotate`를 옮길 때
reviewWith: css/composition-do-not-add-wrapper-elements-for-styling, css/composition-do-not-style-through-the-style-attribute
tags: transcription, layers, markup
---

## Do Not Copy Layer Structure into the DOM

**Impact: HIGH (디자이너가 도형을 쌓은 방식이 래퍼, 절대 좌표, 임의 값 클래스로 코드에 남지 않습니다)**

`get_design_context` 코드는 레이어 트리를 그대로 펼친 결과라 디자이너가 도형을 쌓은 방식이 DOM에 남습니다.
옮기기 전에 그 묶음이 화면에서 무엇을 하는지 한 문장으로 말합니다.
그 뜻을 CSS 선언이나 컴포넌트로 다시 씁니다.
출력의 클래스는 한 개도 옮기지 않습니다.

| 출력에 보이는 것 | 뜻 | 옮기는 법 |
| --- | --- | --- |
| 회전한 선을 감싼 `div` 여러 겹과 `img` | 구분선 | `border`, `gap` |
| `absolute`, `inset-[…]`, 좌표 | 쌓은 배치 | `flex`, `grid` 흐름 배치 |
| `w-[270px]` 같은 임의 값 Tailwind 클래스 | 샘플 크기 | 프로젝트 CSS 클래스로 바꿉니다. 크기는 `intent-treat-frame-sizes-and-sample-text-as-samples`를 따릅니다 |
| 인라인 `svg`의 선, 사각형 | 장식 도형 | `border`, `background` |
| 자식 하나만 감싼 래퍼 | 레이어 묶음 | 없앱니다 |
| `data-node-id`, `data-name` | Figma 추적용 속성 | 지웁니다 |

참고: [Figma 문서: 사용자 지정 규칙](https://developers.figma.com/docs/figma-mcp-server/add-custom-rules/#output-rules),
[Figma 문서: 코드를 위한 파일 구조](https://developers.figma.com/docs/figma-mcp-server/structure-figma-file/).

**Incorrect 1 (회전한 선과 래퍼, 추적 속성을 그대로 옮깁니다):**

<<< ../examples/transcription-do-not-copy-layer-structure/01-incorrect.tsx

**Correct 1 (구분선은 `border-left` 한 줄로 쓰고 래퍼를 걷습니다):**

<<< ../examples/transcription-do-not-copy-layer-structure/02-correct-1.tsx

<<< ../examples/transcription-do-not-copy-layer-structure/02-correct-2.css
