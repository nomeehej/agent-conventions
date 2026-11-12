const currency = pricing_default_currency;

const calculateOrderTotal = (lines: OrderLine[]): OrderTotal => {
	return {
		currency,
		amount: sumBy(lines, (line) => line.amount),
	};
};
