// src/component/widget/user-card/user-card.stories.tsx
import type {Meta, StoryObj} from "@storybook/react-vite";
import {fn} from "storybook/test";

import {UserCard} from "@/component/widget/user-card/user-card";

const meta = {
	title: "component/widget/user-card",
	component: UserCard,
	args: {
		// [!code ++]
		user: {id: "user-1", name: "김상점", email: "owner@example.com", role: "admin", avatarUrl: "/avatar/user-1.png"},
		onSave: fn(),
	},
} satisfies Meta<typeof UserCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Admin: Story = {};
