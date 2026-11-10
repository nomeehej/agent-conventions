// component/widget/user-card/user-card.tsx
export const UserCard = (props: UserCardProps) => {
// [!code error]
	const Avatar = () => {
		return (
			<img
				className={clsx(
					"userCard__avatar",
					props.theme === "dark" && "userCard__avatar--dark",
				)}
				src={props.user.avatarUrl}
				alt={props.user.name}
			/>
		);
	};

	return (
		<section>
			<Avatar />
		</section>
	);
};
