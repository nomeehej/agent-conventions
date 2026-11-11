---
title: Share Axis Names, Values, and Order
titleKo: variant 속성 이름, 값, 순서는 모든 master가 같게 씁니다
impact: CRITICAL
impactDescription: 부품을 바꿔 끼워도 값이 풀리지 않고 Figma 값이 코드 프롭 값과 story 이름으로 같은 말로 이어집니다
appliesWhen:
  - master에 variant 속성을 만들거나 속성 이름, 값, 순서를 바꿀 때
  - variant 이름을 짓거나 바꿀 때
tags: property, variant, naming
---

## Share Axis Names, Values, and Order

**Impact: CRITICAL (부품을 바꿔 끼워도 값이 풀리지 않고 Figma 값이 코드 프롭 값과 story 이름으로 같은 말로 이어집니다)**

variant 속성은 종류 → `Size` → 내용 → `State` 순서로 둡니다.
이름과 값은 모든 master가 같은 말을 Title Case로 씁니다.
variant 이름도 이 순서로 적습니다. `Color=Primary, Variant=Fill, Size=Medium, State=Default`.

| 속성 | 값과 순서 |
| --- | --- |
| `Color` | `Primary`, `Neutral`, `Danger` |
| `Severity` | `Success`, `Info`, `Warning`, `Error`. 상태를 알리는 부품만 씁니다 |
| `Variant` | `Fill`, `Outline`, `Text`. 연한 바탕은 `Soft` |
| `Size` | `Small`, `Medium`, `Large`. 작은 것부터 둡니다 |
| 내용 | 부품마다 정합니다. 입력 부품은 `Value`(`Placeholder`, `Filled`) |
| `State` | `Default`, `Hover`, `Focus`, `Pressed`, `Open`, `Error`, `Loading`, `Disabled` 가운데 해당하는 것을 이 순서로 |

종류 자리에는 `Color`, `Severity`, `Variant`, `Type` 가운데 그 부품이 쓰는 것만 둡니다.
입력 부품(`text-field`, `select`, `date-picker`)은 같은 축 `Size` × `Value` × `State`를 씁니다.
값 순서를 바로잡는 방법은 `script-check-plugin-api-pitfalls-before-writing`이 정합니다.
값이 코드로 가는 길은 `transcription-carry-library-properties-into-props-and-stories`가 정합니다.

참고: [Figma 도움말: 컴포넌트 속성](https://help.figma.com/hc/en-us/articles/5579474826519).

**Incorrect 1 (부품마다 속성 이름, 값 표기, 순서가 다릅니다):**

<<< ../examples/property-share-axis-names-values-and-order/01-incorrect.markdown

**Correct 1 (모든 master가 같은 이름과 값을 종류 → `Size` → 내용 → `State` 순서로 씁니다):**

<<< ../examples/property-share-axis-names-values-and-order/02-correct.markdown
