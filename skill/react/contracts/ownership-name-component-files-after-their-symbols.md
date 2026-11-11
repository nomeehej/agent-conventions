# Name Component Files After Their Symbols

**Impact: MEDIUM (파일 이름, 심볼, CSS 블록 이름이 한 이름으로 이어집니다)**

파일 이름은 내보내는 컴포넌트 이름을 kebab-case로 옮겨 씁니다.
레이어는 폴더로 드러나므로 파일 이름과 심볼에 `ui-`, `Wg` 같은 레이어 접두사를 붙이지 않습니다.
레이어 판정은 `ownership-layer-component-boundaries`를 따릅니다.

### 이름 형태

| 대상             | 파일                                            | 심볼                  | CSS 블록 이름         |
|------------------|-------------------------------------------------|-----------------------|-----------------------|
| `ui`             | `component/ui/button/button.tsx`                | `Button`              | `button`              |
| `widget`         | `component/widget/chart-card/chart-card.tsx`    | `ChartCard`           | `chartCard`           |
| 화면             | `page/orders/orders-page.tsx`                   | `OrdersPage`          | `ordersPage`          |
| 화면 안 컴포넌트 | `page/product-detail/product-table-section.tsx` | `ProductTableSection` | `productTableSection` |
| `Outlet` 프레임  | `page/(main)/main-outlet.tsx`                   | `MainOutlet`          | `mainOutlet`          |

`Page`는 라우터가 연결하는 화면 진입에만 붙이고 화면 폴더의 다른 컴포넌트에는 붙이지 않습니다.

| 대상                    | 표기                                                                                               |
|-------------------------|----------------------------------------------------------------------------------------------------|
| 파일, 심볼              | 진입 파일 여부와 관계없이 `_`를 붙이지 않습니다. 동반 `.css`도 컴포넌트 파일과 같은 이름을 씁니다  |
| 라이브러리와 같은 이름  | 라이브러리 쪽을 `import {Button as MuiButton}`처럼 라이브러리 이름을 앞에 붙인 별칭으로 가져옵니다 |
| 데이터 타입과 같은 이름 | 컴포넌트 쪽에 역할 낱말을 더해 `ProductSummarySection`처럼 짓습니다                                |

### 진입 파일이 아닌 컴포넌트의 이름

폴더 안의 다른 컴포넌트는 이름만 보고 무엇인지 알 수 있게 짓습니다.

| 이름               | 예                                                   |
|--------------------|------------------------------------------------------|
| 역할 낱말 하나만   | `header`, `item`, `panel`은 안 됨                    |
| 무엇의 것인지 앞에 | `table-col`, `chat-message`, `disruptor-guide-modal` |

소유자 이름을 앞에 붙이는 것은 뜻을 만드는 방법 중 하나이며 필수가 아닙니다.
진입 파일의 기준은 `ownership-place-owner-files-in-role-folders`를 따릅니다.

참고: [Angular 스타일 가이드: 파일 이름은 안의 식별자를
따른다](https://angular.dev/style-guide#match-file-names-to-the-typescript-identifier-within).

**Incorrect 1 (심볼이 파일 이름과 다릅니다):**

```tsx
// page/product-detail/product-table-section.tsx
export const ProductTable = (props: ProductTableProps) => {
	return <section className={clsx("productTableSection__root")}>{props.children}</section>;
};
```

**Correct 1 (심볼을 파일 이름과 맞춥니다):**

```tsx
// page/product-detail/product-table-section.tsx
export const ProductTableSection = (props: ProductTableSectionProps) => {
	return <section className={clsx("productTableSection__root")}>{props.children}</section>;
};
```

> 나머지 예시와 예외는 [full rule](../rules/01-02-ownership-name-component-files-after-their-symbols.md)에 있습니다.
