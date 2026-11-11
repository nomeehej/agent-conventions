---
title: Check Plugin API Pitfalls Before Writing
titleKo: Plugin API 스크립트는 알려진 함정을 먼저 확인하고 씁니다
impact: HIGH
impactDescription: 오류 없이 돌았지만 속성 연결이 빠지거나 색, 순서, 크기가 틀어진 결과를 publish 전에 막습니다
appliesWhen:
  - variant를 복제하거나 속성 값, 속성 순서를 바꿀 때
  - 변수를 칠하기에 묶거나 인스턴스, 슬롯 안 노드를 읽을 때
  - 같은 호출에서 만든 노드의 크기를 읽거나 글자 레이어 이름을 붙일 때
  - auto layout 크기 축, master 크기, 링 효과를 정할 때
tags: script, plugin-api, pitfall
---

## Check Plugin API Pitfalls Before Writing

**Impact: HIGH (오류 없이 돌았지만 속성 연결이 빠지거나 색, 순서, 크기가 틀어진 결과를 publish 전에 막습니다)**

아래 함정은 스크립트가 오류 없이 끝나도 결과가 틀어집니다.
해당하는 작업이면 스크립트를 쓰기 전에 처리 칸대로 짭니다.
공식 `figma-use`의 gotchas에 있는 함정은 그 문서를 따릅니다.

| 작업 | 함정 | 처리 |
| --- | --- | --- |
| variant 복제 | `clone()` 복제본에서 글자, 켜기 속성 연결이 빠질 수 있습니다 | 복제 뒤 `componentPropertyReferences`를 다시 걸고 인스턴스에서 글자가 바뀌는지 봅니다 |
| 속성 값 순서 바꾸기 | 속성 패널 순서는 값이 생긴 순서이고 이름만 바꾸면 자리가 그대로입니다 | 한 호출에서 그 값의 variant마다 다른 임시 이름을 주고 같은 호출에서 `componentPropertyDefinitions`를 읽은 뒤 다음 호출에서 원래 이름으로 모읍니다. 한 번에 한 값씩 옮깁니다 |
| 새 속성 넣기 | 속성 순서는 variant 이름 안의 순서를 따릅니다 | variant 이름의 알맞은 자리에 새 속성을 적습니다 |
| 인스턴스 안 숨긴 레이어, 슬롯 안 인스턴스 읽기 | `children`, `findAll`에 나오지 않을 수 있습니다. 기본값이 환경마다 달라 Dev Mode는 `true`이고 Figma와 FigJam은 `false`입니다 | 스크립트 맨 앞에서 `figma.skipInvisibleInstanceChildren = false`로 둡니다 |
| 같은 변수를 칠하기에 다시 묶기 | 색을 다시 계산하지 않아 칠하기에 넣은 기준 색이 보일 수 있습니다 | 변수의 실제 값을 담은 칠하기에 묶습니다 |
| 반투명 칠 | 변수에 묶인 칠하기는 칠하기 투명도가 그려지지 않고 변수 값의 알파만 씁니다 | 그때그때의 반투명은 레이어 투명도로, 토큰이 되는 반투명은 알파가 든 변수로 둡니다 |
| 방금 만든 auto layout 크기 읽기 | 같은 호출에서 읽으면 이전 값일 수 있습니다 | 맞춤은 auto layout 정렬에 맡기고 크기에 맞춰 그릴 때는 호출을 나눕니다 |
| 글자 레이어 이름 | `autoRename`이 켜져 있으면 이름이 글 내용으로 바뀝니다 | `autoRename`을 끈 뒤 역할 이름을 붙입니다 |
| `removeOverrides()` | 레이어 이름 덮어쓰기도 지웁니다. 옛 이름 `resetOverrides()`는 deprecated입니다 | 이름과 `layoutSizing*`를 다시 겁니다 |
| `createAutoLayout()` 뒤 `resize()` | 두 축이 `FIXED`가 됩니다 | 내용에 맞출 축은 `primaryAxisSizingMode`, `counterAxisSizingMode`를 다시 `AUTO`로 둡니다 |
| 이미 있는 frame에 `layoutMode` 켜기 | 두 축이 내용 크기(hug)로 바뀝니다 | 고정 크기가 필요하면 두 축 모드를 `FIXED`로 둔 뒤 `resize()`합니다 |
| master 상자 크기 바꾸기 | 이미 놓인 인스턴스가 예전 크기를 덮어쓴 값으로 남습니다 | 예시 인스턴스 크기를 다시 맞추고 그 페이지의 배치를 다시 깝니다 |
| 링 효과를 단 레이어 | 내용 자르기가 꺼져 있거나 채움이 없으면 링이 그려지지 않습니다 | 내용 자르기를 켜고 채움을 둡니다 |
| 좁은 칸의 한글 문서 글 | 글자 단위로 줄이 바뀌어 단어가 중간에서 끊깁니다 | 의미 단위로 `\n`을 넣거나 짧게 씁니다 |
| 이름으로 페이지 찾기 | 구분선도 페이지입니다 | `isPageDivider`인 페이지를 건너뜁니다 |

참고: [Figma 문서: InstanceNode](https://developers.figma.com/docs/plugins/api/InstanceNode/),
[Figma 문서: 숨긴 노드](https://developers.figma.com/docs/plugins/api/properties/figma-skipinvisibleinstancechildren/).

**Incorrect 1 (variant를 복제하고 이름만 바꿔 글자 속성 연결이 빠진 채 남습니다):**

<<< ../examples/script-check-plugin-api-pitfalls-before-writing/01-incorrect.js

**Correct 1 (복제한 variant의 글자 레이어에 속성 연결을 다시 겁니다):**

<<< ../examples/script-check-plugin-api-pitfalls-before-writing/02-correct.js
