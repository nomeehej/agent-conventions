<span
	className={clsx(
		"productsPage__changeRate",
		tone === "positive" && "productsPage__changeRate--positive",
		tone === "negative" && "productsPage__changeRate--negative",
	)}
>
	{formatAmount(amount)}
</span>;
