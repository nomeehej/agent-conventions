// 이미 있는 계약
/**
 * 사용자 화면 표시 문자열 계약
 */
interface UserFormatters {
	toRoleLabel: (role: UserRole) => string;
	toActiveLabel: (isActive: boolean) => string;
}

/**
 * 권한 코드를 화면 문자열로 변환
 */
// [!code error]
const toRoleLabel = (role: UserRole): string => {
	return role === "admin" ? "관리자" : "직원";
};
