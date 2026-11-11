---
title: Sign Dated Notes and Remove Them When Settled
titleKo: 노란 노트는 작성자와 날짜를 달고 반영되면 지웁니다
impact: MEDIUM
impactDescription: 노트가 진행 중인 소통만 담아 누가 언제 남겼는지 알고 끝난 일은 Changelog 한 줄로 남습니다
appliesWhen:
  - 노란 노트를 새로 달 때
  - 노란 노트의 내용이 반영되거나 풀렸을 때
tags: note, changelog
---

## Sign Dated Notes and Remove Them When Settled

**Impact: MEDIUM (노트가 진행 중인 소통만 담아 누가 언제 남겼는지 알고 끝난 일은 Changelog 한 줄로 남습니다)**

노란 노트에는 작성자와 날짜(`YYYY-MM-DD`)를 답니다. 작성자를 모르면 `unknown`으로 둡니다.
본문은 인사 없이 바로 시작하고 짧은 명사형으로 끝냅니다.
내용이 반영되거나 풀리면 노트를 지우고 `¶ Changelog`의 `다음` 칸에 한 줄을 남깁니다.

| 노트 상태 | 처리 |
| --- | --- |
| 진행 중 | 그대로 둡니다 |
| 반영됨. master나 코드가 바뀜 | 노트를 지우고 Changelog에 한 줄을 남깁니다 |
| 풀림. 바꾸지 않기로 함 | 노트를 지웁니다. 정한 것이 있으면 Changelog에 `Docs` 한 줄 |

Changelog 줄의 형식은 `release-log-changes-only-in-the-changelog-page`가 정합니다.

**Incorrect 1 (작성자와 날짜가 없고 반영된 뒤에도 노트가 남습니다):**

<<< ../examples/note-sign-dated-notes-and-remove-them-when-settled/01-incorrect.markdown

**Correct 1 (작성자와 날짜를 달고 반영되면 노트를 지운 뒤 Changelog 한 줄로 남깁니다):**

<<< ../examples/note-sign-dated-notes-and-remove-them-when-settled/02-correct.markdown
