// ----------------------------------------------------------------------------------------
// 읽기 전용 프로필 대화상자
//
// 세 화면이 같은 조합 사용
// 조립을 한 이름으로 고정
// ----------------------------------------------------------------------------------------
export interface ReadOnlyProfileDialogProps {
	profile: Profile;
}

export const ReadOnlyProfileDialog = (props: ReadOnlyProfileDialogProps) => {
	return (
		<ProfileDialog.Root>
			<ProfileDialog.Header>프로필 보기</ProfileDialog.Header>
			<ProfileDialog.Body>
				<ProfileSummary profile={props.profile} />
			</ProfileDialog.Body>
		</ProfileDialog.Root>
	);
};
