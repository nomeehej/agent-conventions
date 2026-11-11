---
title: Declare Props Interfaces Above the Component
titleKo: 프롭스 `interface`는 컴포넌트 바로 위에 선언합니다
impact: MEDIUM
impactDescription: 계약과 구현을 일정한 순서로 읽을 수 있습니다
appliesWhen:
  - 컴포넌트 프롭스 타입을 새로 선언할 때
  - 프롭스 타입의 위치나 공개 범위를 바꿀 때
reviewWith: composition-read-props-without-destructuring, typescript/types-document-custom-types-and-shapes
tags: composition, props
---

## Declare Props Interfaces Above the Component

**Impact: MEDIUM (계약과 구현을 일정한 순서로 읽을 수 있습니다)**

프롭스는 `<컴포넌트 이름>Props`라는 `interface`로 선언하고 해당 컴포넌트 바로 위에 둡니다.
프롭스 타입을 파일 맨 위에 따로 두지 않습니다.

| 상황 | 선언과 공개 위치 |
| --- | --- |
| 컴포넌트 | 프롭스 `interface`를 `export`합니다. 파일 하나에 컴포넌트 하나라 사용처는 늘 다른 파일입니다 |
| 합성 부품의 프롭스 형태가 완전히 같음 | 공통 이름 하나로 공유합니다. 모두 `{children}`인 `SectionRoot`, `SectionHeader`, `SectionFooter`는 `SectionProps`를 씁니다 |
| 공유하는 `interface` | 부품이 파일마다 나뉘므로 소유자 `_type` 폴더에 둡니다 |

`interface`를 컴포넌트 바로 위에 붙여 계약을 먼저 읽게 합니다.
설명할 것이 있으면 그 위에 상자를 둡니다.
합성 공개 부품도 같습니다.
공유 `interface`를 쓰는 부품마다 따로 할 말은 각 컴포넌트 위 상자에 둡니다.

참고: [React TypeScript Cheatsheet: 타입과
인터페이스](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/).

**Incorrect 1 (프롭스와 컴포넌트 사이에 상수가 끼고 프롭스를 내보내지 않습니다):**

<<< ../examples/composition-declare-props-interface-above-the-component/01-incorrect.tsx

**Correct 1 (상수는 파일 위쪽에 두고 프롭스는 컴포넌트 바로 위에서 내보냅니다):**

<<< ../examples/composition-declare-props-interface-above-the-component/02-correct.tsx

**Incorrect 2 (설명이 컴포넌트에 붙어 계약과 떨어집니다):**

<<< ../examples/composition-declare-props-interface-above-the-component/03-incorrect.tsx

**Correct 2 (설명, 계약, 선언을 붙여 둡니다):**

<<< ../examples/composition-declare-props-interface-above-the-component/04-correct.tsx
