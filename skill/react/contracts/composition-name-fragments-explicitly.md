# Write Fragments as `Fragment`, Not the Shorthand

**Impact: MEDIUM (Fragment를 검색하고 변경 내역에서 식별하기 쉽습니다)**

여러 요소를 감쌀 때는 `react`에서 가져온 `<Fragment>`를 쓰고 `<>`, `</>`는 쓰지 않습니다.
빈 `<>`가 Fragment라는 사실을 `<Fragment>`가 이름으로 드러냅니다.
목록에서 `key`가 필요해져도 `<Fragment key={…}>` 형태를 유지합니다.
`<>`를 강제하는 `biome`의 `style/useFragmentSyntax`는 켜지 않습니다.

참고: [React 문서: Fragment 목록과 `key`](https://react.dev/reference/react/Fragment#rendering-a-list-of-fragments).

**Incorrect 1 (`Fragment` 단축 문법을 씁니다):**

```tsx
export const ProductScreen = () => {
	return (
		<>
			<ProductFilterBar />
			<ProductTableSection />
		</>
	);
};
```

**Correct 1 (`Fragment`를 그대로 씁니다):**

```tsx
import {Fragment} from "react";

export const ProductScreen = () => {
	return (
		<Fragment>
			<ProductFilterBar />
			<ProductTableSection />
		</Fragment>
	);
};
```

> 나머지 예시와 예외는 [full rule](../rules/05-07-composition-name-fragments-explicitly.md)에 있습니다.
