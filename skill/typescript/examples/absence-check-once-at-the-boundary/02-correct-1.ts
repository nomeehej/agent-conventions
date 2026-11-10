// page/product-detail/_function/to-signed-tone.ts

// [!code ++]
export const toSignedTone = (value: number): Tone => {
// [!code ++]
	if (value === 0) {
		return "neutral";
	}
	return value > 0 ? "positive" : "negative";
};
