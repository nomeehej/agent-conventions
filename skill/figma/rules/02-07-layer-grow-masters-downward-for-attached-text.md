---
title: Grow Masters Downward for Attached Text
titleKo: 오류나 도움말 글이 붙는 master는 아래로 늘어나게 둡니다
impact: MEDIUM
impactDescription: 오류 글이 붙어도 입력칸 자리가 그대로라 화면 파일의 줄 맞춤이 깨지지 않습니다
appliesWhen:
  - 오류, 도움말 글이 붙는 입력 master를 만들거나 고칠 때
  - 입력칸 옆에 이름, 단위 글자를 둘 때
tags: layer, auto-layout, input
---

## Grow Masters Downward for Attached Text

**Impact: MEDIUM (오류 글이 붙어도 입력칸 자리가 그대로라 화면 파일의 줄 맞춤이 깨지지 않습니다)**

상태에 따라 글이 붙는 master는 루트를 위 정렬로 두고 높이를 내용에 맞춥니다.
높이를 고정하고 가운데 정렬하면 오류 글이 붙을 때 입력칸이 위로 밀립니다.
입력칸 옆의 이름, 단위 글자는 입력칸 높이의 줄 안에서 세로 가운데에 둡니다.

| 레이어 | auto layout |
| --- | --- |
| 루트 | 세로, 위 정렬, 높이 Hug |
| 입력칸 줄 | 가로, 높이는 `Size` 값의 입력칸 높이, 세로 가운데 |
| 이름, 단위 글자 | 입력칸 줄 안 |
| 오류, 도움말 글 | 입력칸 줄 아래 |

**Incorrect 1 (높이를 고정하고 가운데 정렬해 오류 글이 붙으면 입력칸이 밀립니다):**

<<< ../examples/layer-grow-masters-downward-for-attached-text/01-incorrect.markdown

**Correct 1 (루트는 위 정렬과 Hug, 입력칸 줄만 높이를 가집니다):**

<<< ../examples/layer-grow-masters-downward-for-attached-text/02-correct.markdown
