// [!code ++]
// page/profile/_function/to-profile-save-request.ts
// page/profile/profile-form.tsx와 page/profile/profile-drawer.tsx가 함께 호출

// ----------------------------------------------------------------------------------------
// 서버가 앞뒤 공백이 붙은 displayName 거부
// ----------------------------------------------------------------------------------------
export const toProfileSaveRequest = (values: ProfileFormValues) => {
	return {body: {displayName: values.displayName.trim()}};
};
