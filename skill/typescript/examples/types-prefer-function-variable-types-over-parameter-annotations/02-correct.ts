// 이미 있는 계약
interface UserFormatters {
	toRoleLabel: (role: UserRole) => string;
	toActiveLabel: (isActive: boolean) => string;
}

// [!code ++]
const toRoleLabel: UserFormatters["toRoleLabel"] = (role) => {
	return role === "admin" ? "관리자" : "직원";
};
