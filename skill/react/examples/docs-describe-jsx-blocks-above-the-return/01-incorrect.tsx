// page/products/products-page.tsx
export const ProductsPage = () => {
	return (
		<section className={clsx("productsPage__root")}>
			{/* [!code error] */}
			{/**
			 * 검색어 입력과 목록 보기 동작, 검색어 변경 시 첫 쪽 이동
			 */}
			<div className={clsx("productsPage__filter")}>
				<ProductSearchField />
				<ProductBrowseActions />
			</div>
			{/* [!code error] */}
			{/**
			 * 목록 표와 쪽 이동, 쪽 번호는 URL 기준
			 */}
			<Suspense fallback={<ScreenSkeleton />}>
				<ProductListSection />
			</Suspense>
		</section>
	);
};
