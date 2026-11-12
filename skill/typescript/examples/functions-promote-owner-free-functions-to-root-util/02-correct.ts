// [!code ++]
// page/profile/_function/build-profile-save-request.ts
// page/profile/profile-form.tsx와 page/profile/profile-drawer.tsx가 함께 호출한다.

// ----------------------------------------------------------------------------------------
// 프로필 저장 요청
//
// 서버가 앞뒤 공백이 붙은 displayName을 거부한다.
// ----------------------------------------------------------------------------------------
export const buildProfileSaveRequest = (values: ProfileFormValues) => ({body: {displayName: values.displayName.trim()}});
