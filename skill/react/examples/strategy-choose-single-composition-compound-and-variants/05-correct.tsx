/**
 * 읽기 전용 프로필 대화상자
 *
 * 세 화면이 같은 조합을 쓰므로 조립을 한 이름 뒤로 고정
 */
export interface ReadOnlyProfileDialogProps {
	/**
	 * 요약 영역에 그릴 프로필
	 */
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
