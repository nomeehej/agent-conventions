<div className={clsx("productDetailPage__chart")}>
	<Suspense fallback={<LineChartSkeleton />}>
		<ProductDetailChartSection />
	</Suspense>
</div>
