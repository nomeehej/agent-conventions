// component/widget/read-only-profile-dialog/read-only-profile-dialog.tsx

// ----------------------------------------------------------------------------------------
// 세 화면이 같은 조합을 써서 조립을 한 이름으로 고정
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
