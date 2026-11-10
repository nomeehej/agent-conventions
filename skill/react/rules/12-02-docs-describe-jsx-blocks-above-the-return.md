---
title: Describe JSX Blocks in a Box Above the Return
titleKo: JSX 블록 설명은 `return` 위 `화면 구성` 상자에 모읍니다
impact: HIGH
impactDescription: JSX 주석 자리를 한곳으로 정해 화면 구역의 역할을 반환 전에 읽을 수 있습니다
appliesWhen:
  - JSX 자식 자리에 주석을 쓰거나 기존 JSX 주석을 옮길 때
  - 화면을 구역으로 나누고 그 구역이 무엇을 담당하는지 적을 때
  - JSX에 여러 줄로 펼쳐진 형제 블록을 새로 만들거나 나눌 때
reviewWith: typescript/docs-write-korean-comments-about-purpose-and-constraints
tags: docs, jsx, comments
---

## Describe JSX Blocks in a Box Above the Return

**Impact: HIGH (JSX 주석 자리를 한곳으로 정해 화면 구역의 역할을 반환 전에 읽을 수 있습니다)**

JSX 자식 자리에는 주석을 두지 않습니다.
구역 설명은 `return` 바로 위 `화면 구성` 상자에 모읍니다.
요소 하나의 이유는 그 요소의 여는 태그 안에 `//` 한 줄로 적습니다.
상자 모양과 낱말은 `typescript/docs-write-korean-comments-about-purpose-and-constraints`를 따릅니다.

여러 줄로 펼친 형제 블록이 둘 이상이면 `화면 구성` 상자를 두고 그 블록마다 정의 목록 한 줄을 적습니다.
한 줄 요소와 블록 하나뿐인 반환에는 상자를 의무로 두지 않습니다.
역할이 이름만으로 안 보이면 적어도 됩니다.

| 자리 | 모양 |
| --- | --- |
| `return` 바로 위 | 제목이 `화면 구성`인 상자. 정의 목록의 이름은 블록의 컴포넌트 이름이나 BEM 클래스 이름입니다 |
| 여는 태그 안 속성 사이 | 요소 하나의 이유를 `//` 한 줄로 적습니다. 규칙이 허용한 예외는 `// 예외: …`입니다 |
| JSX 자식 자리 | `{/* */}`를 포함해 주석을 두지 않습니다 |

| 설명 내용 | 기준 |
| --- | --- |
| 화면 구역의 역할 | 그 구역이 맡은 책임과 제약을 적습니다 |
| 규칙이 허용한 예외의 이유 | `typescript/docs-justify-convention-exceptions-with-a-reason-comment`를 따르고 그 요소의 여는 태그 안에 둡니다 |
| 마크업이나 컴포넌트 이름 반복 | 이름은 정의 목록의 이름 칸이 말하므로 설명에 되풀이하지 않습니다 |

참고: [Code Complete 2판 32.5절 Commenting Techniques](https://stevemcconnell.com/books/).

**Incorrect 1 (구역 설명을 JSX 자식 자리에 둡니다):**

<<< ../examples/docs-describe-jsx-blocks-above-the-return/01-incorrect.tsx

**Correct 1 (구역 설명을 `return` 바로 위 `화면 구성` 상자에 모읍니다):**

<<< ../examples/docs-describe-jsx-blocks-above-the-return/02-correct.tsx

**Incorrect 2 (예외 이유를 JSX 자식 자리에 둡니다):**

<<< ../examples/docs-describe-jsx-blocks-above-the-return/03-incorrect.tsx

**Correct 2 (예외 이유는 그 요소의 여는 태그 안에 `//` 한 줄로 적습니다):**

<<< ../examples/docs-describe-jsx-blocks-above-the-return/04-correct.tsx

**Incorrect 3 (`화면 구성` 상자가 여러 줄 블록 둘을 빠뜨립니다):**

<<< ../examples/docs-describe-jsx-blocks-above-the-return/05-incorrect.tsx

**Correct 3 (여러 줄 블록마다 정의 목록 한 줄을 둡니다):**

<<< ../examples/docs-describe-jsx-blocks-above-the-return/06-correct.tsx
