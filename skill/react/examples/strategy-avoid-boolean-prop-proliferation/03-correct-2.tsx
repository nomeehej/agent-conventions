// component/widget/product-toolbar/product-toolbar.tsx
import {ProductToolbarRoot} from "@/component/widget/product-toolbar/product-toolbar-root";

// 사용처가 직접 조립할 `Root`만 공개. 조합은 두 변형이 이미 제공
export const ProductToolbar = {
	Root: ProductToolbarRoot,
} as const;
