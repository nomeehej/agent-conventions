// component/widget/user-card/user-card.tsx
export const UserCard = (props: UserCardProps) => {
	return (
		<section>
{/* [!code ++] */}
			<img
				className={clsx(
					"userCard__avatar",
					props.theme === "dark" && "userCard__avatar--dark",
				)}
				src={props.user.avatarUrl}
				alt={props.user.name}
			/>
		</section>
	);
};
