// [!code error]
<Suspense fallback={<LineChartSkeleton className={clsx("productDetailPage__chartSkeleton")} />}>
	<ProductDetailChartSection />
</Suspense>
