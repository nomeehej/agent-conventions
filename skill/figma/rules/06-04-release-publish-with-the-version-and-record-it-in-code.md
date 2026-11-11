---
title: Publish with the Version and Record It in Code
titleKo: publish 설명 첫 줄에 버전을 적고 코드에 반영한 버전을 남깁니다
impact: HIGH
impactDescription: 화면 디자이너와 개발이 번호 하나로 어디까지 받았는지 맞추고 Dev Mode 상태가 실제 반영과 맞습니다
appliesWhen:
  - 라이브러리를 publish하거나 릴리스 칸을 닫을 때
  - 라이브러리 변경을 코드에 반영하고 PR을 올릴 때
reviewWith: storybook/docs-show-the-applied-library-version
tags: release, publish, dev-mode
---

## Publish with the Version and Record It in Code

**Impact: HIGH (화면 디자이너와 개발이 번호 하나로 어디까지 받았는지 맞추고 Dev Mode 상태가 실제 반영과 맞습니다)**

publish 설명 첫 줄에 `DS 1.1.0`을, 다음 줄부터 그 릴리스 칸의 줄을 적습니다.
설명은 버전 기록과 받는 쪽 Updates 창에 그대로 남으므로 이름 붙인 버전을 따로 만들지 않습니다.
publish는 Plugin API에 없으므로 사람이 Figma에서 직접 하고 Done with changes도 사람이 표시합니다.
새로 그린 섹션은 개발에 넘길 때 사람이 Ready for dev로 표시합니다.
표시한 섹션을 고치면 Figma가 `Changed`로 바꾸고 릴리스 담당이 Done with changes를 눌러 Ready for dev로 되돌립니다.
`Completed`는 Education, Organization, Government, Enterprise 요금제에서만 쓸 수 있어 필수로 두지 않습니다.

| 누가 | 차례 |
| --- | --- |
| 릴리스 담당 | `다음` 칸에 번호와 날짜를 적고 publish 창에서 바뀐 목록과 Hidden 목록을 확인한 뒤 publish합니다. 바뀐 섹션은 Done with changes로 표시하고 맨 위에 새 `다음` 칸을 엽니다 |
| 개발 | 반영한 버전을 Storybook 제목(`brandTitle`)에 적고 그 뒤 릴리스 칸만 읽습니다. PR 제목에 `DS 1.1.0`과 부품 이름을 씁니다 |
| 화면 디자이너 | Updates 창에서 설명을 보고 받습니다. `Breaking`이 든 릴리스는 publish 전에 알림을 받습니다 |

급한 고침 하나만 낼 때도 번호(`DS 1.0.1`)와 Changelog 줄을 씁니다.

참고: [Figma 도움말: 라이브러리 publish](https://help.figma.com/hc/en-us/articles/360025508373),
[Figma 도움말: 섹션](https://help.figma.com/hc/en-us/articles/9771500257687),
[Figma 도움말: Dev Mode 상태](https://help.figma.com/hc/en-us/articles/26781702258583).

**Incorrect 1 (publish 설명과 PR 제목에 번호가 없어 어느 판인지 알 수 없습니다):**

<<< ../examples/release-publish-with-the-version-and-record-it-in-code/01-incorrect.markdown

**Correct 1 (publish 설명, Storybook, PR 제목이 같은 번호를 씁니다):**

<<< ../examples/release-publish-with-the-version-and-record-it-in-code/02-correct.markdown
