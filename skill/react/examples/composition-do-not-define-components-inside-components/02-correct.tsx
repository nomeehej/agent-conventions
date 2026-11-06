// component/widget/user-card/user-card.tsx
// [!code ++]
import {UserCardAvatar} from "@/component/widget/user-card/_user-card-avatar";

export const UserCard = (props: UserCardProps) => {
	return (
		<section>
{/* [!code ++] */}
			<UserCardAvatar src={props.user.avatarUrl} alt={props.user.name} theme={props.theme} />
		</section>
	);
};
