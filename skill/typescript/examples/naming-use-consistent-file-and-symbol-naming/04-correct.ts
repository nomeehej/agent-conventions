const retry_policy = {
	max_attempts: 3,
} as const;

const product_status = {
	draft: "draft",
	waiting_review: "waiting_review",
	active: "active",
} as const;
