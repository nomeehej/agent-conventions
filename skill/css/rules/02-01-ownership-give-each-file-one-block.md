---
title: Give Each CSS File Its Own Block
titleKo: CSS 파일마다 고유한 블록 이름을 하나씩 씁니다
impact: CRITICAL
impactDescription: 파일마다 네임스페이스를 구분해 전역 클래스 충돌을 막습니다
appliesWhen:
  - 새 블록 이름을 짓거나 기존 블록 이름을 복사하거나 바꿀 때
  - 부품에 CSS 파일을 새로 만들면서 부모 블록 이름을 그대로 쓸 때
tags: namespace, ownership, uniqueness
---

## Give Each CSS File Its Own Block

**Impact: CRITICAL (파일마다 네임스페이스를 구분해 전역 클래스 충돌을 막습니다)**

CSS 파일마다 고유한 블록 이름을 하나씩 씁니다.
같은 블록 이름을 여러 파일에서 나누어 쓰지 않습니다.

| 상황 | 처리 |
| --- | --- |
| 새 스타일을 추가함 | 같은 블록 이름을 쓰는 파일이 있는지 레이어와 관계없이 먼저 확인합니다 |
| 의미가 같아도 CSS 파일이 다름 | 블록 이름을 따로 짓습니다. 부품끼리 부모 블록 이름을 나누어 쓰는 것도 금지합니다 |
| 부모 블록 이름을 계속 씀 | 스타일도 부모 CSS 파일에 둡니다 |

**Incorrect 1 (이미 다른 소유자가 쓰는 블록 이름을 재사용합니다):**

<<< ../examples/ownership-give-each-file-one-block/01-incorrect.txt

**Correct 1 (소유자가 다르면 블록 이름을 따로 짓습니다):**

<<< ../examples/ownership-give-each-file-one-block/02-correct.txt

**Incorrect 2 (부품의 CSS 파일이 부모 블록 이름을 그대로 씁니다):**

<<< ../examples/ownership-give-each-file-one-block/03-incorrect.txt

**Correct 2 (자기 CSS 파일이 있는 컴포넌트는 자기 블록 이름을 씁니다):**

<<< ../examples/ownership-give-each-file-one-block/04-correct.txt
