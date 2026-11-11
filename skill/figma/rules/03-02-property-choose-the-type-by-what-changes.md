---
title: Choose the Property Type by What Changes
titleKo: 속성 종류는 인스턴스에서 바뀌는 것에 맞춰 고릅니다
impact: HIGH
impactDescription: 글자, 켜기, 아이콘, 끼우는 자리가 알맞은 속성으로 나와 variant가 조합마다 불어나지 않습니다
appliesWhen:
  - master에 속성을 더하거나 속성 종류를 바꿀 때
  - 아이콘이나 다른 부품이 들어갈 자리를 master에 만들 때
tags: property, component-property, slot
---

## Choose the Property Type by What Changes

**Impact: HIGH (글자, 켜기, 아이콘, 끼우는 자리가 알맞은 속성으로 나와 variant가 조합마다 불어나지 않습니다)**

속성 종류는 인스턴스에서 바뀌는 것에 맞춰 고릅니다.
모양이 바뀌는 축만 `VARIANT`로 두고 나머지는 다른 속성으로 내놓습니다.
아이콘마다 variant를 만들지 않습니다.

| 바뀌는 것 | 속성 | 이름 |
| --- | --- | --- |
| 글자 | `TEXT` | `Label`, `Value text`, `Placeholder text` |
| 켜고 끄는 부분 | `BOOLEAN` | 부분 이름. `Suffix`, `Helper` |
| 같은 부분의 켜기와 글자 | `BOOLEAN`과 `TEXT` 한 짝 | `Suffix`와 `Suffix text` |
| 아이콘 | `INSTANCE_SWAP` | `Icon` |
| 다른 부품을 끼우는 자리 | `SLOT` | `Body`, `Actions` |
| 크기, 색, 상태처럼 모양이 바뀌는 축 | `VARIANT` | `property-share-axis-names-values-and-order`의 이름 |

켜고 끌 레이어는 인스턴스에서 숨기지 않고 `BOOLEAN`에 묶습니다.
숨긴 레이어와 슬롯 안 인스턴스를 스크립트로 읽는 방법은 `script-check-plugin-api-pitfalls-before-writing`이 정합니다.

참고: [Figma 도움말: 컴포넌트 속성](https://help.figma.com/hc/en-us/articles/5579474826519),
[Figma 도움말: 슬롯](https://help.figma.com/hc/en-us/articles/38231200344599),
[Figma 문서: SLOT 속성 추가](https://developers.figma.com/docs/plugins/updates/2026/06/10/update/).

**Incorrect 1 (아이콘과 단위 글자를 variant 축으로 만들어 조합마다 variant가 늘어납니다):**

<<< ../examples/property-choose-the-type-by-what-changes/01-incorrect.js

**Correct 1 (아이콘은 `INSTANCE_SWAP`, 단위는 `BOOLEAN`과 `TEXT` 한 짝으로 내놓습니다):**

<<< ../examples/property-choose-the-type-by-what-changes/02-correct.js
