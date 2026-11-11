---
title: Keep the Library Apart from Screen Files
titleKo: 부품 master는 화면 파일과 나눈 라이브러리 파일 하나에 둡니다
impact: HIGH
impactDescription: 부품 변경이 publish 한 길로만 화면과 코드에 닿아 어느 판을 반영했는지 번호 하나로 말할 수 있습니다
appliesWhen:
  - 화면 파일에 master를 만들거나 라이브러리 master를 복사하려 할 때
  - 화면 파일에서 라이브러리 인스턴스를 떼어 내 고치려 할 때
  - 라이브러리 변경을 화면 파일이나 코드에 전할 때
tags: file, library, publish
---

## Keep the Library Apart from Screen Files

**Impact: HIGH (부품 변경이 publish 한 길로만 화면과 코드에 닿아 어느 판을 반영했는지 번호 하나로 말할 수 있습니다)**

부품 master는 라이브러리 파일 하나에만 둡니다.
화면 파일은 publish된 라이브러리를 받아 인스턴스로만 그립니다.
라이브러리 변경이 화면 파일과 코드에 닿는 길은 publish 하나입니다.

| 파일 | 두는 것 | 두지 않는 것 |
| --- | --- | --- |
| 라이브러리 파일 | master, 변수와 스타일, `¶ Read me`, `¶ Changelog`, 예시 frame | 화면 |
| 화면 파일 | 라이브러리 인스턴스로 그린 화면, 화면 메모 | master, 복사한 master, 떼어 낸 인스턴스 |

화면에 맞지 않는 부품은 화면 파일에서 떼어 고치지 않고 라이브러리 master의 노란 노트로 요청합니다.
노트 형식은 `note-sign-dated-notes-and-remove-them-when-settled`가 정합니다.
화면 파일은 Libraries의 Updates 창에서 publish 설명을 보고 새 판을 받습니다.
화면 파일 안의 구성은 이 skill이 정하지 않습니다.

참고: [Figma 도움말: 라이브러리 publish](https://help.figma.com/hc/en-us/articles/360025508373),
[Figma 도움말: 업데이트 받기](https://help.figma.com/hc/en-us/articles/360039234193).

**Incorrect 1 (화면 파일이 master를 복사해 두고 떼어 낸 인스턴스를 고칩니다):**

<<< ../examples/file-keep-the-library-apart-from-screen-files/01-incorrect.markdown

**Correct 1 (master는 라이브러리에만 두고 화면 파일은 publish된 판을 받습니다):**

<<< ../examples/file-keep-the-library-apart-from-screen-files/02-correct.markdown
