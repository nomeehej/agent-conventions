<Fragment>
{/* [!code ++] */}
	<Table rows={responseProductListSuspense.data.items} />
{/* [!code ++] */}
	<p className={clsx("productsPage__count")}>총 {responseProductListSuspense.data.total}건</p>
</Fragment>
