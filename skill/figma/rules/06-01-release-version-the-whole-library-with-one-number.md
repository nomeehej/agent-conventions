---
title: Version the Whole Library with One Number
titleKo: 버전은 라이브러리 전체에 번호 하나로 붙입니다
impact: HIGH
impactDescription: 서로 얽힌 부품이 한 번호 안에서 늘 맞고 코드는 어디까지 반영했는지 번호 하나로 말합니다
appliesWhen:
  - Changelog 줄의 변경 종류나 릴리스 번호를 정할 때
  - 부품마다 버전 번호를 붙이려 할 때
tags: release, version, semver
---

## Version the Whole Library with One Number

**Impact: HIGH (서로 얽힌 부품이 한 번호 안에서 늘 맞고 코드는 어디까지 반영했는지 번호 하나로 말합니다)**

버전은 라이브러리 전체에 `DS 1.1.0` 하나를 붙이고 부품마다 번호를 두지 않습니다.
Figma publish는 파일 하나를 한 번에 올리고 라이브러리에는 번호를 적는 칸이 없습니다.
릴리스 번호는 그 릴리스 줄 가운데 가장 큰 변경 종류를 따릅니다.

| 종류 | 변경 | 1.0.0에서 |
| --- | --- | --- |
| `Breaking` | 부품, 속성, 값을 지우거나 이름을 바꿈. 쓰던 인스턴스가 깨지거나 값이 풀림 | 2.0.0 |
| `Added` | 새 부품, 속성, 값. 쓰던 화면은 그대로 | 1.1.0 |
| `Fixed` | 모양만 바꿈. 색, 간격, 글꼴, 아이콘 | 1.0.1 |
| `Docs` | Read me, 예시, 노트 | 그대로 |

표기는 `DS 1.1.0`입니다. `v`나 가운뎃점을 붙이지 않습니다.

참고: [Figma 도움말: 라이브러리 publish](https://help.figma.com/hc/en-us/articles/360025508373),
[Figma 도움말: 버전 기록](https://help.figma.com/hc/en-us/articles/360038006754).

**Incorrect 1 (부품마다 번호를 달아 어느 번호끼리 맞는지 알 수 없습니다):**

<<< ../examples/release-version-the-whole-library-with-one-number/01-incorrect.markdown

**Correct 1 (릴리스 하나에 번호 하나를 붙이고 가장 큰 종류로 번호를 정합니다):**

<<< ../examples/release-version-the-whole-library-with-one-number/02-correct.markdown
