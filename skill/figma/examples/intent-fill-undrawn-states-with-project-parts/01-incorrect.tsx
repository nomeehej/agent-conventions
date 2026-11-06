<Suspense
	fallback={
// [!code error]
		<div className="productsPage__loading">
{/* [!code error] */}
			<img src={loadingGif} />
{/* [!code error] */}
			<p>불러오는 중</p>
		</div>
	}
>
	<ProductTableSection />
</Suspense>
