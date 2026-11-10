const product_status = {
	pending: "pending",
	passed: "passed",
	failed: "failed",
} as const;

type ProductStatus = (typeof product_status)[keyof typeof product_status];
