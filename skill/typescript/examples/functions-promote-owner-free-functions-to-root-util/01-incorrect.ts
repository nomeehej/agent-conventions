// [!code error]
// util/profile/build-profile-save-request.ts
// [!code error]
// profile은 값의 종류가 아니라 화면 이름이므로 화면이 없어지면 이 요청도 없어진다.

// ----------------------------------------------------------------------------------------
// 프로필 저장 요청
//
// 서버가 앞뒤 공백이 붙은 displayName을 거부한다.
// ----------------------------------------------------------------------------------------
export const buildProfileSaveRequest = (values: ProfileFormValues) => {
	return {body: {displayName: values.displayName.trim()}};
};
