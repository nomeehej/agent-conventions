// src/component/widget/barcode-scanner/barcode-scanner.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { BarcodeScanner } from "@/component/widget/barcode-scanner/barcode-scanner";

const meta = {
	title: "component/widget/barcode-scanner",
	component: BarcodeScanner,
	args: { onScan: fn() },
} satisfies Meta<typeof BarcodeScanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scanning: Story = {
	// 테스트 브라우저에 카메라가 없어 스캔 화면이 열리지 않으므로 테스트에서 제외한다.
	// [!code ++]
	tags: ["!test"],
};
