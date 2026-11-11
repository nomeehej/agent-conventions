---
title: Draw Missing States as Marked Proposals
titleKo: 코드에 없는 상태도 제안으로 표시해 그립니다
impact: HIGH
impactDescription: 디자인 시스템에 필요한 상태가 빠지지 않고 무엇이 코드에 있고 무엇이 제안인지 개발이 바로 압니다
appliesWhen:
  - 코드에서 master를 그리며 코드가 정하지 않은 hover, focus, disabled 모양을 만날 때
  - 지금 화면이 쓰지 않는 크기나 상태를 master에 그릴 때
tags: property, state, proposal
---

## Draw Missing States as Marked Proposals

**Impact: HIGH (디자인 시스템에 필요한 상태가 빠지지 않고 무엇이 코드에 있고 무엇이 제안인지 개발이 바로 압니다)**

코드에 없는 hover, focus, disabled 모양과 지금 화면이 쓰지 않는 크기, 상태도 그립니다.
값은 코드의 비슷한 표현과 기존 변수에서 고르고 새 값을 지어내지 않습니다.
제안한 variant의 설명은 `코드에 없는 제안.`으로 시작하고 근거를 한 줄로 적습니다.

| 상태 | 값을 고르는 곳 |
| --- | --- |
| Hover | 코드에서 비슷한 부품의 `:hover` 표현. 테두리 색, 링 효과 |
| Focus | 코드의 `:focus-visible` 링 |
| Disabled | 기존 disabled 변수 |
| 화면이 쓰지 않는 크기 | 같은 묶음 부품의 같은 `Size` 높이 |

맞는 변수가 없으면 새 변수를 `script-write-one-script-at-a-time-from-one-owner`의 목록에 올립니다.
GUI실 확인이 필요하면 노란 노트로 묻습니다.
제안을 코드에 구현할지는 `transcription-carry-library-properties-into-props-and-stories`가 정합니다.

**Incorrect 1 (제안 표시 없이 코드에 없는 새 색으로 Hover를 그립니다):**

<<< ../examples/property-draw-missing-states-as-marked-proposals/01-incorrect.markdown

**Correct 1 (기존 변수로 그리고 variant 설명에 제안과 근거를 적습니다):**

<<< ../examples/property-draw-missing-states-as-marked-proposals/02-correct.markdown
