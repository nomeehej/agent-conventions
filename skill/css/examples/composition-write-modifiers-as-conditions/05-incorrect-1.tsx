type Tone = "positive" | "negative" | "neutral" | "unknown";

// [!code error]
<span className={clsx("productsPage__changeRate", `productsPage__changeRate--${tone}`)}>{formatAmount(amount)}</span>;
