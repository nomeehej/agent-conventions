# Grow Masters Downward for Attached Text

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

```markdown
text-field  Size=Medium, Value=Filled, State=Error
  (가로, 높이 34 고정, 세로 가운데)
  Label
  Box
  Error text           붙으면 Box가 위로 밀림
```

**Correct 1 (루트는 위 정렬과 Hug, 입력칸 줄만 높이를 가집니다):**

```markdown
text-field  Size=Medium, Value=Filled, State=Error
  (세로, 위 정렬, 높이 Hug)
  Row                  (가로, 높이 34, 세로 가운데)
    Label
    Box
    Suffix
  Error text
```

> 나머지 예시와 예외는 [full rule](../rules/02-07-layer-grow-masters-downward-for-attached-text.md)에 있습니다.
