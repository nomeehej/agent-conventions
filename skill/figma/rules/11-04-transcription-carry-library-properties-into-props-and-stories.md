---
title: Carry Library Properties into Props and Stories
titleKo: master로 부품을 구현하면 속성 축은 프롭으로, 값은 story로 옮깁니다
impact: HIGH
impactDescription: Figma 값, 프롭 값, story 이름이 한 말로 이어져 빠진 상태가 드러나고 design 링크가 그 variant를 바로 엽니다
appliesWhen:
  - 라이브러리 master를 기준으로 `ui`, `widget` 부품을 구현하거나 고칠 때
  - 부품의 프롭이나 story 이름을 Figma 속성에 맞출 때
tags: transcription, props, story, library
---

## Carry Library Properties into Props and Stories

**Impact: HIGH (Figma 값, 프롭 값, story 이름이 한 말로 이어져 빠진 상태가 드러나고 design 링크가 그 variant를 바로 엽니다)**

라이브러리 master로 부품을 구현할 때는 master가 모양과 속성 축의 기준입니다.
`VARIANT` 축은 프롭으로, 축의 값은 story로, variant 노드는 그 story의 design 링크로 옮깁니다.
동작과 데이터의 스펙은 여전히 코드입니다. 값 형식, 이벤트, 서버 데이터는 기존 계약을 따릅니다.

| Figma | 코드 |
| --- | --- |
| master 이름 `select` | 부품 폴더 `src/component/ui/select/`, story title `component/ui/select` |
| `VARIANT` 축 `Size`의 `Small`, `Medium`, `Large` | 프롭 `size`의 `"small"`, `"medium"`, `"large"` |
| `State=Disabled`, `State=Error` | boolean 프롭 `disabled`, `error` |
| `State=Hover`, `State=Focus`, `State=Pressed` | 프롭이 아니라 CSS 의사 클래스 |
| `TEXT`, `BOOLEAN`, `INSTANCE_SWAP`, `SLOT` 속성 | 글자, 켜기, 아이콘, `children` 같은 프롭 |
| 프롭이 되는 속성 값 하나 | story 하나. export 이름은 그 값의 PascalCase이고 첫 story는 기본 variant |
| variant 노드, 예시 칸 노드 | 그 story의 `parameters.design` |
| `코드에 없는 제안.` variant | 구현할지 정해 story 파일 위 상자와 보고에 남깁니다 |

프롭 값이 Figma 값과 다르면(`Variant=Fill`과 `variant="contained"`) story 파일 위 상자에 대응을 적습니다.
master의 `Size`별 높이와 안쪽 여백은 표본이 아니라 그 크기 값의 기준입니다.
`intent-treat-frame-sizes-and-sample-text-as-samples`는 화면 프레임의 치수에만 겁니다.
master를 읽는 MCP 호출 순서는 `read-start-with-screenshot-and-metadata`가 정합니다.

참고: [Storybook 문서: 이름과 계층](https://storybook.js.org/docs/writing-stories/naming-components-and-hierarchy),
[addon-designs](https://github.com/storybookjs/addon-designs).

**Incorrect 1 (story 이름이 Figma 값과 다르고 design 링크가 없습니다):**

<<< ../examples/transcription-carry-library-properties-into-props-and-stories/01-incorrect.stories.tsx

**Correct 1 (값마다 story를 두고 variant 노드를 잇고 제안 상태의 결정을 상자에 남깁니다):**

<<< ../examples/transcription-carry-library-properties-into-props-and-stories/02-correct.stories.tsx
