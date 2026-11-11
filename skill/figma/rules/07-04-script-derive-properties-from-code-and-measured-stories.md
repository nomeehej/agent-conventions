---
title: Derive Properties from Code and Measured Stories
titleKo: 코드 부품을 master로 그릴 때는 코드와 story 측정에서 속성을 끌어냅니다
impact: HIGH
impactDescription: 코드가 정한 모양과 상태가 빠짐없이 옮겨지고 제안 상태와 새 토큰이 근거와 함께 남습니다
appliesWhen:
  - 코드 부품을 Figma master로 그릴 때
  - 코드와 master의 차이를 맞추려고 코드를 다시 읽을 때
tags: script, reverse-engineering, measurement, storybook
---

## Derive Properties from Code and Measured Stories

**Impact: HIGH (코드가 정한 모양과 상태가 빠짐없이 옮겨지고 제안 상태와 새 토큰이 근거와 함께 남습니다)**

코드 부품을 master로 그릴 때는 아래 차례로 근거를 모은 뒤 그립니다.
화면을 보고 짐작해 그리지 않고 Storybook에서 story마다 계산 스타일을 잽니다.
부품마다 spec 문서 하나에 근거를 남기고 그 문서대로 스크립트를 짭니다.

| 차례 | 할 일 | spec에 남기는 것 |
| --- | --- | --- |
| 1 | 코드를 읽습니다. 프롭스 타입과 기본값, CSS, story, 사용처 | 코드 |
| 2 | story마다 상태별 계산 스타일과 크기를 잽니다. hover는 마우스를 올리고 focus는 포커스를 줍니다 | 측정 |
| 3 | 프롭은 속성으로, 빠진 상태는 제안으로 설계합니다 | 속성 설계. 코드에 있는 것과 제안, variant 수 |
| 4 | 잰 값을 기존 변수 이름에 대응시키고 없으면 새 토큰 목록에 올립니다 | 토큰 대응 |
| 5 | 레이어 구조, 조립할 master, 예시, story와 Figma 대응을 정합니다 | 레이어 구조, 조립, 예시, story → Figma |
| 6 | `use_figma` 스크립트로 그립니다 | 노트, 위험과 확인할 것 |

제안 상태의 표시는 `property-draw-missing-states-as-marked-proposals`가 정합니다.
새 토큰 목록은 `script-write-one-script-at-a-time-from-one-owner`가 정합니다.
Figma가 먼저인 부품은 이 차례를 거꾸로 밟지 않습니다.
master에서 코드로 가는 길은 `transcription-carry-library-properties-into-props-and-stories`가 정합니다.

**Incorrect 1 (스크린샷 하나로 짐작해 기본 상태만 그립니다):**

<<< ../examples/script-derive-properties-from-code-and-measured-stories/01-incorrect.markdown

**Correct 1 (코드와 측정에서 축과 값을 끌어내 spec에 근거를 남깁니다):**

<<< ../examples/script-derive-properties-from-code-and-measured-stories/02-correct.markdown
