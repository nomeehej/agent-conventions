---
title: Group Route Frames with Outlets
titleKo: 공통 라우트 프레임은 `Outlet` 그룹으로 묶습니다
impact: HIGH
impactDescription: 라우트 중첩을 폴더로 드러내고 화면 폴더 안은 평평하게 유지합니다
appliesWhen:
  - 라우트 트리나 `Outlet` 진입 파일을 추가, 변경할 때
  - '`page` 아래 라우트 그룹을 만들거나 화면을 그룹 사이로 옮길 때'
requiresSelected: ownership-place-owner-files-in-role-folders, ownership-keep-component-imports-flowing-downward
reviewWith: ownership-name-component-files-after-their-symbols, runtime-place-error-boundaries-by-blast-radius
tags: ownership, routing
---

## Group Route Frames with Outlets

**Impact: HIGH (라우트 중첩을 폴더로 드러내고 화면 폴더 안은 평평하게 유지합니다)**

라우트의 중첩과 화면 안 컴포넌트의 중첩은 서로 다른 축입니다.
공통 외곽이 필요한 자리에만 `Outlet` 프레임을 두고 폴더의 포함 관계를 라우트 선언과 맞춥니다.
이 규칙은 폴더와 진입 파일의 소유만 정하고 라우터 API는 각 라우터 문서를 따릅니다.

### 라우터와 나누는 일

| 정하는 쪽 | 대상 |
| --- | --- |
| 이 규칙 | 프레임과 화면의 폴더, 진입 파일 이름, 진입 파일을 가져오는 쪽 |
| 라우터 문서 | 라우트 선언 방식, 자식 라우트를 그리는 자리, params와 search 파라미터 읽기, 이동, 라우트 오류 화면 |

`Outlet` 프레임은 공통 외곽과 자식 라우트를 그리는 자리를 함께 가진 진입 파일입니다.
React Router와 TanStack Router는 그 자리에 `Outlet`을 두고 Next.js 레이아웃은 `children` 프롭으로 받습니다.
자리를 그리는 API가 달라도 규칙에서는 모두 `Outlet` 프레임이라고 부릅니다.

### 진입 파일과 그룹

| 대상 | 배치와 책임 |
| --- | --- |
| 기본 프레임 | `page/root-outlet.tsx`. 모든 화면의 공통 외곽과 `Outlet`을 소유합니다 |
| 경로 없는 그룹 | `page/(main)/main-outlet.tsx`. 폴더의 `(이름)`과 진입 파일의 `<이름>-outlet`을 맞춥니다 |
| 화면 | 컴포넌트 파일이나 역할 폴더가 있으면 `page/(main)/products/products-page.tsx`, 진입 파일과 CSS뿐이면 `page/not-found-page.tsx`. 각각 독립 소유자입니다 |
| 라우터 | URL과 진입 파일의 중첩 관계를 선언합니다 |

그룹은 `page` 바로 아래나 다른 그룹 아래에 두고 그룹마다 자식 라우트를 감싸는 `Outlet` 진입 파일을 둡니다.
분류만 하는 그룹, `Outlet`만 렌더하는 빈 프레임, `page` 전체를 한 번 더 감싸는 `(app)` 같은 그룹은 만들지 않습니다.
`(이름)` 폴더는 URL에 나타나지 않습니다.
폴더를 만드는 것만으로 라우트가 생기지도 않습니다.

파일 기반 라우터는 라우트 파일의 이름과 자리를 그 라우터의 규약대로 둡니다.
규약이 `page`의 폴더 표기와 겹치면 라우트 파일은 `page` 밖의 라우트 폴더에 두고 진입 파일만 가져옵니다.
TanStack Router는 `_`로 시작하는 파일과 폴더를 경로 없는 레이아웃으로 읽으므로 `_constant` 같은 역할 폴더와 겹칩니다.
이때 라우트 폴더가 위 표의 라우터 자리입니다.

### 깊이와 소유자 경계

화면 폴더 안은 `ownership-place-owner-files-in-role-folders`에 따라 평평합니다.
화면 폴더 아래에는 그룹을 만들지 않습니다.
더 깊은 URL이 필요해도 화면 폴더는 다른 화면과 형제로 두고 중첩은 라우터가 선언합니다.
기본 프레임, 그룹 프레임, 각 화면은 서로 다른 소유자입니다.
다른 프레임이나 화면의 컴포넌트와 역할 폴더는 같은 그룹 안에서도 가져오지 않습니다.
프레임은 자식 화면을 직접 가져오지 않고 `Outlet`으로 받습니다.
진입 파일을 가져오는 것은 라우터뿐입니다.

모든 자식 화면에 적용하는 인증 가드는 기본 프레임이 직접 소유할 수 있습니다.
인증 확인이 끝나기 전에는 `Outlet` 아래를 렌더하지 않습니다.
일부 그룹에만 적용하는 가드는 그 그룹의 `Outlet` 프레임이 소유합니다.
화면마다 다른 접근 정책은 라우터가 연결합니다.
`page`는 라우터의 구현을 가져오지 않습니다.
타입이 붙은 params나 search 파라미터를 읽으려고 라우트 파일을 가져와야 하면 라우터가 주는 경로 id 조회를 씁니다.
TanStack Router에서는 `getRouteApi`입니다.
같은 화면을 여러 URL에서 열면 라우터가 같은 진입 파일을 연결합니다.
차이는 params나 진입 프롭으로 전달합니다.

### 프레임이 유지하는 것

자식 화면이 바뀌어도 남아야 하는 제목, 탭은 그 프레임이 소유합니다.
화면마다 다른 데이터는 프레임에 모으지 않습니다.
프레임보다 위에서 URL 경로마다 `key`를 바꾸면 프레임까지 다시 마운트되므로 쓰지 않습니다.
오류와 로딩 경계의 자리는 `runtime-place-error-boundaries-by-blast-radius`와
`runtime-place-suspense-boundaries-at-the-section-owner`를 따릅니다.

참고: [React Router 문서: 중첩 라우트와 `Outlet`](https://reactrouter.com/start/data/routing#nested-routes),
[React Router 문서: 경로 없는 레이아웃 라우트](https://reactrouter.com/start/data/routing#layout-routes),
[Next.js 문서: 경로 그룹 `(folder)`](https://nextjs.org/docs/app/getting-started/project-structure#route-groups),
[Next.js 문서: `layout`의 `children`](https://nextjs.org/docs/app/api-reference/file-conventions/layout),
[TanStack Router 문서: `Outlet`](https://tanstack.com/router/latest/docs/framework/react/guide/outlets),
[TanStack Router 문서: 레이아웃
라우트](https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts),
[TanStack Router 문서: 파일 이름
규약](https://tanstack.com/router/latest/docs/framework/react/routing/file-naming-conventions),
[TanStack Router 문서:
`getRouteApi`](https://tanstack.com/router/latest/docs/framework/react/guide/search-params).

**Incorrect 1 (화면 폴더 안에 그룹을 만들어 다른 화면을 넣습니다):**

<<< ../examples/ownership-group-route-frames-with-outlets/01-incorrect.txt

**Correct 1 (더 깊은 URL을 쓰는 화면도 같은 프레임 아래 `products`의 형제 폴더로 둡니다):**

<<< ../examples/ownership-group-route-frames-with-outlets/02-correct.txt

**Correct (React Router의 라우트 선언이 프레임과 화면의 진입 파일을 중첩으로 잇습니다):**

<<< ../examples/ownership-group-route-frames-with-outlets/03-correct.tsx

**Correct (파일 기반 라우터의 규약이 역할 폴더와 겹치면 라우트 폴더를 `page` 밖에 두고 진입 파일만 잇습니다):**

<<< ../examples/ownership-group-route-frames-with-outlets/04-correct.txt
