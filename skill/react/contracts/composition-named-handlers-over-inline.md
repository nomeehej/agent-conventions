# Use Named Handlers Instead of Hiding Logic in JSX

**Impact: MEDIUM (부수효과, 분기, 비동기 흐름을 일반 코드 흐름에서 읽습니다)**

JSX 이벤트 프롭에는 이름 붙인 핸들러 참조만 넘깁니다.
`(_event) => setIsOpen(true)`처럼 호출 하나뿐인 화살표도 인라인 콜백이므로 핸들러로 뺍니다.

추가 인자를 넘기려고 `onClick={(_event) => handleX(id)}` 같은 인라인 래퍼를 쓰지 않습니다.
그 자리는 `events-curry-extra-handler-arguments`가 커링으로 정합니다.

**Requires selected:** `docs-require-header-boxes-on-react-declarations` (함께 적용)

**Incorrect 1 (분기와 비동기를 JSX 안에 숨깁니다):**

```tsx
<Button
	onClick={(_event) => {
		if (!selectedProduct) {
			return;
		}

		mutationProductRemove.mutate({params: {productId: selectedProduct.id}});
	}}
>
	삭제
</Button>
```

**Correct 1 (로직을 이름 붙인 핸들러로 뺍니다):**

```tsx
import type {MouseEventHandler} from "react";

// ----------------------------------------------------------------------------------------
// 선택된 상품 삭제
//
// 성공 뒤 이동은 mutation 콜백 담당
// ----------------------------------------------------------------------------------------
const handleRemoveProductButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
	if (!selectedProduct) {
		return;
	}

	mutationProductRemove.mutate({params: {productId: selectedProduct.id}});
};

<Button onClick={handleRemoveProductButtonClick}>삭제</Button>;
```

> 나머지 예시와 예외는 [full rule](../rules/05-03-composition-named-handlers-over-inline.md)에 있습니다.
