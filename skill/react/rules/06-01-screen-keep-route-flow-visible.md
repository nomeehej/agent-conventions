---
title: Keep Route Entry Files Focused on Screen Flow
titleKo: 라우트 진입 파일은 화면 흐름 조립에 집중합니다
impact: HIGH
impactDescription: 진입 파일만 봐도 화면 흐름을 따라갈 수 있습니다
appliesWhen:
  - 라우트 진입의 search 파라미터, 화면 이동, 쿼리, 뮤테이션, 화면 전체 이펙트를 옮기거나 나눌 때
  - 경계 배치나 경계 아래 내용물의 소유자를 바꿀 때
  - 제외: 같은 소유자 안에서 표현만 바꾸는 경우
reviewWith: >-
  composition-create-components-only-when-required,
  ownership-place-owner-files-in-role-folders
tags: screen, routes, flow
---

## Keep Route Entry Files Focused on Screen Flow

**Impact: HIGH (진입 파일만 봐도 화면 흐름을 따라갈 수 있습니다)**

라우트 진입은 경계 배치와 경계 밖 JSX를 가집니다.
서버 데이터와 동작은 경계 아래 내용물이 소유합니다.

### 라우트 진입의 책임

| 라우트 진입의 책임 | 범위 |
| --- | --- |
| 경계 배치 | `Suspense`와 오류 경계를 진입이 놓습니다. 경계 수는 `runtime-place-suspense-boundaries-at-the-section-owner`를 따릅니다 |
| 경계 밖 JSX | 경계 위, 옆에 놓이는 필터 입력, 배치 요소 같은 JSX를 진입이 직접 적습니다. 컴포넌트로 떼는 것은 `composition-create-components-only-when-required`가 정합니다 |
| 화면 전체 이펙트 | `document.title`처럼 화면 전체에 걸친 동기화를 소유합니다 |

### 데이터와 동작의 소유자

| 데이터, 동작 | 소유 위치 |
| --- | --- |
| 서버 응답 | 경계 아래 내용물이 쿼리 키로 직접 읽습니다. 내용물이 이미 읽은 값(목록 항목)을 조건부나 반복 컴포넌트에 내리는 것은 프롭스입니다 |
| 뮤테이션 | 동작을 일으키는 컴포넌트가 소유합니다 |
| 라우트 params, search 파라미터 | 사용처에서 `useParams`와 URL 파서 묶음으로 읽고 씁니다 |
| 여러 응답을 합친 파생값 | 값을 렌더하는 내용물이 인라인 `combine`을 소유합니다 |
| 화면 이동 | 이동을 일으키는 컴포넌트가 `useNavigate`를 직접 부릅니다. 진입은 이동 흐름을 따로 조립하지 않습니다 |

그 화면 모양의 대체 화면(스켈레톤)이 없으면 진입이 내용물을 겸합니다.
이때만 진입이 쿼리를 직접 부르고 경계는 `Outlet` 프레임의 공용 경계가 맡습니다.
경계만을 위한 빈 컴포넌트는 만들지 않습니다.

### 같은 데이터를 여러 곳이 읽을 때

한 경계 아래에서는 내용물 하나가 쿼리를 한 번 부르고 구역들이 그 값을 읽습니다.
경계가 다른 내용물끼리는 같은 데이터가 필요해도 프롭으로 내리지 않고 각자 같은 쿼리 키로 읽습니다.
같은 데이터 요청이 여러 번 나가면 `staleTime`, `refetchOnMount`, 쿼리 키가 서로 같은지 먼저 확인합니다.
부모의 대기로 자식 요청이 늦어지면 대기 전에 실행되는 컴포넌트에서 같은 쿼리 키를 `usePrefetchQuery`로 먼저 요청합니다.

참고: [TkDodo: React Query와 컴포넌트 계층의 관심사
분리](https://tkdodo.eu/blog/react-query-as-a-state-manager#a-note-on-separation-of-concerns),
[TanStack Query 문서: 컴포넌트에서 미리
가져오기](https://tanstack.com/query/latest/docs/framework/react/guides/prefetching#prefetch-in-components).

**Incorrect 1 (라우트 진입이 쿼리를 대신 읽어 프롭으로 내립니다):**

<<< ../examples/screen-keep-route-flow-visible/01-incorrect.tsx

**Correct 1 (라우트 진입은 경계 배치와 경계 밖 JSX만 맡습니다):**

<<< ../examples/screen-keep-route-flow-visible/02-correct.tsx

**Correct (경계 아래 내용물이 자신의 쿼리 키로 데이터를 읽고 저장까지 소유합니다):**

<<< ../examples/screen-keep-route-flow-visible/03-correct.tsx
