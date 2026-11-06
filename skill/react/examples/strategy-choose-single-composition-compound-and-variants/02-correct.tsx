/**
 * 프로필 요약만 보여 주는 고정 구조 대화상자
 *
 * 사용처가 끼워 넣을 자리가 없어 부품으로 안 쪼갬
 */
export interface ProfileDialogProps {
	/**
	 * 헤더에 그릴 제목
	 */
	title: string;
	/**
	 * 요약 영역에 그릴 프로필
	 */
	profile: Profile;
}

export const ProfileDialog = (props: ProfileDialogProps) => {
	return (
		<section className={clsx("profileDialog__root")}>
			<header className={clsx("profileDialog__header")}>
				<h3>{props.title}</h3>
			</header>
			<ProfileSummary profile={props.profile} />
		</section>
	);
};
