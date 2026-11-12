// page/profile/_function/build-profile-save-request.ts

// ----------------------------------------------------------------------------------------
// 프로필 저장 페이로드 조립
//
// 서버가 앞뒤 공백이 붙은 displayName을 거부한다.
// ----------------------------------------------------------------------------------------
export const buildProfileSaveRequest = (formValues: ProfileFormValues) => ({
		displayName: formValues.displayName.trim(),
	});
