// 이미 있는 계약
interface UserFormatters {
	toRoleLabel: (role: UserRole) => string;
	toActiveLabel: (isActive: boolean) => string;
}

// [!code error]
const toRoleLabel = (role: UserRole): string => {
	return role === "admin" ? "관리자" : "직원";
};
