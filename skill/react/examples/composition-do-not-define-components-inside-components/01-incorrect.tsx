// component/widget/user-card/user-card.tsx
export const UserCard = (props: UserCardProps) => {
	const Avatar = () => {
		return (
			<img
				className={clsx(
					"userCardAvatar__image",
					props.theme === "dark" && "userCardAvatar__image--dark",
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
