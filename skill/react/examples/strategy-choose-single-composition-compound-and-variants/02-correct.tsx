// ----------------------------------------------------------------------------------------
// 프로필 요약만 보여 주는 고정 구조 대화상자
//
// 부품으로 분리하지 않는다.
// 사용처가 끼울 내용이 없다.
// 쓰지 않는 모드와 푸터는 제외한다.
// ----------------------------------------------------------------------------------------
export interface ProfileDialogProps {
	title: string;
	profile: Profile;
}

export const ProfileDialog = (props: ProfileDialogProps) => (
		<section className={clsx("profileDialog__root")}>
			<header className={clsx("profileDialog__header")}>
				<h3>{props.title}</h3>
			</header>
			<ProfileSummary profile={props.profile} />
		</section>
	);
