const {items, total} = responseProductListSuspense.data;

<Fragment>
	<List rows={items} />
	<p className={clsx("productsPage__count")}>총 {total}건</p>
</Fragment>;
