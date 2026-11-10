// service/user/save-user.ts

// ----------------------------------------------------------------------------------------
// [!code error]
// 사용자 저장
//
// [!code error]
// /users 경로로 POST 요청
// ----------------------------------------------------------------------------------------
export const saveUser = async (user: User): Promise<void> => {
	await client.post("/users", user);
};
