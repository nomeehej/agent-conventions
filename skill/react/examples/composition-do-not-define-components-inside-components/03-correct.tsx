// component/widget/user-card/_user-card-avatar.tsx
/**
 * 사용자 카드 아바타 프롭스
 */
export interface UserCardAvatarProps {
	/**
	 * 어두운 배경에서 쓸지
	 */
	theme: "dark" | "light";
	/**
	 * 아바타 이미지 주소
	 */
	src: string;
	/**
	 * 아바타로 구분하는 사용자 이름
	 */
	alt: string;
}

export const UserCardAvatar = (props: UserCardAvatarProps) => {
	return (
		<img
			className={clsx(
				"userCardAvatar__image",
				props.theme === "dark" && "userCardAvatar__image--dark",
			)}
			src={props.src}
			alt={props.alt}
		/>
	);
};
