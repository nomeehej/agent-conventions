// service/user/save-user.ts

export const saveUser = async (user: User): Promise<void> => {
	await client.post("/users", user);
};
