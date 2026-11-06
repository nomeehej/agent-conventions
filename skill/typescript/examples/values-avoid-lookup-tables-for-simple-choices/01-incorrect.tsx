const chart_toolbar_variant_by_card_variant = {
	default: "default",
	fill: "default",
	dialog: "dialog",
} satisfies Record<ChartCardProps["variant"], ChartToolbarProps["variant"]>;

<Chart.Toolbar variant={chart_toolbar_variant_by_card_variant[props.variant]} />;
