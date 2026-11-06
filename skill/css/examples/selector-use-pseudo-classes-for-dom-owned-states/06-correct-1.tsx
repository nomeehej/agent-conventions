<button
	type="button"
	aria-pressed={isSelected}
// [!code ++]
	disabled={isDisabled}
// [!code ++]
	className={clsx("productsPage__card", isSelected && "productsPage__card--selected")}
>
	{product.name}
</button>
