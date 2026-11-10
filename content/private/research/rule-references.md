---
name: Rule references 2026-11-10
label: 2026-11-10 규칙마다 단 외부 근거 링크와 페이지에서 확인한 문장, 근거가 없거나 관례와 다른 규칙
group: Research
order: 50
---

:::note[기록 시점]
2026-11-10에 에이전트 일곱이 skill별로 찾고 `curl`로 열어 확인한 기록이다. 규칙의 `참고:` 줄이 정본이고 이 문서는 근거 문장과 빈자리를 남긴다.
:::

# 규칙 근거 링크

사용자 요청: "내 문서만 있으니 다른 사람을 설득하기 어렵다. 내 의견을 뒷받침하는 문서가 함께 있어야 한다."
규칙마다 의도를 실제로 뒷받침하는 문서만 달았다. 반대 관례를 말하는 문서는 근거로 쓰지 않았고, 근거를 못 찾은 규칙은 아래 각 절에 "외부 근거 없음"으로 남겼다.

| skill | 링크를 단 규칙 |
| --- | --- |
| react | 49 / 54 |
| typescript | 40 / 41 |
| css | 34 / 34 |
| testing | 27 / 27 |
| figma | 11 / 16 |
| blueprint | 17 / 25 |

## React 01~06

링크 33개 규칙에 달았고 2개 규칙은 못 달았다. 모든 URL은 curl -sL로 받아 HTTP 200, 앵커 id, 뒷받침 문장을 확인했다(verify 스크립트 전부 통과).
일부 링크는 한 줄 120칸 제한(validate) 때문에 긴 앵커를 뺐다(01-06, 01-07의 훅 재사용 페이지, 03-03, 05-06의 Cheatsheet).

| 규칙 | 출처 | URL | 페이지에서 확인한 문장 | 요지 |
| --- | --- | --- | --- | --- |
| 01-01 | TkDodo: React Query와 컴포넌트 계층의 관심사 분리 | https://tkdodo.eu/blog/react-query-as-a-state-manager#a-note-on-separation-of-concerns | "Should a reusable Button component do data fetching? Probably not." | 재사용 버튼은 데이터를 가져오지 않는다. 훅이 나온 뒤에는 어느 층 컴포넌트든 직접 쿼리를 부를 수 있어 층 구분은 트레이드오프라고 정리 |
| 01-01 | Feature-Sliced Design: 레이어 정의 | https://feature-sliced.design/docs/reference/layers#layer-definitions | "business domains do not exist in Shared" | Shared 층에는 비즈니스 도메인이 없고 Pages는 화면 단위. 도메인을 아는가로 층을 가르는 발상 |
| 01-02 | Angular 스타일 가이드: 파일 이름은 안의 식별자를 따른다 | https://angular.dev/style-guide#match-file-names-to-the-typescript-identifier-within | "the file name should reflect that class name" | UserProfile 컴포넌트 파일은 user-profile.ts. 같은 이름으로 ts/css를 맞추고 helpers.ts 같은 지나치게 범용인 이름을 피하라고 함 |
| 01-03 | Next.js 문서: 비공개 폴더 `_folder` | https://nextjs.org/docs/app/getting-started/project-structure#private-folders | "private implementation detail" | 밑줄 접두사는 외부에 공개하지 않는 구현 세부라는 표식이며 라우팅 대상에서 제외 |
| 01-03 | Kent C. Dodds: 코로케이션 | https://kentcdodds.com/blog/colocation | "Place code as close to where it's relevant as possible" | 관련 있는 코드는 쓰이는 자리 가까이에 둔다 |
| 01-04 | Feature-Sliced Design: 레이어 가져오기 규칙 | https://feature-sliced.design/docs/reference/layers#import-rule-on-layers | "can only import other slices when they are located on layers strictly below" | 슬라이스는 엄격히 아래에 있는 레이어의 것만 가져올 수 있다 |
| 01-05 | React Router 문서: 중첩 라우트와 `Outlet` | https://reactrouter.com/start/data/routing#nested-routes | "Child routes are rendered through the <Outlet/> in the parent route" | 자식 라우트는 부모 라우트의 Outlet으로 렌더된다 |
| 01-05 | React Router 문서: 경로 없는 레이아웃 라우트 | https://reactrouter.com/start/data/routing#layout-routes | "without adding any segments to the URL" | path를 생략한 라우트는 URL 구간을 더하지 않고 자식을 중첩한다 |
| 01-05 | Next.js 문서: 경로 그룹 `(folder)` | https://nextjs.org/docs/app/getting-started/project-structure#route-groups | "should not be included in the route's URL path" | 괄호 폴더는 조직용이며 URL 경로에 들어가지 않고 일부 라우트에만 레이아웃을 붙일 수 있다 |
| 01-06 | React 문서: 커스텀 훅 재사용, 훅을 안 부르면 `use`를 안 붙이고 구체적인 용도로 짓는다 | https://react.dev/learn/reusing-logic-with-custom-hooks | "If your function doesn’t call any Hooks, avoid the use prefix" | 훅을 부르지 않는 함수는 use 없이 일반 함수로 쓰라고 하며 useSorted 대신 getSorted 예시를 듦. 커스텀 훅은 구체적인 상위 용도(useSocket 등)로 지으라고 함 (같은 페이지 Keep custom Hooks focused on concrete high-level use cases) |
| 01-07 | React 문서: 이펙트로 React 밖 위젯 제어하기 | https://react.dev/learn/synchronizing-with-effects#controlling-non-react-widgets | "Controlling non-React widgets" | 외부 위젯 인스턴스는 이펙트에서 만들고 정리하는 예시(지도 줌 레벨) |
| 01-07 | React 문서: 커스텀 훅 재사용, 생명주기 훅을 만들지 않는다 | https://react.dev/learn/reusing-logic-with-custom-hooks | "Avoid creating and using custom “lifecycle” Hooks" | useEffect를 감싸는 useMount 같은 생명주기 훅을 만들지 말라 |
| 02-02 | TanStack Query 문서: `select`로 구독 데이터 고르기 | https://tanstack.com/query/latest/docs/framework/react/guides/render-optimizations#select | "select a subset of the data that your component should subscribe to" | select로 컴포넌트가 구독할 데이터 일부를 고르고 변환할 수 있다 |
| 02-02 | TkDodo: React Query와 데이터 변환 | https://tkdodo.eu/blog/react-query-data-transformations#3-using-the-select-option | "3. using the select option" | select는 내장 셀렉터로 데이터를 변환하고 데이터가 있을 때만 호출되며 부분 구독이 가능 |
| 02-03 | TanStack Query 문서: `useQueries`의 `combine` | https://tanstack.com/query/latest/docs/framework/react/reference/functions/useQueries | "The combine option can be used to combine the results of the queries into a single value" | combine으로 여러 쿼리 결과를 하나의 값으로 합친다 |
| 02-03 | TanStack Query 문서: 병렬 쿼리 | https://tanstack.com/query/latest/docs/framework/react/guides/parallel-queries | "useSuspenseQueries hook (which is suggested)" | Suspense 모드에서는 병렬 패턴이 안 통하므로 useSuspenseQueries를 쓰라 |
| 02-05 | TkDodo: React Query 뮤테이션 정복, `mutate`와 `mutateAsync` | https://tkdodo.eu/blog/mastering-mutations-in-react-query#mutate-or-mutateasync | "you also have to catch errors manually, or you might get an unhandled promise rejection" | 대부분 mutate를 쓰고 콜백으로 결과를 받는다. mutateAsync는 직접 catch하지 않으면 처리되지 않은 거부가 생긴다 |
| 02-05 | TanStack Query 문서: 뮤테이션의 Promise | https://tanstack.com/query/latest/docs/framework/react/guides/mutations#promises | "Use mutateAsync instead of mutate to get a promise which will resolve on success or throw on an error" | 후속 작업을 이어 붙일 때 mutateAsync로 Promise를 받는다 |
| 02-06 | TanStack Query 문서: 뮤테이션 뒤 무효화 | https://tanstack.com/query/latest/docs/framework/react/guides/invalidations-from-mutations | "use useMutation's onSuccess options and the client's invalidateQueries function" | 뮤테이션 성공 시 onSuccess에서 invalidateQueries로 관련 쿼리를 다시 맞춘다 |
| 02-06 | TkDodo: React Query 뮤테이션 정복, 직접 갱신과 무효화 | https://tkdodo.eu/blog/mastering-mutations-in-react-query#direct-updates | "Sorted lists are for example pretty hard to update directly" | 대부분 무효화를 우선하고 정렬된 목록은 직접 갱신이 어려워 목록 전체 무효화가 더 안전하다 |
| 03-01 | React 문서: TypeScript의 DOM 이벤트 타입 | https://react.dev/learn/typescript#typing-dom-events | "use the *EventHandler functions from the React types to provide the type for the event handler" | 함수를 따로 뽑으면 이벤트 타입을 직접 적어야 하고 React의 *EventHandler 타입을 쓸 수 있다 |
| 03-02 | TypeScript 핸드북: 인덱스 접근 타입 | https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html | "look up a specific property on another type" | 다른 타입의 특정 속성만 `Type["prop"]`로 가져온다 |
| 03-02 | Hyrum의 법칙 | https://www.hyrumslaw.com/ | "all observable behaviors of your system will be depended on by somebody" | 사용자가 충분히 많으면 관찰되는 모든 동작에 누군가 의존한다. 공개 범위가 넓을수록 교체 비용이 커진다 |
| 03-03 | TypeScript 위키: 교차 타입보다 인터페이스 | https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections | "Interfaces create a single flat object type that detects property conflicts" | 인터페이스 extends는 속성 충돌을 잡아 준다. 교차 타입은 조용히 병합하거나 never가 된다 |
| 03-03 | React TypeScript Cheatsheet: HTML 요소 감싸기 | https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/patterns_by_usecase/ | "Wrapping/Mirroring a HTML Element" | button의 모든 일반 프롭을 받는 래퍼는 요소의 프롭 타입을 확장한다 |
| 03-04 | React 문서: JSX 스프레드로 프롭 전달하기 | https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax | "Use spread syntax with restraint" | 스프레드는 절제해서 쓰고 모든 컴포넌트에서 쓰면 컴포넌트를 쪼개고 children으로 넘겨야 한다는 신호 |
| 04-01 | Kent C. Dodds: 합성 컴포넌트 | https://kentcdodds.com/blog/compound-components-with-react-hooks | "compound components API gives you a nice way to express relationships between components" | select와 option처럼 부모가 공유 상태를 쥐고 자식이 암묵적으로 읽는 합성 API |
| 04-01 | Kent C. Dodds: AHA 프로그래밍 | https://kentcdodds.com/blog/aha-programming | "Avoid Hasty Abstractions" | 성급한 추상화를 피하고 변경에 먼저 맞춘다. 필요한 단계까지만 올린다 |
| 04-02 | Hyrum의 법칙 | https://www.hyrumslaw.com/ | "all observable behaviors of your system will be depended on by somebody" | 내부 구조까지 공개하면 사용처가 그것에 의존해 계약으로 굳는다 |
| 04-03 | Kyle Shevlin: 여러 불리언 프롭은 코드 냄새다 | https://kyleshevlin.com/multiple-boolean-props-are-a-code-smell/ | "the existence of impossible states" | 불리언 프롭 여럿은 불가능한 조합을 만들고 컴포넌트가 그 조합을 푸는 구현 세부가 새어 나간다 |
| 04-04 | React 문서: JSX를 children으로 넘기기 | https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children | "having a “hole” that can be “filled in” by its parent components with arbitrary JSX" | children을 가진 컴포넌트는 부모가 JSX를 채워 넣는 구멍을 가진다 |
| 05-01 | eslint-plugin-react: `destructuring-assignment` 규칙의 `never` 설정 | https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md | "and below pattern is correct: const MyComponent = (props) => { return (<div id={props.id} />) }" | 구조분해 금지(`never`)를 정식 선택지로 제공하며 props.id로 읽는 꼴을 올바른 예로 든다 |
| 05-02 | React 문서: 컴포넌트 정의를 중첩하지 않는다 | https://react.dev/learn/your-first-component#nesting-and-organizing-components | "you must never nest their definitions" | 컴포넌트 안에 컴포넌트를 정의하면 매우 느리고 버그가 생긴다. 값은 프롭으로 넘긴다 |
| 05-02 | React 문서: 같은 자리의 다른 컴포넌트는 상태를 잃는다 | https://react.dev/learn/preserving-and-resetting-state#different-components-at-the-same-position-reset-state | "This is why you should not nest component function definitions" | 렌더마다 새 컴포넌트 타입이 생겨 상태가 파괴되므로 정의를 중첩하지 말라 |
| 05-03 | React 문서: 이벤트 핸들러 추가하기 | https://react.dev/learn/responding-to-events#adding-event-handlers | "By convention, it is common to name event handlers as handle followed by the event name" | 핸들러는 컴포넌트 안에 정의하고 handle로 시작하는 이름을 붙이는 관례. 인라인도 허용하므로 인라인 금지는 이 저장소의 더 엄격한 선택 |
| 05-04 | React 문서: `useImperativeHandle` | https://react.dev/reference/react/useImperativeHandle | "You should only use refs for imperative behaviors that you can’t express as props" | ref는 프롭으로 표현할 수 없는 명령형 동작(포커스, 스크롤 등)에만 쓴다 |
| 05-04 | React 19 발표: 프롭으로서의 `ref` | https://react.dev/blog/2024/12/05/react-19#ref-as-a-prop | "you can now access ref as a prop for function components" | React 19부터 함수 컴포넌트가 ref를 프롭으로 받는다. forwardRef는 폐기 예정 |
| 05-05 | React 문서: Activity로 숨긴 컴포넌트의 상태 복원 | https://react.dev/reference/react/Activity#restoring-the-state-of-hidden-components | "unmounting a component destroys its internal state, which is not always what you want" | 기본은 조건부 렌더링(언마운트)이고 Activity는 숨겼다 다시 보일 때 상태를 살리려는 경우에 쓴다 |
| 05-05 | React 문서: Activity로 숨긴 컴포넌트의 이펙트 문제 | https://react.dev/reference/react/Activity#my-hidden-components-have-unwanted-side-effects | "any side effects from that DOM will persist, even after the component is hidden" | 숨겨도 DOM이 남아 동영상 같은 동작이 계속되므로 이펙트 정리에서 직접 멈춘다 |
| 05-06 | React TypeScript Cheatsheet: 타입과 인터페이스 | https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/ | "Use Interface until You Need Type" | 프롭 타입은 type이 필요해질 때까지 interface를 쓴다 |
| 05-07 | React 문서: Fragment 목록과 `key` | https://react.dev/reference/react/Fragment#rendering-a-list-of-fragments | "Fragments declared with the explicit <Fragment> syntax may have keys" | key가 필요하면 명시적 <Fragment>만 쓸 수 있다. 단축형 금지 자체는 문서가 말하지 않는다 |
| 05-08 | React 문서: 논리 AND 연산자와 숫자 `0` 함정 | https://react.dev/learn/conditional-rendering#logical-and-operator- | "Don’t put numbers on the left side of &&" | && 왼쪽이 0이면 0이 그대로 렌더된다. 왼쪽에는 불리언 조건을 둔다 |
| 05-09 | React 문서: 훅 규칙, 조건부 반환 뒤에서 훅을 부르지 않는다 | https://react.dev/reference/rules/rules-of-hooks#only-call-hooks-at-the-top-level | "Do not call Hooks after a conditional return statement" | 이른 반환은 모든 훅 호출 뒤에 둔다. 구획 순서 자체를 다룬 문서는 없음 |
| 05-10 | Carson Gross: 행동의 지역성(Locality of Behaviour) | https://htmx.org/essays/locality-of-behaviour/ | "The behaviour of a unit of code should be as obvious as possible by looking only at that unit of code" | 코드 단위의 동작은 그 단위만 봐도 드러나야 한다. 분리는 관심사 분리와의 균형 문제 |
| 05-10 | John Carmack: 인라인 코드 | https://number-none.com/blow/john_carmack_on_inlined_code.html | "If a function is only called from a single place, consider inlining it" | 한 곳에서만 부르는 함수는 인라인을 고려하라 |
| 06-01 | TkDodo: React Query와 컴포넌트 계층의 관심사 분리 | https://tkdodo.eu/blog/react-query-as-a-state-manager#a-note-on-separation-of-concerns | "Does it make sense to split your Dashboard into a DashboardView and a DashboardContainer that passes data down? Also, probably not." | 화면을 View와 Container로 쪼개 데이터를 내려 주는 것은 대개 불필요. 쿼리를 쓰는 컴포넌트가 직접 읽고 staleTime으로 중복 요청을 줄인다 |
| 06-01 | TanStack Query 문서: 컴포넌트에서 미리 가져오기 | https://tanstack.com/query/latest/docs/framework/react/guides/prefetching#prefetch-in-components | "you can use the usePrefetchQuery or the usePrefetchInfiniteQuery hooks available in the library" | Suspense 아래 쿼리 요청이 늦어지는 폭포는 부모에서 usePrefetchQuery로 먼저 요청한다 |
| 06-02 | Sandi Metz: 잘못된 추상화 | https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction | "prefer duplication over the wrong abstraction" | 중복은 잘못된 추상화보다 훨씬 싸다 |
| 06-02 | John Carmack: 인라인 코드 | https://number-none.com/blow/john_carmack_on_inlined_code.html | "If a function is only called from a single place, consider inlining it" | 한 곳에서만 부르는 함수는 인라인을 고려하라 |
| 06-02 | React 문서: 커스텀 훅을 쓸 때 | https://react.dev/learn/reusing-logic-with-custom-hooks#when-to-use-custom-hooks | "You don’t need to extract a custom Hook for every little duplicated bit of code" | 조금 중복된 코드마다 훅을 뽑을 필요는 없고 약간의 중복은 괜찮다 |
| 06-03 | Carson Gross: 행동의 지역성(Locality of Behaviour) | https://htmx.org/essays/locality-of-behaviour/ | "The behaviour of a unit of code should be as obvious as possible by looking only at that unit of code" | 코드 단위의 동작은 그 단위만 봐도 드러나야 한다 |
| 06-03 | John Carmack: 인라인 코드 | https://number-none.com/blow/john_carmack_on_inlined_code.html | "If a function is only called from a single place, consider inlining it" | 한 곳에서만 부르는 함수는 인라인을 고려하라 |
| 06-04 | Kent C. Dodds: 코로케이션 | https://kentcdodds.com/blog/colocation | "Place code as close to where it's relevant as possible" | 관련 있는 코드는 쓰이는 자리 가까이에 둔다 |
| 06-04 | React 문서: 중복 상태 피하기 | https://react.dev/learn/choosing-the-state-structure#avoid-redundant-state | "If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state" | 프롭이나 기존 상태에서 렌더 중 계산할 수 있는 정보는 따로 상태로 두지 않는다 |

### 외부 근거 없음

- 02-01 (response/mutation 접두사로 지역 바인딩 짓기): TanStack Query 문서와 TkDodo 예제는 모두 `const {data} = useQuery(...)`, `const query = useQuery(...)`처럼 쓴다. 생성 훅 이름에서 바인딩 이름을 만드는 관례를 다룬 문서는 못 찾음. 이 저장소의 선택.
- 02-04 (응답, 스토어를 구조분해하지 않고 JSX까지 원본 이름으로 읽기): TanStack Query 문서 예제는 구조분해가 기본이다. 뒷받침 문서 없음(Render Optimizations 문서는 오히려 rest 구조분해만 경고). 이 저장소의 선택.

### 일부만 맞는 링크 (보고용 주석)

- 05-01: eslint-plugin-react가 `never`(구조분해 금지) 선택지를 공식으로 둔다는 것만 보여 준다. 출처 유지라는 이유는 문서에 없고, React 문서의 기본 관례(구조분해)와 반대다.
- 05-03: React 문서는 `handle` 이름 관례만 뒷받침한다. 인라인 화살표도 문서가 허용하므로 인라인 금지는 이 저장소의 더 엄격한 선택.
- 05-07: React 문서는 key가 필요할 때 명시적 <Fragment>가 필요하다는 것만 말한다. 단축형 금지는 문서와 반대(React 문서는 단축형이 보통이라 하고 Biome useFragmentSyntax도 단축형을 강제).
- 05-08: 숫자 0 함정만 뒷받침한다. 두 JSX 분기를 삼항 하나로 묶지 않는다는 부분은 React 문서가 삼항을 자유롭게 쓰므로 이 저장소의 선택.
- 05-09: 이른 반환을 훅 뒤에 둔다는 부분만 뒷받침한다. 훅, 핸들러, 이펙트, 반환 구획 순서를 다룬 문서는 못 찾음.
- 05-06: interface 우선만 뒷받침한다. 컴포넌트 바로 위에 선언하는 자리는 이 저장소의 선택.
- 01-01: Feature-Sliced Design은 재사용되지 않는 큰 블록을 widget이 아니라 page 안에 두라고 한다. 이 규칙의 widget은 재사용이 아니라 도메인 지식으로 가르므로 같은 방향이 아니다. Shared에는 도메인이 없다는 정의와 TkDodo의 컴포넌트 책임 논의만 근거.
- 03-02: 라이브러리 래퍼를 디자인 시스템 경계로 두는 이유를 직접 다룬 공식 문서는 못 찾음(블로그 글만 있었고 쓰지 않음). 인덱스 접근 타입(수단)과 Hyrum의 법칙(공개 범위를 좁히는 이유)만 단다.
- 03-03: 요소 전용 타입(ButtonHTMLAttributes 등)을 고르는 기준은 못 찾음. Cheatsheet는 ComponentPropsWithoutRef<'button'> 확장을 권한다.
- 04-04: children 슬롯만 뒷받침한다. 렌더 프롭을 피한다는 문장은 못 찾음.
- 06-04: 코로케이션과 렌더 중 계산 원칙으로 간접적으로만 맞는다. 화면 상단에 준비 코드로 모으지 않는다는 구체 규칙을 다룬 문서는 없음.
- 06-01: TkDodo는 프롭 전달도 문제없다고 하면서(가장 명시적) 쿼리를 쓰는 컴포넌트가 직접 읽는 쪽을 권한다. 규칙의 '프롭으로 내리지 않는다'는 더 강한 표현.

## React 07~13

링크 32개(고유 URL)를 `curl -sL`로 받아 HTTP 200과 절 앵커(id)를 확인했다. 지지 문장은 페이지 텍스트에서 확인한 것만 적었다.
산문 120칸 제한(validate)에 맞추려고 일부 링크는 절 앵커를 떼고 페이지 단위로 달았다(해당 줄에 표시).

| 규칙 | 상태 | 출처(제목 → URL) | 페이지에서 확인한 뒷받침 문장 |
| --- | --- | --- | --- |
| 07-01 Suspense 경계 위치 | 링크 | React 문서: Suspense → react.dev/reference/react/Suspense | "When a component suspends, the closest parent Suspense component shows the fallback." / "Suspense boundaries should not be more granular than the loading sequence that you want the user to experience." / 한 경계 아래는 "treated as a single unit"(함께 나타남) |
| 07-01 | 링크 | TanStack Query 문서: Suspense → tanstack.com/query/latest/docs/framework/react/guides/suspense | "status states and error objects are not needed and are then replaced by usage of the React.Suspense component" |
| 07-02 본문 초기 로딩 분기 금지 | 링크 | TanStack Query 문서: Suspense (위와 같음) | "data is guaranteed to be defined (as errors and loading states are handled by Suspense- and ErrorBoundaries)" |
| 07-02 | 링크 | React 문서: Suspense (위와 같음) | 가장 가까운 상위 경계가 fallback을 맡음 |
| 07-03 오류 경계 범위 | 링크 | React 문서: Component, 오류 경계로 렌더 오류 잡기 → react.dev/reference/react/Component (앵커 뗌) | "Error boundaries do not catch errors for: Event handlers ... Asynchronous code ...; an exception is the usage of the startTransition function returned by useTransition" |
| 07-03 | 링크 | TanStack Query 문서: Suspense와 오류 경계 → 같은 guides/suspense (앵커 뗌) | "we're only throwing errors if there is no other data to show. That means if a Query ever successfully got data in the cache, the component will render" / QueryErrorResetBoundary + ErrorBoundary `onReset={reset}` 예제 |
| 07-03 | 링크 | react-error-boundary README → github.com/bvaughn/react-error-boundary | "resetKeys: When changed, these keys will reset a triggered error boundary"; `onReset`; "Error boundaries do not catch errors from: ... Event handlers" |
| 08-01 파생값 렌더 중 계산 | 링크 | React 문서: 이펙트가 필요 없는 경우, 파생 상태 → react.dev/learn/you-might-not-need-an-effect (앵커 뗌, 절 "Updating state based on props or state") | "When something can be calculated from the existing props or state, don't put it in state. Instead, calculate it during rendering." |
| 08-01 | 링크 | React 문서: 상태 구조 정하기, 중복 상태 피하기 → react.dev/learn/choosing-the-state-structure (앵커 뗌) | "Avoid redundant state. If you can calculate some information from the component's props or its existing state variables during rendering, you should not put that information into that component's state." |
| 08-02 상태 도구 선택 | 링크 | React 문서: 컴포넌트 사이 상태 공유 → react.dev/learn/sharing-state-between-components (앵커 뗌, 절 "A single source of truth for each state") | "For each unique piece of state, you will choose the component that 'owns' it ... It doesn't mean that all state lives in one place" |
| 08-02 | 링크 | TanStack: 서버 상태 → tanstack.com/query/latest/docs/framework/react/guides/does-this-replace-client-state | "the truly globally accessible client state that is left over after migrating all of your async code to TanStack Query is usually very tiny"; "TanStack Query is not a replacement for local/client state management" |
| 08-02 | 링크 | TkDodo: React Query와 상태 관리 → tkdodo.eu/blog/react-query-as-a-state-manager | "Because React Query manages async state (or, in terms of data fetching: server state), it assumes that the frontend application doesn't 'own' the data." |
| 08-03 파생 판단 스토어 | 링크 | Redux 가이드: 상태는 최소로 → redux.js.org/style-guide/#keep-state-minimal-and-derive-additional-values | "keep the actual data in the Redux store as minimal as possible, and derive additional values from that state as needed" (Redux 문서지만 규칙의 "복제하지 않는다" 기본값과 같은 원칙) |
| 08-03 | 링크 | Redux 가이드: 상태가 있을 자리 → redux.js.org/style-guide/#evaluate-where-each-piece-of-state-should-live | `Values that are "local" should generally be kept in the nearest UI component instead.` (단일 화면 값은 스토어에 안 올림) |
| 08-04 함수형 setState | 링크 | React 문서: useState, 이전 상태로 갱신하기 → react.dev/reference/react/useState (앵커 뗌) | `setAge(age + 1)`을 세 번 부르면 43. "you may pass an updater function ... React puts your updater functions in a queue"; 심층 설명: "if you do multiple updates within the same event, updaters can be helpful" |
| 08-04 | 링크 | React 문서: 상태는 렌더마다 찍히는 스냅샷 → react.dev/learn/state-as-a-snapshot#state-over-time | "A state variable's value never changes within a render, even if its event handler's code is asynchronous." |
| 08-05 useEffectEvent | 링크 | React 문서: useEffectEvent → react.dev/reference/react/useEffectEvent | "Effect Events can only be called from inside Effects or other Effect Events. Do not call them during rendering or pass them to other components or Hooks." / "Do not use useEffectEvent to avoid specifying dependencies" / "Effect Event functions do not have a stable identity" |
| 08-05 | 링크 | React 문서: 이벤트와 이펙트 분리 → react.dev/learn/separating-events-from-effects (앵커 뗌) | "Limitations of Effect Events: Only call them from inside Effects. Never pass them to other components or Hooks." |
| 08-06 URL 상태 바인딩 이름 | 근거 없음 | - | nuqs 문서는 파서 묶음을 `coordinatesParsers`, `coordinatesSearchParams`, `searchParamsParsers`처럼 부르고 `searchParams` 낱말도 묶음에 씀(server-side, parsers 문서). 규칙의 `urlParsers`/`urlParams`/`setUrlParams`, "`searchParams`는 플랫폼 객체만" 구분은 이 저장소의 선택이다. |
| 09-01 핸들러 이름 | 링크 | React 문서: 핸들러는 handle로 시작 → react.dev/learn/responding-to-events#adding-event-handlers | "Have names that start with handle, followed by the name of the event. By convention, it is common to name event handlers as handle followed by the event name." |
| 09-01 | 링크 | React 문서: 핸들러 프롭은 on으로 시작 → react.dev/learn/responding-to-events#naming-event-handler-props | "By convention, event handler props should start with on, followed by a capital letter." (`on*`은 프롭 이름) |
| 09-02 추가 인자 커링 | 근거 없음 | - | React 문서는 "Inline event handlers are convenient for short functions"로 인라인 화살표를 권하고, "Functions passed to event handlers must be passed, not called"라고 경고한다(커링 팩토리는 JSX에서 호출함). 레거시 문서도 화살표 래퍼나 bind. 커링을 권한 공식 문서 없음. |
| 09-03 사용자 액션은 핸들러 | 링크 | React 문서: POST 요청 보내기 → react.dev/learn/you-might-not-need-an-effect#sending-a-post-request | "the /api/register POST request is not caused by the form being displayed ... It should only ever happen on that particular interaction. Delete the second Effect and move that POST request into the event handler" |
| 09-03 | 링크 | React 문서: 핸들러 간 공유 → 같은 페이지#sharing-logic-between-event-handlers | "Use Effects only for code that should run because the component was displayed to the user." (알림은 Effect가 아니라 클릭 핸들러에) |
| 10-01 방어적 메모이제이션 금지 | 링크 | React 문서: useMemo를 어디에나 쓸 필요는 없다 → react.dev/reference/react/useMemo (앵커 뗌) | "You should only rely on useMemo as a performance optimization. If your code doesn't work without it, find the underlying problem"; "Optimizing with useMemo is only valuable in a few cases: ... noticeably slow ... passed to memo ... dependency of some Hook"; "React may throw away the cached value"; 측정 요령(console.time, 1ms) |
| 10-01 | 링크 | React 문서: memo를 어디에나 쓸 필요는 없다 → react.dev/reference/react/memo (앵커 뗌) | "Optimizing with memo is only valuable when your component re-renders often with the same exact props, and its re-rendering logic is expensive." |
| 10-01 | 링크 | React 문서: React Compiler 소개 → react.dev/learn/react-compiler/introduction | "React Compiler automatically applies the equivalent of manual memoization" |
| 10-02 지연 초기화 | 링크 | React 문서: useState, 초기 상태를 다시 만들지 않기 → react.dev/reference/react/useState (앵커 뗌) | "you're still calling this function on every render. This can be wasteful ... you may pass it as an initializer function"; "React may call your initializers twice in development to verify that they are pure." |
| 10-03 지연 도구 | 링크 | React 문서: useTransition → react.dev/reference/react/useTransition (앵커 뗌) | "The function you pass to startTransition does not get delayed ... React executes your function immediately"; "Transition updates can't be used to control text inputs"; 절 "Preventing unwanted loading indicators" |
| 10-03 | 링크 | React 문서: useDeferredValue → react.dev/reference/react/useDeferredValue (앵커 뗌) | "There is no fixed delay caused by useDeferredValue itself"; "does not by itself prevent extra network requests"; "This optimization requires SlowList to be wrapped in memo"; 디바운싱과의 차이 |
| 10-03 | 링크 | TanStack Query 문서: Suspense → guides/suspense | "To prevent the UI from being replaced by a fallback during an update, wrap your updates that change the QueryKey into startTransition." |
| 11-01 접근 가능한 이름 | 링크 | WAI-ARIA APG: 접근 가능한 이름과 설명 → w3.org/WAI/ARIA/apg/practices/names-and-descriptions/ (앵커 뗌) | "Rule 2: Prefer Visible Text"; "Rule 3: Prefer Native Techniques ... such as the HTML label element for form elements" |
| 11-01 | 링크 | WCAG 2.2 이해 문서: 2.5.3 이름에 보이는 레이블 포함 → w3.org/WAI/WCAG22/Understanding/label-in-name.html | "People who operate with voice interaction use the visible labels in their commands."; SC: "the name contains the text that is presented visually" |
| 11-01 | 링크 | W3C Using ARIA: 첫 번째 규칙 → w3.org/TR/using-aria/#rule1 | "If you can use a native HTML element ... with the semantics and behavior you require already built in ... then do so." ("Just use a (native HTML) button") |
| 12-01 React 선언 헤더 상자 | 근거 없음 | - | typescript 06-02(`docs-require-header-boxes-on-key-declarations`)의 확장이라 근거는 그쪽에 있다(그 규칙에 Go 문서, Google TS 가이드가 달림). 핸들러와 `useEffect`에 상자를 요구하는 React 전용 기준을 직접 말하는 외부 문서는 없음. |
| 12-02 JSX 블록 설명 | 유지(검증 불가) | Code Complete 2판 32.5절 → stevemcconnell.com/books/ | 이미 있던 링크. URL은 200이지만 책 목록 페이지(전체 텍스트 2천 자)에 "Commenting"이나 "32.5"가 없다. O'Reilly 절 페이지(ch32s05)는 curl과 WebFetch 모두 403이라 확인 못 함. 규칙을 뒷받침하는 문장을 확인하지 못했으니 메인 세션이 판단해야 함(typescript 06-01에도 같은 링크가 있음) |
| 12-02 | 링크(추가) | Google TypeScript 스타일 가이드: 이름만 되풀이하는 주석 피하기 → google.github.io/styleguide/tsguide.html (앵커 뗌, 절 "Make comments that actually add information") | "Avoid comments that just restate the parameter name and type" (표의 "마크업이나 컴포넌트 이름 반복" 행과 같은 취지. JSX 자식 자리 금지, 상자 위치는 외부 근거 없음) |
| 13-01 Biome react 도메인 | 링크 | Biome 문서: 린터 도메인의 react 활성화와 규칙 목록 → biomejs.dev/linter/domains/#react-activation | `"domains": {"react": "recommended"}`; "Enabled when the following dependencies are declared: react: >=16.0.0"; 도메인 규칙 목록에서 noNestedComponentDefinitions, useReactFunctionComponents에는 (recommended) 표시가 없음 |
| 13-01 | 링크 | Biome: noNestedComponentDefinitions → biomejs.dev/linter/rules/no-nested-component-definitions/javascript/ | "This rule isn't recommended, so you need to enable it." / domain: react |
| 13-01 | 링크 | Biome: noCommentText → biomejs.dev/linter/rules/no-comment-text/javascript/ | "Prevent comments from being inserted as text nodes"; `<div>// comment</div>` → "Wrap comments inside children within braces" |

## TypeScript 01~03

모든 링크는 `curl -sL`로 HTTP 200과 앵커 존재를 확인했고, 아래 "확인한 문장"은 받은 페이지 본문에서 찾은 것이다.
`npm run validate -- --skill=typescript` 통과. 커밋, build, check 안 함.
validate가 `참고:` 줄도 URL 포함 120칸으로 세므로 긴 앵커 URL 넷은 앵커를 뺐다(표의 "앵커 뺌").
Google 가이드는 짧은 별칭 앵커(`#prefer-interfaces`, `#redundant-comments`, `#mapped-conditional-types`)를 썼다. 셋 다 페이지에 `<a id>`로 있다.

| 규칙 | 출처 | 확인한 문장(요지) | 맞는 정도 |
| --- | --- | --- | --- |
| 01-01 기존 계약 먼저 | TS 핸드북 Creating Types from Types | "allows expressing types in terms of other types ... succinct, maintainable" | 맞음 |
| | Sandi Metz The Wrong Abstraction | "duplication is far cheaper than the wrong abstraction" | 부분(구조가 같아도 역할이 다르면 합치지 않는 절) |
| 01-02 Pick 대신 인덱스 접근 | Google TS #mapped-conditional-types | "find references (and thus rename property refactoring) will not find properties in a Pick<T, Keys> type" | 맞음(`Pick` 검색 불가) |
| | TS 핸드북 Indexed Access Types | "look up a specific property on another type" | 맞음 |
| | TS 핸드북 Utility Types #omittype-keys | `Omit`, `Extract`, `NonNullable` 정의 | 맞음 |
| 01-03 함수 변수에 타입 | React 문서 #typing-dom-events | "use the *EventHandler functions from the React types to provide the type for the event handler at the same time as defining the callback" | 부분(예제는 `useCallback<Handler>`) |
| | TS 핸드북 More on Functions #function-type-expressions | 함수 타입 표현식 `type GreetFunction = (a: string) => void` | 부분(별칭 행) |
| 01-04 타입 문서화 | Google TS #redundant-comments | "Avoid comments that just restate the parameter name and type ... only required when they add information" | 맞음(이름에 없는 것만 적기) |
| | Google TS #document-all-top-level-exports-of-modules | "document all properties ... whose purpose is not immediately obvious from their name" | 부분(상자, 정의 목록 모양은 이 저장소 방식) |
| 01-05 밑줄 접두사 | tsconfig #noUnusedParameters | "Parameters declaration with names starting with an underscore (_) are exempt" | 부분(`_`는 맞음, 끝 매개변수도 남기는 것은 저장소 선택) |
| | Biome noUnusedFunctionParameters | "The underscore communicates that the parameter is intentionally unused" | 부분(같음) |
| 01-06 unknown 좁히기 | TS 핸드북 More on Functions #unknown | "unknown ... is safer because it's not legal to do anything with an unknown value" | 맞음 |
| | Google TS #type-and-non-nullability-assertions | "only silence the TypeScript compiler, but do not insert any runtime checks ... should not use ... without an obvious or explicit reason"; 런타임 검사가 최선, 쓰면 이유 주석 | 맞음(예외 주석 절까지) |
| 01-07 enum 대신 as const | TS 핸드북 Enums #objects-vs-enums | "you may not need an enum when an object with as const could suffice"; "keeps your codebase aligned with the state of JavaScript" | 맞음 |
| | tsconfig #erasableSyntaxOnly | enum 선언은 Node 타입 제거 실행에서 지원 안 됨 | 맞음 |
| 01-08 interface와 type | Google TS #prefer-interfaces | "when declaring types for objects, use interfaces instead of a type alias for the object literal expression"; type은 원시, 유니언, 튜플 등에 | 맞음 |
| | TS 핸드북 Everyday Types (앵커 뺌: 절 `Differences Between Type Aliases and Interfaces`) | "use interface until you need to use features from type" | 맞음 |
| 02-01 루트 constant | Kent C. Dodds Colocation | "Place code as close to where it's relevant as possible" | 맞음(한 파일 상수는 파일 위쪽) |
| | Google TS #export-visibility | "Only export symbols that are used outside of the module" | 맞음(내보내지 않기) |
| 02-02 소유자 _constant | Kent C. Dodds Colocation | 같음 | 맞음 |
| | Next.js 문서 #private-folders | "prefixing a folder with an underscore ... private implementation detail"; "Consistently organizing internal files" | 부분(`_` 표식, 프레임워크는 다름) |
| 02-03 파일, 심볼 표기 | TS 코딩 가이드라인 (wiki) | "PascalCase for type names. camelCase for function names ... property names and local variables" | 부분(snake_case 상수는 아님) |
| | Angular 스타일 가이드 #separate-words-in-file-names-with-hyphens | "a component named UserProfile has a file name user-profile.ts" | 맞음(kebab-case, 이름 일치) |
| 02-04 배럴 금지 | TkDodo Please Stop Using Barrel Files | "if you are writing app code, you're just making your life harder by putting index.ts files into arbitrary directories"; 순환 import, 개발 속도 | 맞음 |
| | Google TS #exports | "Use named exports in all code ... Do not use default exports" | 부분(저장소는 도구 요구 계약만 예외로 허용) |
| | TS 핸드북 Modules #import-type | `import type`은 타입만 가져오는 문 | 맞음 |
| 02-05 `@/` 절대경로 | Next.js 설치 문서 (앵커 뺌: 절 `Set up Absolute Imports and Module Path Aliases`) | "making it easier and cleaner to import modules ... Before '../../../components/button' After '@/components/button'" | 부분(Next.js 문서, 소유 경계 판정은 저장소 선택) |
| 02-06 config/env.ts | Vite 문서 #env-variables | "VITE_* variables should not contain sensitive information such as API keys"; VITE_ 접두사만 클라이언트에 노출 | 맞음(비밀값, 접두사 행) |
| | T3 Env 문서 core | `src/env.ts` 한 파일의 `createEnv`로 스키마 검증, 없으면 오류 | 부분(라이브러리, 스택 밖) |
| | Twelve-Factor App Config | "config is everything that is likely to vary between deploys ... strict separation of config from code" | 부분(환경마다 달라지는 값의 정의) |
| 02-07 타입 이름 | Google TS #descriptive-names | "Names must be descriptive and clear to a new reader. Do not use abbreviations that are ambiguous" | 부분(`VM` 금지 쪽) |
| | Martin Fowler Ubiquitous Language | 코드의 말을 도메인 모델의 말에 맞춤 | 부분(도메인 명사 쪽) |
| 03-01 const 화살표 | Airbnb 스타일 가이드 #functions--declarations | "Function declarations are hoisted ... too easy to reference the function before it is defined" | 부분(Airbnb는 함수 표현식, 화살표 한정 아님) |
| | MDN Arrow functions (앵커 뺌: 첫 문단) | "don't have their own bindings to this ... should not be used as methods" | 맞음(`this` 절) |
| 03-02 객체 매개변수 | Biome useMaxParams | "memorization of what each parameter is, its type, and the order"; "Consider using an options object" | 맞음 |
| | Google TS #comments-when-calling-a-function | "consider refactoring the method to instead accept an interface ... to greatly improve call-site readability" | 맞음(호출부 가독성) |
| | clang-tidy easily-swappable-parameters | "parameters of convertible types follow each other directly, making call sites prone to ... swapped arguments"; 구조체 권장 | 부분(C++ 문서, 같은 타입 이웃 행) |
| 03-03 보조 함수 | Carmack Inlined Code | "If a function is only called from a single place, consider inlining it." | 맞음 |
| | htmx Locality of Behaviour | "The behaviour of a unit of code should be as obvious as possible by looking only at that unit of code" | 맞음 |
| | Sandi Metz | 위와 같음 | 부분(식 하나는 되풀이 허용 절) |
| 03-04 함수마다 파일 | Angular #one-concept-per-file | "Prefer focusing source files on a single concept" | 부분 |
| | Angular #match-file-names-to-the-typescript-identifier-within | "Avoid overly generic file names like helpers.ts, utils.ts, or common.ts" | 맞음 |
| | Carmack Inlined Code | 한 곳에서만 부르면 인라인 | 맞음(대표 하나만 쓰는 보조) |
| 03-05 선언 순서 | TS 코딩 가이드라인 (wiki) | "Within a file, type definitions should come first." | 부분(타입 먼저만) |
| | MDN let (앵커 뺌: 절 `Temporal dead zone (TDZ)`) | "let, const, or class ... TDZ ... any attempt to access it will result in a ReferenceError" | 맞음(초기화 순서 오류) |
| 03-06 루트 util 승격 | Kent C. Dodds Colocation | 같음 | 부분 |
| | Sandi Metz | 같음 | 부분(코드 모양만 같으면 따로 갖는 행) |
| 03-07 넓은 스코프 조립 | Airbnb #references--prefer-const | "ensures that you can't reassign your references, which can lead to bugs and difficult to comprehend code" | 부분(재할당 쪽) |
| | Biome noNestedTernary | "Nesting ternary expressions can make code more difficult to understand" | 맞음 |
| 03-08 변수 이름 | Fowler Extract Variable | 긴 식을 이름 붙인 변수로 나눈 예 | 부분(페이지가 예제뿐) |
| | Fowler Inline Variable | `let basePrice = anOrder.basePrice; return (basePrice > 1000);` → `return anOrder.basePrice > 1000;` | 맞음(Incorrect 2와 같은 모양) |
| 03-09 함수 이름 | Rust API 가이드 #c-conv | "Conversions ... prefixed as_, to_, into_" | 부분(다른 언어 공식 가이드) |
| | Swift API 가이드 #omit-needless-words | "omit words that merely repeat type information" | 부분(입력 반복 금지 행) |

### 이 저장소의 선택이라 공식 문서가 반대이거나 비어 있는 곳

- 01-05: Google TS는 `_` 접두사를 지지하지만 "끝 매개변수는 생략"을 권한다. 저장소는 계약 매개변수를 모두 남긴다.
- 01-04: Google TS는 필드마다 JSDoc을 달고 주석 상자를 금지한다("Comments are not enclosed in boxes"). 저장소는 헤더 상자 하나에 정의 목록이다.
- 02-03: Google TS는 전역 상수를 CONSTANT_CASE로 쓴다. 저장소의 snake_case 상수는 뒷받침하는 문서를 못 찾았다.
- 02-05: Google TS는 같은 프로젝트 안에서 상대경로를 권한다. 저장소는 `@/`다. Next.js 문서와 같은 방향이지만 소유 경계 판정은 저장소 선택이다.
- 03-01: Google TS와 react.dev는 이름 붙은 함수에 `function` 선언을 쓴다. ESLint `func-style` 문서도 "just a preference"라 한다. `const` 화살표 통일 자체는 저장소 선택이고 근거는 `this`, 선언 순서 쪽뿐이다.
- 03-05: "내보낸 함수를 위에" 자체는 무료로 읽히는 공식 문서를 못 찾았다(Clean Code의 Stepdown Rule은 책).
- 02-07: 역할어 체계(`Params`, `Snapshot`, `Draft` 등)는 뒷받침하는 문서를 못 찾았다. 이름이 뜻을 말해야 한다는 일반 원칙만 닿는다.
- 02-01, 02-02, 03-06의 `constant/<주제>.ts`, `_function`, `util/<종류>` 폴더 구조 자체도 저장소 선택이다.

## TypeScript 04~07

모든 URL은 `curl -sL`로 HTTP 200을 확인했고, 아래 "확인한 문장"은 받은 페이지 텍스트에서 직접 찾은 것이다.
줄 폭 검사(validate의 120칸)가 URL까지 세므로 긴 MDN URL은 앵커를 뺐다(Map, Date.parse, 널 병합). 제목도 그 폭에 맞춰 줄였다.

| 규칙 | 링크 | 확인한 문장(페이지 원문 요지) |
| --- | --- | --- |
| 04-01 정렬 | MDN sort 메서드 | "sort() sorts the elements of an array in place... To sort without mutating the original array, use toSorted()". 기본 비교가 UTF-16 코드 단위 문자열 비교 |
| 04-01 | MDN toSorted 메서드 | "the copying version of the sort() method. It returns a new array" |
| 04-01 | es-toolkit orderBy | "Returns a new array sorted by multiple criteria and sort directions", `['asc','desc']` 방향 배열 |
| 04-02 Set/Map | MDN Set 객체 | 명세가 "on average, provide access times that are sublinear on the number of elements"를 요구 |
| 04-02 | MDN Map 객체 | "Objects vs. Maps": Map은 기본 키가 없고 Object는 프로토타입 키가 사용자 키와 충돌할 수 있음 |
| 04-03 구조분해 | 없음 | 아래 "외부 근거 없음" 참고 |
| 04-04 의미 있는 숫자 | Biome noMagicNumbers | "numbers used directly instead of being assigned to named constants"를 보고. 무시 목록 `0, 1, 2, 10, 24, 60`이 04-04 표와 일치 |
| 04-05 조회표 | Carson Gross, Locality of Behaviour | "The behaviour of a unit of code should be as obvious as possible by looking only at that unit of code". 방향 근거이며 조회표 자체를 다루지는 않음 |
| 04-06 es-toolkit | es-toolkit 소개 | "significantly smaller bundle size (up to 97% less) and 2-3 times faster" than lodash |
| 04-06 | es-toolkit compact | "remove falsy values (false, null, 0, -0, 0n, '', undefined, NaN)". `compact` 주의 행의 근거 |
| 04-06 | es-toolkit minBy | "It returns undefined for an empty array". 빈 목록 행의 근거 |
| 04-07 dayjs | Moment.js 프로젝트 상태 | "Moment.js is a legacy project in maintenance mode" |
| 04-07 | Day.js CustomParseFormat | `dayjs("1970-00-00", "YYYY-MM-DD", true)` 엄격 파싱 예. 같은 계열 페이지 parse/string-format에서 "Strict parsing requires that the format and input match exactly"도 확인 |
| 04-07 | MDN Date.parse | "Non-standard date strings ... implementation-specific behavior that may be inconsistent across browsers", 비표준 문자열은 보통 로컬 타임존 |
| 04-08 한 번 판정 | Alexis King, Parse, don't validate | "Get your data into the most precise representation you need as quickly as you can. Ideally, this should happen at the boundary of your system, before any of the data is acted upon." |
| 05-01 기본값 리터럴 | MDN ?? 연산자 | `||`는 falsy 전체를 대체해 `''`, `0`을 유효로 볼 때 "unexpected behaviors". 연산자 표의 근거이며 리터럴 금지 자체는 근거 없음 |
| 05-02 경계에서 채움 | nuqs 기본값 | 기본 동작이 `null`이라 "handling null values ... is annoying"이고 `.withDefault`로 파서에서 기본값을 준다 |
| 05-02 | Parse, don't validate | 04-08과 같은 문장(경계에서 정밀한 표현으로) |
| 05-03 타입이 보장하면 검사 안 함 | typescript-eslint no-unnecessary-condition | "any expression that always evaluates to truthy or always evaluates to falsy, as determined by the type of the expression, is considered unnecessary" |
| 05-03 | TypeScript tsconfig exactOptionalPropertyTypes | `?` 속성의 "생략"과 `undefined` 대입을 구분하는 옵션. 선택 필드 표의 근거 |
| 05-03 | TypeScript tsconfig noUncheckedIndexedAccess | 선언 안 된 인덱스 접근에 `undefined`를 더함. 배열 인덱스, 열린 키 행의 근거 |
| 05-04 경계에서 한 번 검사 | Parse, don't validate | 04-08과 같은 문장 |
| 06-01 본문 주석 | Google 코드 리뷰 가이드, Comments | "comments are useful when they explain why some code exists, and should not be explaining what some code is doing" |
| 06-01 | Google TypeScript 스타일 가이드, JSDoc versus comments | "Use // line comments for implementation comments, i.e. comments that only concern the implementation of the code itself" |
| 06-02 헤더 상자 | Go 문서, Doc Comments | "Every exported (capitalized) name should have a doc comment" |
| 06-02 | Google TypeScript 스타일 가이드(앵커 없음) | "Document all top-level exports of modules ... Avoid merely restating the property or parameter name" 및 "Make comments that actually add information". 형식은 JSDoc이라 이 저장소 `//` 상자와 다름 |
| 06-03 한국어 주석 | Go 문서, Rust 스타일 가이드 `#comments`, ESLint multiline-comment-style, Black | 기존 링크 유지. Go: 문서 주석은 선언 바로 위. Rust: "Prefer line comments (//) to block comments". ESLint: `separate-lines`, `checkJSDoc`. Black: "defaults to 88 characters per line". 제목만 무엇의 문서인지 드러나게 고치고 Rust에 `#comments` 추가 |
| 06-04 예외 이유 | Biome 억제 주석 | 형식 `// biome-ignore lint/...: <explanation>`. 페이지에 "필수"라는 낱말은 없음 |
| 06-04 | typescript-eslint ban-ts-comment | 설명서 첫 문장 "Disallow @ts-<directive> comments or require descriptions after directives", 권장 설정 `'ts-expect-error': 'allow-with-description'` |
| 07-01 Biome 설정 | ESLint Stylistic multiline-comment-style | 기존 링크 유지. "separate-lines: Disallows block comments in favor of consecutive line comments", `checkJSDoc` |
| 07-01 | Biome 린터 플러그인 | "GritQL, a powerful DSL to build small and expressive rules"이며 "they don't have access to ... the semantic model". "GritQL 검사 밖" 문장의 근거 |

### 바꾼 것(기존 줄)

- 06-01: `Code Complete 2판 32.5절` 링크를 뺐다. 링크 대상은 저자 사이트의 책 목록 페이지(`stevemcconnell.com/books/`)이고 주석 기법 절의 내용이 페이지에 없다. 32.5절이라는 번호도 확인할 수 없다. 사용자가 이 책을 근거로 두고 싶으면 되살리되 판매 페이지 링크라는 점이 약하다.
- 06-03: 링크 제목만 구체화, Rust 링크에 `#comments` 추가. 링크 수가 넷이라 지침의 1~3개보다 많지만 기존 줄을 유지하라는 지시에 따라 그대로 뒀다.
- 07-01: 제목에 "문서" 추가, Biome 플러그인 링크 하나 추가.

### 외부 근거 없음(이 저장소의 선택)

- 04-03 객체는 구조분해하지 않고 체인으로 읽는다. Airbnb 스타일 가이드(5.1)는 속성을 여럿 쓸 때 구조분해를 권하고, React 문서와 Google TypeScript 스타일 가이드도 구조분해를 허용하거나 쓴다. 체인 읽기를 권하는 공식 문서는 못 찾았다. 검색에서 나온 건 팀 문서와 개인 블로그뿐이라 쓰지 않았다.
- 05-01의 핵심(`??`, `||`, 기본 매개변수 오른쪽에 리터럴 금지, 이름 참조). 연산자 선택(`??` 대 `||`)만 MDN이 뒷받침한다. 리터럴 금지는 관례가 아니라 이 저장소가 정한 것이다.

### 일부만 맞는 것

- 04-05: Locality of Behaviour는 "사용처에 값과 조건을 함께 둔다"는 방향을 뒷받침하지만 조회표를 직접 다루지 않는다. 조회표를 지지하는 글(룩업 테이블이 낫다는 블로그)도 흔해서 협업에서 반론이 나올 수 있다.
- 06-02, 06-03: Google TypeScript 스타일 가이드는 `//` 여러 줄 주석을 요구하지만 "Comments are not enclosed in boxes drawn with asterisks or other characters"라고 적어 상자 주석을 하지 않는다. 그래서 06-03에는 이 문서를 달지 않았고 06-02에는 "문서화 범위"만 근거로 달았다. 상자 모양은 이 저장소의 선택이다.
- 06-03의 한국어 명사형 종결은 Go, Rust 스타일 가이드의 "완전한 문장" 권고와 반대다. 두 링크는 `//` 형태와 위치만 뒷받침한다.

## CSS

방법: 링크마다 `curl -sL`로 받아 HTTP 200, 앵커가 있으면 페이지 안에 해당 id가 있는지, 아래 "확인한 문장"이 본문에 있는지 확인했다.
최종 URL 66개를 한 번 더 일괄 검사했고 모두 200이며 앵커도 있었다.
참고: 지침의 en.bem.info는 301로 bem.info/en/ 으로 옮겨 갔고 옛 경로는 404라서 bem.info/en/ 주소를 쓴다.
validate가 산문 한 줄 120칸을 막으므로, 긴 URL은 앵커를 떼고 제목이 절 이름을 말하게 했다(해당 칸에 "앵커 뗌" 표시).

| 규칙 | 링크 제목 | 확인한 문장(요지) |
| --- | --- | --- |
| 01-01 | BEM 문서: 엔티티 이름은 유일하다 / BEM FAQ: 블록 이름을 요소와 수정자 이름에 넣는 이유 | "The name of a BEM entity is unique." / "Unique names make it easier to find entities in the code or file system." (FAQ 앵커 뗌) |
| 01-02 | BEM 문서: 대체 표기 / 접두사가 필요 없는 이유 / stylelint selector-class-pattern | Two Dashes(`block__elem--mod`)와 CamelCase 표기를 대체 표기로 나열 / "the block name itself acts as a namespace ... prefixes like b-, c-, g- aren't needed" / 클래스 선택자 패턴을 강제하는 규칙 |
| 01-03 | BEM FAQ: 수정자 이름은 의미로 / BEM 문서: 선택자 이름은 BEM 엔티티를 정확히 설명한다 | "Choose modifier names based on semantics, not on the CSS properties they describe" (`button_background_yellow` 예) / "The name of the selector must fully and accurately describe the BEM entity it represents" |
| 01-04 | BEM 문서: 이름은 유일하며 뜻을 드러낸다 / BEM FAQ: 고유한 이름은 코드와 파일에서 찾기 쉽다 | 명명 규칙의 목적은 이름에 뜻을 담는 것 / 위 FAQ의 검색 문장 (FAQ 앵커 뗌) |
| 02-01 | BEM 문서: 엔티티 이름은 유일하다 / BEM 문서: 블록마다 CSS 파일을 나눈다 | 이름 유일 문장 / CSS 절의 "Dividing code into parts": 블록 하나의 논리를 별도 파일에 둠(`button/button.css`) |
| 02-02 | MUI 문서: 중첩 요소와 상태 클래스를 덮어쓰는 방법 / stylelint selector-disallowed-list | `sx` 안에서 `& .MuiSlider-thumb`로 한 인스턴스만 덮어씀 / "Never apply styles directly to state class names. This will impact all components" / "disallow ... a library's classes ... to avoid overriding its internals" (MUI 앵커 뗌) |
| 02-03 | BEM 문서: 블록을 바꾸는 방법 고르기 / BEM FAQ: 수정자와 믹스 선택 | "Use a modifier to change one specific instance..." / "Use a mix to place one block inside another" / FAQ: 재사용되면 수정자, 특정 맥락이거나 외부 기하면 믹스 (block-modification 앵커 뗌) |
| 03-01 | clsx 문서: 조건부 className 조립 | "A tiny utility for constructing className strings conditionally", `clsx('foo', true && 'bar', 'baz')` |
| 03-02 | BEM 문서: 수정자는 블록의 모양, 상태, 동작을 정한다 / BEM FAQ: 수정자와 믹스 선택 | "BEM modifiers set the appearance, state, and behavior for blocks" / FAQ: 수정자는 재사용 가능한 구현, 믹스는 특정 맥락·외부 기하 |
| 03-03 | BEM FAQ: 수정자 클래스는 블록 클래스와 함께 붙인다 / BEM 문서: 수정자를 켜고 끄면 블록 모양이 바뀐다 | FAQ "Why not write block_mod instead of block block_mod?": 수정자만 쓰면 기본 속성을 수정자마다 복사해야 함 / "A block's design is changed by setting or removing a modifier" (FAQ 앵커 뗌) |
| 03-04 | BEM 문서: 위치는 부모 블록이 정한다 / BEM 문서: 블록 안에 블록을 둘 때 위치는 부모의 요소로 정한다 | "styles that are responsible for the external geometry and positioning are set via the parent block" / `header__logo`처럼 부모의 요소를 믹스(앵커 뗌) |
| 03-05 | BEM FAQ: 추상 래퍼 블록을 만들지 않는 이유 / BEM 문서: HTML 래퍼 대신 믹스나 요소로 배치한다 / MDN: 플렉스 아이템 | "Abstract wrappers are not necessary" / "You don't need to create additional abstract wrappers" / "the direct children of that container become flex items" (MDN 앵커 뗌) |
| 03-06 | React 문서: style은 동적 스타일에만 쓴다 / MDN: 인라인 스타일은 항상 우선한다 / MUI 문서: 동적 값은 CSS 변수로 넘긴다 | "We recommend using style only for dynamic styles where you don't know the style values ahead of time" / "Inline styles ... always overwrite any normal styles in author stylesheets" / `styled()` 동적 덮어쓰기의 CSS 변수 예(`style={vars}`) |
| 03-07 | clsx 문서 / Tailwind 문서: 클래스 이름을 동적으로 만들지 않는다 | 조건부 `cond && 'class'` 형태 / "Don't construct class names dynamically" 완성된 문자열만 인식. 근거는 스캐너라 이유는 다르고 관행(완성 문자열)만 같다 |
| 04-01 | BEM 문서: 중첩 선택자는 최소로 쓴다 / stylelint max-nesting-depth | "Nested selectors increase code coupling and make reuse impossible" / "Limit the depth of nesting" |
| 04-02 | BEM 문서: 태그 선택자와 ID 선택자를 쓰지 않는다 / BEM FAQ: 전역 태그 규칙은 블록의 독립성을 깬다 / stylelint selector-max-id | "BEM doesn't use tag and ID selectors" / "Blocks must not be affected by page-wide CSS rules" / "one ID outweighs any number of classes and makes overriding hard" |
| 04-03 | BEM 문서: 그룹 선택자는 결합도를 높인다 / Carson Gross: Locality of Behaviour | "group selectors ... tightens code coupling" / LoB가 DRY와 충돌할 때 지역성을 우선하는 판단("the further behaviour gets from the code unit, the more severe the violation") |
| 04-04 | stylelint no-duplicate-selectors / MDN: 캐스케이드의 출현 순서 | "avoid splitting a selector's declarations across two rules, which makes them harder to find" / 같은 명시도면 마지막 선언이 적용됨 (MDN 앵커 뗌) |
| 04-05 | MUI 문서: 가상 클래스와 상태 클래스 / MDN aria-disabled / MDN: :disabled | MUI: 네이티브 상태는 `:disabled` 같은 가상 클래스, 웹 표준에 없는 상태는 `.Mui-selected` / MDN: `aria-disabled`는 의미만 노출하고 "Web developers must manually ensure such elements have their functionality suppressed" / `:disabled`는 비활성 요소 |
| 04-06 | stylelint no-descending-specificity / BEM 문서: 블록 상태에 따라 요소를 바꿀 때만 중첩한다 | 낮은 명시도 선택자가 높은 선택자 뒤에 오면 안 됨 / "Nesting is appropriate if you need to change the styles of elements relative to the state of the block" |
| 04-07 | MDN: :not()의 명시도와 일치 범위 / MDN: :enabled | `:not()`은 명시도를 키우고 `html`, `body`까지 일치 / `:enabled`가 긍정 조건 |
| 05-01 | MDN: var()의 대체값이 쓰이는 조건 | 대체값은 변수가 선언 안 됨, `initial`, 계산 시점 무효일 때 쓰이고, `@property` 등록 변수의 초기값이 대신하면 쓰이지 않음 |
| 05-02 | Sandi Metz: The Wrong Abstraction / MDN: CSS 변수 | "duplication is far cheaper than the wrong abstraction" (한 파일 안 값을 변수로 떼지 않는 쪽) / "Custom properties allow a value to be defined in one place, then referenced in multiple other places" (여러 파일이 쓰는 값은 토큰) |
| 05-03 | Smashing: z-index 값에 이름 붙이기 / MDN: 쌓임 맥락 / MUI 문서: z-index 기본 층 값 | "avoid magic numbers", "Giving Z-Index Values Semantics" / 쌓임 맥락을 만드는 속성 목록(opacity, transform, fixed/sticky, 최상위 레이어 등) / MUI 기본 z-index 층 값, "Customization of individual values is discouraged" |
| 05-04 | web.dev: 다크 모드 스타일시트 구조 / MDN: color-scheme | 색을 CSS 변수로 두고 라이트/다크 파일에서만 바꿈, `:root { color-scheme: light dark }` / `color-scheme`이 스크롤바와 폼 컨트롤 색을 바꿈 |
| 05-05 | Adobe Spectrum: 쓰임을 말하는 의미 토큰 / web.dev: `--accent-color`로 쓰임을 이름에 담기 | "Rather than describing values directly, they communicate purpose, intent, structure, or application" / "rather than --highlight-yellow, consider calling the variable --accent-color, as 'yellow' may actually not be yellow in dark mode" |
| 06-01 | BEM 문서: DRY는 기능이 같은 컴포넌트에만 적용한다 / Sandi Metz: The Wrong Abstraction | "There isn't any reason to combine different types of blocks just because they have the same color or size" / 중복을 추상화로 바꾸는 비용. `@media`를 파일 아래에 모으는 부분의 근거는 아님 |
| 06-02 | MDN: 미디어 쿼리 범위 문법 / stylelint media-feature-range-notation / MUI 문서: 브레이크포인트 값 바꾸기 | `(width <= ...)`는 경계를 포함하고 `<`로 제외 / 범위 표기 규칙 / `theme.breakpoints.values`로 값 지정. 데스크톱 퍼스트는 근거 없음 |
| 06-03 | MDN: position sticky / MDN: fixed의 포함 블록 / web.dev: 늦게 뜨는 내용의 자리를 미리 잡기 | sticky는 `overflow: hidden/scroll/auto`가 있는 가장 가까운 조상에 붙음 / `fixed`도 조상에 `transform`, `filter` 등이 있으면 그 패딩 박스가 포함 블록(Containing_block 앵커 뗌) / "reserving the space ... min-height" |
| 06-04 | Every Layout: Switcher, @media 대신 flex-basis와 줄바꿈 / MDN: 컨테이너 쿼리 | "An overuse of @media breakpoints ... `flex-wrap: wrap` + `flex: 1 1 20rem` ... in no need of @media breakpoint intervention" / 컨테이너 쿼리는 뷰포트가 아니라 가장 가까운 컨테이너 크기로 스타일을 바꿈 (MDN 앵커 뗌) |
| 07-01 | MDN: :focus-visible / W3C: Understanding 2.4.13 Focus Appearance / MDN: forced-colors | 브라우저 휴리스틱으로 포커스 표시, 포커스 스타일을 없애면 키보드 사용이 불가능 / "at least as large as the area of a 2 CSS pixel thick perimeter ... contrast ratio of at least 3:1" / "box-shadow is forced to 'none'" |
| 07-02 | MDN: 같은 이름의 @keyframes / web.dev: 부록, 모든 animation과 transition을 줄이는 CSS / W3C: 2.3.3 Animation from Interactions | "If multiple keyframe sets exist for a given name, the last one encountered by the parser is used" (앵커 뗌) / `*`에 duration 1ms를 `!important`로, `animation: none`은 `animationend`에 기대는 사이트를 깨뜨림(앵커 뗌) / "Motion animation triggered by interaction can be disabled" |
| 08-01 | stylelint comment-empty-line-before / comment-no-empty / Black 문서: 줄 길이 90 안팎이 알맞다 | `ignore: ["after-comment"]` 옵션 / 빈 주석 금지 / "In general, 90-ish seems like the wise choice" (기존 줄 유지, 제목만 고침) |
| 09-01 | Stylelint 문서: 설정의 extends / stylelint-config-standard: 확장하기 / stylelint selector-disallowed-list | `extends`로 표준 설정을 확장하고 `rules`로 덮어씀 / 같은 방식 / 선택자 금지 목록 |

### 외부 근거가 없거나 일부만 맞는 규칙

- 01-01 CSS Modules 대신 일반 CSS를 기본으로: 일반 CSS를 기본값으로 권하는 공식 문서는 못 찾음. BEM이 "전역에서 유일한 이름"과 검색 가능성을 말하는 것까지만 뒷받침. CSS Modules는 같은 문제를 도구로 푸는 널리 쓰는 대안이다.
- 01-02 바깥 요소도 `__root`: BEM은 블록 클래스(`.button`)가 바깥 요소를 맡는다. `__root`는 이 저장소 선택. 낱말 이음을 camelCase로 하는 것은 BEM의 CamelCase 표기가 있으나 구분자는 `_`이고 이 저장소는 `--`를 섞는다.
- 01-03 `inner` 금지: BEM 문서는 `page__inner`를 요소 이름 예로 든다. 역할 이름(의미) 원칙만 뒷받침.
- 04-05 앱 상태는 수정자: BEM 문서는 `button_disabled`처럼 disabled도 수정자로 둔다. DOM 상태를 가상 클래스로 쓰는 쪽은 MUI와 MDN이 뒷받침하고 BEM과는 다르다.
- 06-01 `@media`를 파일 맨 아래에 모으기: 근거 없음. Sass 가이드와 CSS 중첩은 `@media`를 규칙 안에 두는 쪽이다. 링크는 같은 규칙의 "반복해도 컴포넌트를 합치지 않는다" 부분만 뒷받침.
- 06-02 데스크톱 퍼스트: MDN과 MUI는 모바일 퍼스트를 권한다. 링크는 범위 표기와 MUI breakpoints 값 설정만 뒷받침.
- 03-04 04-03 03-02 등 BEM 근거는 방법론 수준이다. 이 저장소의 CSS 변수와 clsx 조합, `variant` 프롭 같은 React 쪽 구현은 BEM이 말하지 않는다.
- 05-01 공통 토큰에는 대체값을 쓰지 않는다: 근거 없음. 링크는 대체값이 쓰이는 조건(두 번째 절)만 뒷받침.
- 03-07 Tailwind 링크는 스캐너 사정이 이유이며 "완성 문자열로 쓴다"는 관행만 같다.

### 검사

- `npm run validate -- --skill=css`: 통과("Validated css: 34 local rule files across 9 sections plus 1 companion skill(s).")
- 수정은 `skill/css/rules/*.md`의 `참고:` 줄만(111줄 추가, 3줄 교체). 본문과 예제는 그대로. 커밋, build, check 안 함.

## Testing

모든 URL은 `curl -sL`로 받아 HTTP 200을 확인했고(최종 파일에서 뽑은 고유 URL 59개 전부 200), `#anchor`는 받은 HTML에서 id 존재를 확인했다.
근거 문장은 받은 페이지 텍스트에서 직접 읽은 것이다(영어 원문 요지).
상태: 유지(기존 링크 유지, 제목만 고침) / 교체(기존 링크가 뜻이 약해 바꿈) / 신규(추가).

| 규칙 | 링크(제목) | 페이지에서 확인한 뒷받침 문장 | 상태 |
| --- | --- | --- | --- |
| 01-01 | Ham Vocke(martinfowler.com) 실용적인 테스트 피라미드 | "Write lots of small and fast unit tests. Write some more coarse-grained tests and very few high-level tests"; "Push your tests as far down the test pyramid as you can" | 교체 |
| 01-01 | Kent C. Dodds: 테스트 층별 비용과 신뢰(write-tests) | 피라미드를 오를수록 느리고 비싸지만 신뢰도가 커진다는 비용 대비 신뢰 논의 | 신규 |
| 01-01 | Vitest 문서: 브라우저 모드를 쓰는 이유 | jsdom, happy-dom은 브라우저를 흉내만 내므로 차이로 거짓 양성과 음성이 생긴다. 가장 높은 신뢰는 실제 브라우저에서 | 신규 |
| 01-01 | (제거) Playwright 모범 사례 | "Test user-visible behavior"만 말하고 경계 선택은 말하지 않음 | 제거 |
| 01-02 | Ham Vocke: 테스트 중복 피하기 | "If a higher-level test spots an error and there's no lower-level test failing, you need to write a lower-level test"; 낮은 층에서 다 확인했으면 상위 중복은 신뢰를 더하지 못함 | 신규(줄 없던 규칙) |
| 01-02 | Kent C. Dodds(write-tests) | 위로 갈수록 신뢰 계수가 커진다 | 신규 |
| 01-03 | Vitest 문서: 테스트 파일 배치 `#file-layout` | "one test file per source file ... utils.test.js right next to it", `__tests__`도 되지만 일관성이 중요 | 교체 |
| 01-03 | Vitest 문서: project별 설정과 수집 패턴 | project마다 다른 설정, inline `include` 패턴으로 수집 범위를 나눔 | 신규 |
| 01-03 | Playwright 문서: project의 testMatch와 testIgnore | "Smoke" project는 `testMatch: /.*smoke.spec.ts/`, "Default"는 `testIgnore`로 같은 파일을 제외 | 신규 |
| 01-04 | Playwright 문서: 테스트 태그 `#tag-tests` | `@fast`, `@slow`처럼 태그를 달고 태그로 거르거나 실행 | 유지(앵커 추가) |
| 01-04 | ISTQB 용어집(imbus 게시): smoke test | "A test suite that covers the main functionality of a component or system to determine whether it works properly before planned testing begins" | 신규 |
| 01-04 | Ham Vocke: 테스트 용어의 혼란 | "The software development community simply hasn't managed to settle on well-defined terms around testing" | 신규 |
| 02-01 | Software Engineering at Google 12장 `#structure_tests_to_emphasize_behaviors` | "Tests are clearest when this structure is explicit. Some frameworks like Cucumber and Spock bake in given/when/then. Other languages can use whitespace and optional comments" | 신규 |
| 02-01 | Vitest 문서: 테스트 하나에 동작 하나 `#one-behavior-per-test` | "keeping each test focused on one behavior"; 구간 주석은 필수가 아님("You don't need comments labeling each section") | 신규 |
| 02-01 | Cucumber 문서: Gherkin | Given은 초기 맥락, When은 사건이나 행동, Then은 관찰 가능한 출력의 기대 결과 | 유지 |
| 02-02 | Vitest 문서: 경계값과 오류 경로 `#testing-edge-cases` | "Focus on the boundaries (0, 150, 151, -1), the error paths ... You don't need to test every possible input" | 유지(앵커 추가) |
| 02-03 | Google Testing Blog: Don't Put Logic in Tests | "Tests can avoid complexity by stating their inputs and outputs directly rather than computing them"; 계산한 기대값이 프로덕션과 같은 버그를 가리면 잘못 통과 | 신규 |
| 02-03 | Vitest 문서: 계약 기준 `#what-to-test` | 계약(입력과 출력)에서 시작하고 출력만 확인 | 유지(앵커 추가) |
| 03-01 | Software Engineering at Google `#make_your_tests_complete_and_concise` | 본문에 읽는 사람에게 필요한 정보가 다 있어야 완결, 무관한 정보가 없어야 간결 | 교체 |
| 03-01 | TypeScript 4.9 릴리스 노트 `#the-satisfies-operator` | `satisfies`는 식의 타입이 맞는지 검증하되 결과 타입은 그대로 | 신규 |
| 03-01 | Kubb 문서: Faker 플러그인 | 생성 factory가 덮어쓰기를 받음(`createOrder({ quantity: 2, complete: true })`), `typeMode: 'schema'`는 `Partial<Model>` | 기존 06-04 링크 재사용 |
| 03-01 | (제거) Vitest Testing in Practice | fixture 작성 얘기가 없음 | 제거 |
| 03-02 | Playwright 문서: clock | "recommended approach is to use setFixedTime"; `install`로 `fastForward`, `runFor` | 유지 |
| 03-02 | Vitest 문서: 날짜 mock | `beforeEach`에서 `useFakeTimers`, `afterEach`에서 `useRealTimers`("restoring date after each test run") | 신규 |
| 03-02 | Martin Fowler: Eradicating Non-Determinism | "always wrap the system clock with routines that can be replaced with a seeded value"; 시계 stub은 테스트마다 다시 초기화 | 신규 |
| 03-03 | Playwright 문서: browser contexts | 테스트마다 로컬 저장소, 세션 저장소, 쿠키가 따로 있는 context를 만든다 | 유지 |
| 03-03 | Vitest 문서: Mock API | `mockClear`는 구현을 초기화하지 않고, `mockRestore`는 spy 대상의 원본을 복구 | 신규 |
| 03-03 | Vitest 문서: restoreMocks 설정 | 켜면 매 테스트 전에 `vi.restoreAllMocks()` 자동 호출 | 신규 |
| 04-01 | Vitest 문서: 비동기 코드 테스트 | "Don't forget the await before expect"; 콜백 안 단언은 실행되지 않아도 통과할 수 있다 | 유지 |
| 04-01 | Vitest 문서: expect API `#tostrictequal` | `toBe`는 원시값과 같은 참조, `toStrictEqual`은 구조와 타입과 undefined 키, `toThrow`는 함수로 감싸기, `rejects`는 resolve되면 실패 | 신규 |
| 04-02 | Vitest 문서: What Not to Mock `#what-not-to-mock` | "Don't mock the thing you're testing ... Mock its dependencies" | 교체(기존은 일반 mocking 가이드) |
| 04-02 | Software Engineering at Google `#test_statecomma_not_interactions` | 상호작용 테스트가 상태 테스트보다 깨지기 쉽다. 결과가 아니라 도달 경로를 검사하기 때문 | 신규 |
| 04-02 | Vitest 문서: vi.mock API `#vi-mock` | `mock<T>(module: Promise<T>, factory?: MockFactory<T>)` 시그니처, 즉 `vi.mock(import(...))` 형태 | 유지(앵커 추가) |
| 05-01 | Playwright 문서: locators | getByRole은 사용자와 보조기술이 보는 방식, nth/last는 "use this method with caution", test id는 user facing이 아님 | 유지 |
| 05-01 | Testing Library 문서: 쿼리 우선순위 `#priority` | getByRole 우선, getByTestId는 "only recommended for cases where you can't match by role or text" | 신규 |
| 05-01 | Testing Library 문서: 지도 원칙 | "The more your tests resemble the way your software is used, the more confidence they can give you" | 신규 |
| 05-02 | Playwright 문서: web-first 단언 | "Playwright will wait until the expected condition is met"; "Don't use manual assertions that are not awaiting the expect" | 유지 |
| 05-02 | Playwright 문서: events `#waiting-for-event` | "Start waiting for popup before clicking", 요청도 goto 전에 대기 시작 | 신규 |
| 05-02 | Martin Fowler: Eradicating Non-Determinism | "The common mistake here is to throw in a sleep" | 신규 |
| 05-03 | Playwright 문서: fixtures | fixture는 setup과 teardown을 한곳에 묶고 파일 사이에 재사용. worker 범위 fixture 설명 | 유지 |
| 05-03 | Playwright 문서: page object model | "Page objects ... simplify maintenance by capturing element selectors in one place" (큰 스위트 대상) | 신규 |
| 05-03 | Software Engineering at Google `#shared_helpers_and_validation` | 공통 단언을 하는 helper는 동작 중심이 아니게 되는 나쁜 습관 | 신규 |
| 05-04 | Playwright 문서: 인증 `#basic-shared-account-in-all-tests` | "Authenticate once in the setup project, save the authentication state, and then reuse it" | 신규 |
| 05-04 | Playwright 문서: 사용자가 보는 동작 `#test-user-visible-behavior` | 최종 사용자에게 동작하는지 검증하고 구현 세부에 기대지 않음 | 유지(앵커 추가) |
| 06-01 | MSW 문서: Avoid request assertions | "We strongly discourage such assertions as they represent implementation detail testing"; 요청 검증은 handler가 오류 응답을 돌려주게 | 유지(옛 `/docs/best-practices/...`가 리다이렉트라 정식 URL로) |
| 06-01 | Playwright 문서: 네트워크 `#missing-network-events-and-service-workers` | MSW의 service worker가 요청을 가로채 `page.route`에 안 보인다. `serviceWorkers: 'block'` | 유지(앵커 추가) |
| 06-01 | Kent C. Dodds: Stop mocking fetch | "create a mock server that intercepts all requests and handle it just like you would if it were a real server" | 신규 |
| 06-02 | MSW 문서: listen() `onUnhandledFrame` | 기본 "warn", "error"는 프레임을 멈춤, 함수형은 `{ frame, defaults }` | 유지(옛 `/docs/api/...`가 리다이렉트라 정식 URL로) |
| 06-02 | MSW 문서: Avoid request assertions `#unhandled-requests` | "use the onUnhandledFrame option ... error" | 신규 |
| 06-03 | Playwright 문서: API mock `#mock-api-requests` | "No requests to the API will be made", 목 데이터로만 채워짐 | 교체(기존은 앵커 없는 mock 페이지) |
| 06-03 | MSW 문서: Preventing mock drift | mock은 시점이 고정된 서버 동작이라 낡을 수 있다. 명세를 진실로 삼음 | 신규. 부분 일치: "타입 일치와 런타임 일치를 따로" 문장 자체는 없음 |
| 06-04 | Kubb 문서: MSW 플러그인 옵션 | `handlers`, `parser: 'faker'`(데이터가 없으면 faker 값으로 대체) | 유지 |
| 06-04 | Kubb 문서: Faker 플러그인 옵션 | factory의 덮어쓰기와 `typeMode` | 유지 |
| 06-04 | MSW 문서: Structuring handlers | 정상 경로는 `handlers` 모듈 한 곳, 오류 등은 `server.use`로 테스트에서 덮음 | 신규 |
| 06-05 | MSW 문서: getResponse | "Resolve a request against request handlers programmatically" | 유지 |
| 06-05 | Playwright 문서: 네트워크 service worker | 06-01과 같음 | 유지(앵커 추가) |
| 06-05 | Playwright 문서: response.headerValue `#response-header-value` | `set-cookie`는 `\n` 구분자를 씀 | 유지 |
| 07-01 | Vitest 문서: snapshot | "The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process" | 유지 |
| 07-01 | Kent C. Dodds: Effective Snapshot Testing | "avoid huge snapshots and take smaller, more focused ones"; 더 명시적인 단언으로 바꿀 수 있는지 본다 | 신규 |
| 07-02 | Playwright 문서: 시각 비교 | "For consistent screenshots, run tests in the same environment where the baseline screenshots were generated"; 브라우저와 플랫폼마다 기준 이미지가 다름 | 신규 |
| 07-02 | Playwright 문서: testConfig `#test-config-expect` | `toHaveScreenshot`과 `toMatchSnapshot`이 각각 별도 옵션 객체(`maxDiffPixels` 등) | 유지 |
| 08-01 | Vitest 문서: 버그를 테스트로 재현 `#fixing-bugs-with-tests` | "write a failing test first that reproduces the bug, then fix the code and watch the test turn green" | 유지(앵커 추가) |
| 08-02 | Playwright 문서: 재시도 `#retries` | "passed", "flaky"(첫 실행 실패 후 재시도 통과), "failed"로 분류 | 유지(앵커 추가) |
| 08-02 | Martin Fowler: TestCoverage | "Test coverage is of little use as a numeric statement of how good your tests are" | 신규 |
| 08-02 | Martin Fowler: Eradicating Non-Determinism | 비결정적 테스트는 격리(quarantine)하되 빨리 고쳐야 한다. 방치하면 회귀 탐지가 침식 | 신규 |
| 09-01 | Playwright 문서: 컴포넌트 테스트 `#how-it-works` | "A story is a tiny wrapper component ... hard-coded props, mock data, providers, recorded callbacks"; gallery는 `window.mount`와 `window.unmount` | 유지(앵커 추가) |
| 09-01 | Testing Library 문서: custom render `#custom-render` | 전역 context provider, 저장소를 포함하는 custom render를 `wrapper` 옵션으로 | 신규 |
| 09-02 | Playwright 문서: 컴포넌트 테스트 | "A component test is a regular Playwright end-to-end test that runs against a small story gallery page"; `mount()` fixture가 구동 | 유지 |

### 안 쓴 후보
- Nat Pryce "Test Data Builders": 03-01의 기본값 생성기 논거와 맞지만 HTTPS가 안 되고 `http://www.natpryce.com/...`만 열려서 뺐다.
- Kent C. Dodds "Testing Implementation Details"(받아서 확인함): 06-01, 04-02에 달 수 있었으나 MSW와 SWE 12장이 더 직접적이라 뺐다.
- ISTQB "sanity test": imbus가 게시한 용어집 3.4판에서 "See smoke test"(동의어). 01-04의 smoke와 sanity 구분의 근거가 못 된다.

## Figma, Blueprint

링크 단 규칙 28개(figma 11, blueprint 17), 못 단 규칙 13개(figma 5, blueprint 8). 총 41개.
모든 URL은 `curl -sL`로 HTTP 200을 받았고, 아래 "뒷받침 문장"은 받은 페이지 본문에서 그대로 찾았다.
`#anchor`는 받은 HTML의 `id`로 확인했다.

### figma

| 규칙 | 단 링크 | 페이지에서 확인한 뒷받침 문장 |
| --- | --- | --- |
| 01-01 start-with-screenshot-and-metadata | Figma 문서 "큰 프레임은 피하기"(avoid-large-frames), Figma: get_metadata(tools-and-prompts#get_metadata) | "your agent can use get_metadata to get a lightweight outline first, then get design context for only the parts it needs". get_metadata는 "layer IDs, names, types, positions, and sizes"만 주는 가벼운 XML이고 "get_design_context returns too much at once"인 큰 디자인에 쓴다 |
| 01-02 choose-the-node-each-tool-reads | Figma: get_metadata | "Without a node ID, get_metadata returns a list of the file's top-level pages" (URL 읽기 표의 node-id 없음 행과 같음) |
| 01-03 call-design-context-only-on-small-unmatched-nodes | 큰 프레임은 피하기, Figma 문서 "Code Connect 연동" | "Generate code for smaller sections or individual components, like a card, header, or sidebar". Code Connect가 연결된 컴포넌트는 "helps your agent generate code that uses your actual components" |
| 01-04 take-copy-from-the-render-not-layer-names | Figma: get_metadata | metadata가 싣는 것은 "layer IDs, names, types, positions, and sizes"뿐이다(글자 내용 없음). 일부만 맞음 |
| 01-05 collect-hidden-layers-and-annotations | Figma 도움말 "측정값과 주석"(help 20774752502935), Figma 문서 "코드를 위한 파일 구조" | "Designers can add annotations to provide context, define design properties, or communicate other relevant information for developers". "Add annotations to explain things that are hard to show visually, like how an element should behave, align, or respond" |
| 02-03 treat-frame-sizes-and-sample-text-as-samples | 코드를 위한 파일 구조 | "Auto layout shows how your design should respond to different sizes and avoids absolute positioning". 일부만 맞음(고정 폭을 최소 폭 후보로 읽는 부분은 이 저장소의 해석) |
| 03-01 map-figma-values-to-project-tokens | Figma 문서 "사용자 지정 규칙"(add-custom-rules#output-rules), Figma: get_variable_defs | "Use the project's color system, typography scale, and spacing tokens consistently", "Reuse the project's color tokens, components, and typography wherever possible". get_variable_defs는 "variables and styles used in your selection, such as colors, spacing, and typography"를 준다 |
| 04-01 reuse-project-components-before-new-markup | 사용자 지정 규칙(#output-rules), Code Connect 연동 | "Reuse existing components (e.g., buttons, inputs, typography, icon wrappers) instead of duplicating functionality". 일반 규칙에 "Always use components from `/path_to_your_design_system` when possible" |
| 04-02 do-not-copy-layer-structure | 사용자 지정 규칙(#output-rules), 코드를 위한 파일 구조 | "Treat the Figma MCP output (React + Tailwind) as a representation of design and behavior, not as final code style", "Replace Tailwind utility classes with the project's preferred utilities/design-system tokens". auto layout은 absolute 배치를 피해 더 깨끗한 코드로 이어진다 |
| 04-03 use-existing-icons-or-downloaded-assets | Figma: download_assets | "It returns temporary URLs your agent uses to fetch the files". "Use download_assets when your agent needs to deliver an asset". 아이콘 세트 우선 부분은 이 저장소의 선택 |
| 05-01 measure-rendered-values-before-claiming-parity | 사용자 지정 규칙(#output-rules), MDN getComputedStyle, MDN getBoundingClientRect | "Validate the final UI against the Figma screenshot for both look and behavior". MDN: getComputedStyle은 "resolved values of all CSS properties of an element"를 준다. 수치 판정 어휘(PASS, DRIFT 등)는 Figma 문서에 없고 규칙 본문이 밝힌 외부 출처(design-fidelity-verify)다 |

#### 외부 근거 없음(figma)

- 02-01 ask-when-ux-notes-and-gui-disagree: Figma 문서에 메모와 화면이 어긋날 때의 처리 지침이 없다. 이 저장소의 선택.
- 02-02 fill-undrawn-states-with-project-parts: 그려지지 않은 상태를 프로젝트 부품으로 채우라는 문서가 없다. 이 저장소의 선택.
- 02-04 implement-interactions-the-design-implies: 아이콘이 암시하는 동작을 구현하라는 문서가 없다. 구조 문서는 동작을 주석으로 적으라고만 한다. 이 저장소의 선택.
- 03-02 separate-static-copy-from-server-data: 해당 문서 없음.
- 05-02 report-reads-decisions-and-gaps: 보고 형식 문서 없음.

### blueprint

| 규칙 | 단 링크 | 페이지에서 확인한 뒷받침 문장 |
| --- | --- | --- |
| 01-04 confirm-response-shapes-with-captures | Martin Fowler "Contract Test" | "testing against a double always raises the question of whether the double is indeed an accurate representation of the external service". 실제 서비스와 대조하는 별도 검사를 둔다 |
| 02-01 keep-cards-in-the-screen-doc | Michael Nygard "아키텍처 결정 문서화" | "ADRs will be numbered sequentially and monotonically. Numbers will not be reused." (번호는 지워도 다시 쓰지 않는다) |
| 02-02 write-cards-with-options-and-one-pick | MADR 템플릿, Design Docs at Google#alternatives-considered | MADR 템플릿에 "Considered Options"와 `Chosen option: "...", because {justification}`. Google: 대안 절은 "shows very explicitly why the selected solution is the best" |
| 02-05 close-cards-in-place-with-the-result | Nygard, MADR | Nygard: "If a decision is reversed, we will keep the old one around, but mark it as superseded". Status는 proposed, accepted, deprecated, superseded. MADR는 status와 `date: {YYYY-MM-DD when the decision was last updated}` 필드 |
| 03-01 keep-five-document-kinds | Design Docs at Google(구현과 반복 절), Google 문서 가이드 | Google: 변경을 새 문서로 떼어 놓으면 "a bunch of amendments rather than one consistent piece of documentation"이 된다. 가이드: "A small set of fresh and accurate docs is better than a large assembly of 'documentation' in various states of disrepair" |
| 03-02 order-screen-docs-for-two-readers | NN/g "역피라미드 글쓰기", Write the Docs 원칙(#skimmable) | NN/g: "Each heading or subheading should be descriptive", 읽는 양과 상관없이 요점을 먼저. WtD: "Headings — should be descriptive and concise", "Paragraphs and list items — should begin with identifiable concepts as early as possible" |
| 03-03 keep-code-owned-values-out | Design Docs at Google#apis, Write the Docs 원칙(#unique) | Google: "withstand the temptation to copy-paste formal interface or data definitions into the doc as these are often verbose... and quickly get out of date". WtD: "Eliminate content overlap between separate sources" |
| 03-04 keep-the-body-current-and-log-changes-apart | Design Docs at Google(구현과 반복 절), Write the Docs 원칙(#current) | Google: 갱신을 새 문서로 떼면 "US constitution with a bunch of amendments rather than one consistent piece of documentation". WtD: "Consider incorrect documentation to be worse than missing documentation" |
| 03-05 write-overview-as-the-project-map | Google 문서 가이드, Write the Docs 원칙(#unique) | 가이드 "Duplication is Evil": "Do not write your own guide to a common Google technology or process. Link to it instead." (규약은 베끼지 않고 skill 이름으로 가리킴) |
| 03-06 define-shared-behavior-once | Write the Docs 원칙(#unique), Google 문서 가이드 | WtD: 같은 정보를 여러 곳에서 "parallel maintenance"하지 않게 한다. 가이드: 중복 대신 링크 |
| 04-01 use-noun-phrases-one-fact-per-line | Write the Docs 원칙(#skimmable), NN/g "웹에서 읽는 방식" | NN/g: "one idea per paragraph", "bulleted lists", "half the word count (or less) than conventional writing". WtD: "Burying concepts in prose and verbiage demands more time from readers" |
| 04-03 cite-at-the-end-and-link-figma-nodes | Write the Docs 원칙(#skimmable), Google 개발자 스타일 가이드(#descriptive-link-text) | WtD: "Hyperlinks — should surround words that describe the link itself". Google: "use short, unique, descriptive phrases that provide context for the material that you're linking to". 노드 번호를 본문 밖에 두는 부분은 이 저장소의 선택 |
| 04-04 draw-flows-with-mermaid-and-trees-as-text | Mermaid 문서 소개(#about-mermaid) | "The main purpose of Mermaid is to help documentation catch up with development." "Doc-Rot is a Catch-22 that Mermaid helps to solve." 일부만 맞음(한글 ASCII 상자 금지는 이 저장소의 경험) |
| 05-01 split-work-into-gated-stages | Scrum Guide 완료의 정의 | "Work cannot be considered part of an Increment unless it meets the Definition of Done." 단계마다 Check 명령 하나를 두는 것과 같은 취지 |
| 05-02 report-done-with-the-check-command | Scrum Guide 완료의 정의, Google 문서 가이드 | Scrum: DoD를 만족해야 완료. 가이드 "Update Docs with Code": "Change your documentation in the same CL as the code change" (보고와 문서 갱신을 같은 턴에) |
| 05-03 derive-checks-from-state-tables | Martin Fowler "Given When Then", "Specification By Example" | "Given-When-Then is a style of representing tests - or as its advocates would say - specifying a system's behavior using SpecificationByExample". 예제를 명세이자 검사로 쓰는 것과 같은 취지 |
| 06-01 build-the-site-before-handing-over | Write the Docs "코드로서의 문서" | "writing documentation with the same tools as code: Issue Trackers, Version Control (Git), Plain Text Markup, Code Reviews, Automated Tests" |

#### 외부 근거 없음(blueprint)

- 01-01 build-the-truth-table-first: 재료별 정답표를 정하라는 문서가 없다. 이 저장소의 선택.
- 01-02 compare-sources-item-by-item: 해당 문서 없음.
- 01-03 read-figma-as-ux-not-pixels: 기획 Figma를 UX 안으로만 읽고 안쪽 치수는 프로젝트 기본값에 맡긴다는 관례 문서가 없다. 이 저장소의 선택.
- 02-03 filter-what-needs-another-person: 질문을 FE 코드 줄 수로 거르는 문서가 없다. 이 저장소의 선택.
- 02-04 give-be-cards-a-figure: 해당 문서 없음.
- 04-02 label-in-english-and-explain-in-korean: 해당 문서 없음.
- 04-05 show-regions-as-marked-figma-figures: 해당 문서 없음.
- 06-02 diff-facts-when-restyling-or-moving: 해당 문서 없음(docs-as-code가 git 사용을 말하지만 사실 대조와는 거리가 멀어 달지 않음).

### 규칙이 외부 관례와 다른 곳(리뷰어에게 알릴 것)

1. figma 01-01, 01-03 호출 순서: Figma 문서의 샘플 규칙("Required flow")은 `get_design_context`를 먼저 부르고, 응답이 크거나 잘릴 때만 `get_metadata`로 물러난다. 이 저장소는 metadata, screenshot을 먼저 하고 design_context는 대응물 없는 작은 노드에만 부른다. 큰 디자인에서 outline을 먼저 쓰라는 부분만 Figma 문서가 뒷받침한다.
2. blueprint 04-01 개조식: Nygard는 ADR을 완전한 문장으로 쓰고 글머리는 "only for visual style, not as an excuse for writing sentence fragments"라고 한다. 이 저장소는 명사구 한 줄 한 사실이다. 훑어보기 쪽 문서(WtD, NN/g)는 뒷받침하지만 Nygard와는 반대다.
3. blueprint 03-01, 03-04 구현 뒤의 문서: Google 문서 가이드는 구현이 끝나면 설계 문서가 "archives of these decisions, not as half-correct docs" 역할을 한다고 한다. 이 저장소는 화면 문서를 구현 뒤에도 "지금의 정답"으로 고쳐 쓴다. Google 설계 문서 글은 출시 전에는 문서를 갱신하라고 하므로 그 부분과 갱신을 새 문서로 떼면 안 된다는 점만 단다.
4. figma 04-03 아이콘: Figma 샘플 에셋 규칙은 "DO NOT import/add new icon packages, all the assets should be in the Figma payload"(데스크톱 localhost 에셋 전제)다. 이 저장소는 프로젝트 아이콘 세트를 먼저 쓴다. 그 문장은 달지 않았다.
5. figma 03-01 토큰: Figma 일반 규칙 "use design tokens from Figma where available"은 Figma 변수를 뜻한다. 이 저장소는 프로젝트 토큰으로 옮긴다. 같은 문서의 "Use the project's ... tokens" 문장만 근거로 달았다.
6. blueprint 전체: Write the Docs #precursory("Begin documenting before you begin developing... documentation driven design")가 설계 문서를 구현 전에 쓰는 스킬 전체의 근거로 쓸 만하나 개별 규칙에는 달지 않았다(SKILL.md나 README에 달면 좋음).

### 줄 형식 메모

- validate가 한 줄 120칸을 센다(한글 2칸, URL 포함). 링크 하나가 120칸을 넘으면 쉼표 뒤로 나눌 수 없어 제목을 줄이거나 `#anchor`를 뺐다.
- Google 문서 가이드(best_practices.html)와 Design Docs at Google의 "구현 중 갱신"은 URL이 길어 anchor를 뺐다(앞의 글은 짧은 한 페이지, 뒤의 글은 제목에 주제를 적음). 해당 위치: 뒤의 글은 "Implementation and iteration" 절(#implementation-and-iteration, id 확인함).
- 도구 anchor 링크 제목은 "Figma: get_metadata"처럼 줄였다.
