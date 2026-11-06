<button
	type="button"
	aria-pressed={isSelected}
// [!code error]
	className={clsx("productsPage__card", isDisabled && "productsPage__card--disabled")}
>
	{product.name}
</button>
