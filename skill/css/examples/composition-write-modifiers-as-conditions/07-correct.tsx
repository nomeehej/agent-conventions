export interface UserCardProps {
	role: "owner" | "member";
	label: string;
	description: string;
}

export const UserCard = (props: UserCardProps) => (
		<div
			className={clsx(
				"userCard__root",
				props.role === "owner" && "userCard__root--owner",
				props.role === "member" && "userCard__root--member",
			)}
		>
			<span
				className={clsx(
					"userCard__title",
					props.role === "owner" && "userCard__title--owner",
					props.role === "member" && "userCard__title--member",
				)}
			>
				{props.label}
			</span>
			<p
				className={clsx(
					"userCard__description",
					props.role === "owner" && "userCard__description--owner",
					props.role === "member" && "userCard__description--member",
				)}
			>
				{props.description}
			</p>
		</div>
	);
