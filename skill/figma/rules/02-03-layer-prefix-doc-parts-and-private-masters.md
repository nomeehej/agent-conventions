---
title: Prefix Documentation Parts and Private Masters
titleKo: 문서용 부품은 `_`로, 보조 master는 `.`으로 시작합니다
impact: HIGH
impactDescription: 라이브러리를 받는 쪽에는 쓸 부품만 보이고 문서용 부품과 내부 부품이 publish에서 빠집니다
appliesWhen:
  - 문서용 부품이나 다른 master 안에서만 쓰는 부품을 만들 때
  - master나 레이어 이름 앞의 `_`, `.`을 붙이거나 뗄 때
tags: layer, naming, publish
---

## Prefix Documentation Parts and Private Masters

**Impact: HIGH (라이브러리를 받는 쪽에는 쓸 부품만 보이고 문서용 부품과 내부 부품이 publish에서 빠집니다)**

이름 앞 글자 하나로 publish에 나갈 부품을 가릅니다.
`_`는 문서용 부품과 문서용 레이어, `.`은 다른 master 안에서만 쓰는 보조 master입니다.

| 앞 글자 | 뜻 | 예 |
| --- | --- | --- |
| 없음 | 화면 파일이 쓰는 master | `select`, `date-picker` |
| `.` | 다른 master 안에서만 쓰는 보조 master | `.select/option`, `.date-picker/calendar` |
| `_` | 문서용 부품, 문서용 레이어 | `_Matrix/Label`, `_note / dated`, `_labels / select` |

publish 전에 publish 창의 Hidden 목록에 두 접두사의 부품이 모두 들었는지 확인합니다.
Figma 도움말은 `.` 접두사를 publish에서 빼는 방법으로 안내합니다.
공식 `figma-generate-library`는 내부 부품에 `_`를 권하지만 이 skill은 `_`를 문서용에만 씁니다.

참고: [Figma 도움말: publish에서 숨기기](https://help.figma.com/hc/en-us/articles/360039238193).

**Incorrect 1 (보조 부품과 문서용 이름표 부품이 이름 그대로 publish에 나갑니다):**

<<< ../examples/layer-prefix-doc-parts-and-private-masters/01-incorrect.markdown

**Correct 1 (보조 master는 `.`, 문서용 부품과 레이어는 `_`로 시작합니다):**

<<< ../examples/layer-prefix-doc-parts-and-private-masters/02-correct.markdown
