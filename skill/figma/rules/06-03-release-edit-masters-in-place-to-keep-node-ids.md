---
title: Edit Masters in Place to Keep Node IDs
titleKo: master는 지우고 다시 만들지 않고 제자리에서 고칩니다
impact: CRITICAL
impactDescription: 인스턴스와 Storybook design 링크가 가리키는 node id가 살아 있어 고친 뒤에도 연결이 끊기지 않습니다
appliesWhen:
  - 기존 master나 variant를 고치거나 상태, 값을 더할 때
  - master를 지우거나 합치거나 이름을 바꿀 때
  - 릴리스 전에 바뀐 master의 node id가 그대로인지 확인할 때
tags: release, node-id, link
---

## Edit Masters in Place to Keep Node IDs

**Impact: CRITICAL (인스턴스와 Storybook design 링크가 가리키는 node id가 살아 있어 고친 뒤에도 연결이 끊기지 않습니다)**

master와 variant는 지우고 다시 만들지 않고 제자리에서 고칩니다.
화면 파일의 인스턴스와 Storybook design 링크가 node id를 가리킵니다.
다시 만들면 id가 바뀌어 인스턴스가 끊기고 링크가 없는 노드를 엽니다.

| 변경 | 처리 |
| --- | --- |
| 값, 모양, 레이어 | 같은 노드를 고칩니다 |
| 상태나 값 더하기 | 기존 variant를 복제해 같은 set에 넣고 이름을 바꿉니다 |
| master 합치기, 지우기, 이름 바꾸기 | `Breaking` 줄을 남기고 Storybook design 링크를 다시 만듭니다 |

복제한 variant의 속성 연결은 `script-check-plugin-api-pitfalls-before-writing`의 함정 표대로 다시 겁니다.
스크립트가 실패해 다시 돌릴 때도 지우고 만드는 길로 우회하지 않습니다.

참고: [addon-designs](https://github.com/storybookjs/addon-designs).

**Incorrect 1 (set을 지우고 다시 만들어 node id가 모두 바뀝니다):**

<<< ../examples/release-edit-masters-in-place-to-keep-node-ids/01-incorrect.js

**Correct 1 (기존 variant를 복제해 같은 set에 상태를 더합니다):**

<<< ../examples/release-edit-masters-in-place-to-keep-node-ids/02-correct.js
