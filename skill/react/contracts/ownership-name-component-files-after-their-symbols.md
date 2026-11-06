# Name Component Files After Their Symbols

**Impact: MEDIUM (파일 이름, 심볼, CSS 식별자가 한 이름으로 이어집니다)**

파일 이름은 내보내는 컴포넌트 이름을 kebab-case로 옮겨 씁니다.
레이어는 폴더가 드러내므로 파일 이름과 심볼에 `ui-`, `Wg` 같은 레이어 접두사를 붙이지 않습니다.
레이어 판정은 `ownership-layer-component-boundaries`를 따릅니다.

### 이름 형태

| 대상          | 파일                                         | 심볼         | CSS 식별자   |
|---------------|----------------------------------------------|--------------|--------------|
| `ui`          | `component/ui/button/button.tsx`             | `Button`     | `button`     |
| `widget`      | `component/widget/chart-card/chart-card.tsx` | `ChartCard`  | `chartCard`  |
| 화면 진입     | `page/orders/orders-page.tsx`                | `OrdersPage` | `ordersPage` |
| 라우트 프레임 | `page/(main)/main-outlet.tsx`                | `MainOutlet` | `mainOutlet` |

| 대상                      | 표기                                                                                |
|---------------------------|-------------------------------------------------------------------------------------|
| 진입 파일이 아닌 컴포넌트 | `_unit-toggle.tsx`처럼 앞에 `_`를 붙입니다. 동반 `.css`도 같은 이름을 씁니다        |
| 심볼                      | 진입 파일 여부와 관계없이 `_`를 붙이지 않습니다                                     |
| 라이브러리와 같은 이름    | 라이브러리 쪽을 `import {Button as MuiButton}`처럼 `Mui` 별칭으로 바꿔 가져옵니다   |

### 부품 이름 짓기

부품과 하위 소유자는 이름만 보고 무엇인지 알 수 있게 짓습니다.

| 부품 이름          | 예                                                   |
|--------------------|------------------------------------------------------|
| 역할 낱말 하나만   | `header`, `item`, `panel`은 안 됨                    |
| 무엇의 것인지 앞에 | `table-col`, `chat-message`, `disruptor-guide-modal` |
| 소유자 이름        | 필수가 아니라 방법 하나                              |

진입 파일의 기준은 `ownership-place-owner-files-in-role-folders`를 따릅니다.

**Incorrect 1 (진입 파일이 아닌 부품에 `_`가 없고 심볼이 파일 이름과 다릅니다):**

```tsx
// page/product-detail/product-table-section.tsx
export const ProductTable = (props: ProductTableProps) => {
	return <section className={clsx("productTableSection__root")}>{props.children}</section>;
};
```

**Correct 1 (부품 파일에 `_`를 붙이고 심볼을 파일 이름과 맞춥니다):**

```tsx
// page/product-detail/_product-table-section.tsx
export const ProductTableSection = (props: ProductTableSectionProps) => {
	return <section className={clsx("productTableSection__root")}>{props.children}</section>;
};
```

> 나머지 예시와 예외는 [full rule](../rules/01-02-ownership-name-component-files-after-their-symbols.md)에 있습니다.
