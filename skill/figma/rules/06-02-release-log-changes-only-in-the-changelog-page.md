---
title: Log Changes Only in the Changelog Page
titleKo: 변경 기록은 `¶ Changelog` 한 곳에만 남깁니다
impact: HIGH
impactDescription: 기록이 한 곳이라 서로 어긋나지 않고 부품별 이력은 이름 찾기와 버전 비교로 봅니다
appliesWhen:
  - master를 고친 뒤 Changelog에 줄을 더할 때
  - 릴리스 칸을 닫거나 새 `다음` 칸을 열 때
  - 부품 페이지에 이력이나 변경 메모를 두려 할 때
tags: release, changelog
---

## Log Changes Only in the Changelog Page

**Impact: HIGH (기록이 한 곳이라 서로 어긋나지 않고 부품별 이력은 이름 찾기와 버전 비교로 봅니다)**

master를 고치면 `¶ Changelog`의 `다음` 칸에 한 줄을 더하고 부품 페이지에는 이력을 두지 않습니다.
부품별 이력은 Changelog에서 부품 이름으로 찾고 그림 차이는 Dev Mode의 버전 비교로 봅니다.
버전과 날짜는 릴리스 칸 제목에만 씁니다.

| 칸 | 담는 것 |
| --- | --- |
| 범위 | 부품 이름. 글자에 그 ❖ 섹션 링크를 겁니다 |
| 종류 | `Breaking`, `Added`, `Fixed`, `Docs` |
| 내용 | 바뀐 것 한 줄 |

코드 칸은 두지 않습니다. 코드를 고칠지는 개발이 정합니다.
줄과 칸은 ✱ utility의 Changelog 문서용 부품 인스턴스로 그립니다.
종류를 고르는 기준은 `release-version-the-whole-library-with-one-number`가 정합니다.

참고: [Figma 도움말: 업데이트 받기](https://help.figma.com/hc/en-us/articles/360039234193),
[Figma 도움말: 버전 기록](https://help.figma.com/hc/en-us/articles/360038006754).

**Incorrect 1 (부품 페이지마다 이력을 두고 Changelog는 비어 있습니다):**

<<< ../examples/release-log-changes-only-in-the-changelog-page/01-incorrect.markdown

**Correct 1 (고친 것을 `다음` 칸에 한 줄씩 남기고 범위에 섹션 링크를 겁니다):**

<<< ../examples/release-log-changes-only-in-the-changelog-page/02-correct.markdown
