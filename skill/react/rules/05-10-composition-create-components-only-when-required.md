---
title: Create Components Only When Something Requires Them
titleKo: 컴포넌트는 요구하는 표시가 있을 때만 만들고 파일 하나에 하나만 둡니다
impact: HIGH
impactDescription: 파일 목록이 곧 컴포넌트 목록이 되고 만들지 말지를 코드의 표시로 판정합니다
appliesWhen:
  - 컴포넌트를 새로 만들거나 파일로 떼거나 부모 JSX로 되돌릴 때
  - 경계 아래 내용물을 나누거나 조건부로 렌더하는 JSX의 훅을 옮길 때
  - 파일 하나에 컴포넌트를 둘 이상 두거나 모달을 만들 때
reviewWith: >-
  composition-do-not-define-components-inside-components,
  ownership-place-owner-files-in-role-folders,
  runtime-place-suspense-boundaries-at-the-section-owner
tags: composition, ownership, screen
---

## Create Components Only When Something Requires Them

**Impact: HIGH (파일 목록이 곧 컴포넌트 목록이 되고 만들지 말지를 코드의 표시로 판정합니다)**

파일 하나에는 컴포넌트를 하나만 둡니다.
컴포넌트는 아래 표의 표시가 코드에 있을 때만 만들고 나머지는 부모의 JSX로 둡니다.
`page`, `widget`, `ui`에 같은 표를 씁니다.

### 컴포넌트를 요구하는 표시

| 요구하는 쪽 | 경우 | 코드의 표시 |
| --- | --- | --- |
| React | 경계 아래에 있어야 함 | `Suspense`, 오류 경계 태그 안의 내용물 |
| React | 컴포넌트를 값으로 넘겨야 함 | `NiceModal.create(…)`, `icon={X}` |
| React | 훅이 조건, 반복 안에서만 돌아야 함 | 조건부로 렌더하는 JSX만 쓰는 훅, 여러 번 렌더하는 같은 JSX가 각자 가진 훅 |
| React | 프로바이더 아래에서 컨텍스트를 읽어야 함 | 부모가 렌더한 프로바이더의 `useXContext` 호출 |
| 다른 파일 | 폴더 밖에서 가져감 | 라우터나 다른 폴더가 가져가는 진입 파일, 진입 파일이 묶는 합성 부품 |
| 다른 파일 | story, 테스트가 마운트함 | `.stories.tsx`, `.story.tsx`의 import |
| 관례 | 대체 화면, 새 창의 내용 | `fallback` 프롭, 새 창에 렌더하는 내용 |

조건부로 렌더하는 JSX만 쓰는 훅이 있으면 그 JSX를 컴포넌트로 둡니다.
그 훅을 부모로 올리지 않습니다.
같은 JSX를 여러 번 렌더하면서 각자 훅을 가져야 할 때도 같습니다.
훅이 구독하는 컨텍스트와 스토어는 호출부에서 보이지 않아 부모로 올리면 그 JSX가 없는 화면도 다시 렌더됩니다.

관례 줄은 React가 강제하지 않지만 이름 있는 단위라 컴포넌트로 둡니다.
`fallback`에 `ui` 컴포넌트만 넣으면 새로 만들 것이 없습니다.
모달은 본문을 `NiceModal.create((props: XProps) => …)` 안에 바로 적어 파일의 컴포넌트를 하나로 둡니다.

### 경계 하나에 내용물 하나

`Suspense` 하나 안에 섹션이 여럿 보여도 내용물 컴포넌트는 하나입니다.
표의 다른 줄이 요구하는 것만 그 안에서 따로 둡니다.
경계의 자리와 수는 `runtime-place-suspense-boundaries-at-the-section-owner`가 정합니다.

### 이유가 되지 않는 것

| 이유 | 처리 |
| --- | --- |
| 길다 | 부모의 JSX로 둡니다 |
| 쿼리, 뮤테이션을 호출함 | 부모의 JSX로 둡니다. 나누게 하는 것은 `Suspense`이고 쿼리가 아닙니다 |
| 지역 상태가 있음, 폼(`useForm`)임 | 부모의 JSX로 둡니다. 부모에 둬도 동작이 같습니다 |
| 같은 폴더에서 같은 JSX가 두 번 필요함 | 두 자리에 적습니다. 다른 화면도 쓸 만하면 `widget`으로 옮깁니다 |
| 감싸기만 하는 래퍼, 부모도 읽는 컨텍스트로 분기만 함 | 부모의 JSX로 둡니다 |

측정된 성능 문제처럼 목록 밖의 이유로 만들면 이유 주석을 답니다.
주석 모양은 `typescript/docs-justify-convention-exceptions-with-a-reason-comment`를 따릅니다.
파일 배치는 `ownership-place-owner-files-in-role-folders`, 검사는 `tooling-enable-the-biome-react-domain`을 따릅니다.

참고: [Carson Gross: Locality of Behaviour](https://htmx.org/essays/locality-of-behaviour/),
[John Carmack: 인라인 코드](https://number-none.com/blow/john_carmack_on_inlined_code.html),
[React 문서: 훅의 규칙](https://react.dev/reference/rules/rules-of-hooks).

**Incorrect 1 (함께 채워지는 내용을 경계 하나 아래 컴포넌트 둘로 나눕니다):**

<<< ../examples/composition-create-components-only-when-required/01-incorrect.tsx

**Correct 1 (경계 하나에 내용물 컴포넌트 하나를 둡니다):**

<<< ../examples/composition-create-components-only-when-required/02-correct-1.tsx

<<< ../examples/composition-create-components-only-when-required/02-correct-2.tsx

**Incorrect 2 (조건부로 렌더하는 버튼만 쓰는 훅을 부모가 부릅니다):**

<<< ../examples/composition-create-components-only-when-required/03-incorrect.tsx

**Correct 2 (조건부로 렌더하는 버튼을 컴포넌트로 두고 훅을 그 안에서 부릅니다):**

<<< ../examples/composition-create-components-only-when-required/04-correct-1.tsx

<<< ../examples/composition-create-components-only-when-required/04-correct-2.tsx

**Incorrect 3 (감싸기만 하는 래퍼를 컴포넌트로 뗍니다):**

<<< ../examples/composition-create-components-only-when-required/05-incorrect.tsx

**Correct 3 (래퍼는 부모 JSX로 두고 경계 아래 내용물만 컴포넌트로 둡니다):**

<<< ../examples/composition-create-components-only-when-required/06-correct.tsx
