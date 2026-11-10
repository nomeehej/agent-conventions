---
title: Close Comments on Each Line
titleKo: CSS 주석은 줄마다 `/* */`로 닫고 두 줄 이상의 설명은 상자로 씁니다
impact: MEDIUM
impactDescription: 주석 모양과 폭이 TypeScript 주석과 같아 파일을 오가도 같은 자리에서 설명을 찾습니다
appliesWhen:
  - CSS 파일에 주석을 추가하거나 기존 주석의 모양을 바꿀 때
  - 스타일시트를 구역으로 나누는 주석을 쓸 때
  - 제외: `stylelint-disable` 같은 도구 지시 주석만 쓰는 경우
tags: docs, comments
---

## Close Comments on Each Line

**Impact: MEDIUM (주석 모양과 폭이 TypeScript 주석과 같아 파일을 오가도 같은 자리에서 설명을 찾습니다)**

CSS에는 `//` 줄 주석이 없어 `/* */`만 씁니다.
여러 줄에 걸친 블록 주석은 쓰지 않고 줄마다 `/* … */`로 닫습니다.
한 줄 설명은 그 블록 바로 위 `/* 설명 */` 한 줄입니다.
어투와 낱말은 `typescript/docs-write-korean-comments-about-purpose-and-constraints`를 따릅니다.

### 상자

설명이 두 줄 이상이거나 스타일시트를 구역으로 나눌 때는 상자를 씁니다.
위아래 줄은 `/* ` 뒤 대시 85개와 ` */`로 TypeScript 주석 상자와 같은 91칸입니다.
안쪽 줄은 제목 한 줄과 설명 한 문장씩을 각각 `/* 내용 */`로 닫습니다.
TypeScript 상자에서 빈 `//` 줄이 오는 자리에는 아무 줄도 두지 않습니다.
빈 주석은 `comment-no-empty`에 걸립니다.

| 자리 | 모양 |
| --- | --- |
| 한 줄 설명 | 그 블록 바로 위 `/* 설명 */` 한 줄 |
| 두 줄 이상의 설명, 구역 구분 | 위아래 대시 줄 사이에 `/* 제목 */`, `/* 설명 */`을 줄마다 닫아 씁니다 |
| 여러 줄에 걸친 `/* … */` | 쓰지 않습니다 |
| 빈 주석 `/* */` | 쓰지 않습니다 |
| `stylelint-disable` 같은 도구 지시 | 그 도구의 꼴을 따릅니다 |

줄마다 닫은 상자는 주석이 앞 주석 바로 뒤에 붙습니다.
stylelint `comment-empty-line-before`의 `ignore`에 `"after-comment"`를 더해야 이 상자가 통과합니다.
설정은 `tooling-configure-stylelint-to-enforce-these-rules`가 정합니다.

참고: [stylelint comment-empty-line-before](https://stylelint.io/user-guide/rules/comment-empty-line-before),
[stylelint comment-no-empty](https://stylelint.io/user-guide/rules/comment-no-empty),
[Black 줄 길이](https://black.readthedocs.io/en/stable/the_black_code_style/current_style.html).

**Incorrect 1 (여러 줄에 걸친 블록 주석으로 구역을 설명합니다):**

<<< ../examples/docs-close-comments-on-each-line/01-incorrect.css

**Correct 1 (줄마다 닫은 상자로 구역을 설명합니다):**

<<< ../examples/docs-close-comments-on-each-line/02-correct.css

**Incorrect 2 (TypeScript 상자의 빈 줄을 빈 주석으로 옮깁니다):**

<<< ../examples/docs-close-comments-on-each-line/03-incorrect.css

**Correct 2 (빈 주석 없이 제목 다음 줄에 설명을 잇습니다):**

<<< ../examples/docs-close-comments-on-each-line/04-correct.css
