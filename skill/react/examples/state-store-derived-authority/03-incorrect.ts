// page/root-outlet.tsx
// [!code error]
const permissionStore = usePermissionStore();

// ----------------------------------------------------------------------------------------
// 부트스트랩 응답의 권한 목록으로 수정 가능 여부 입력
// ----------------------------------------------------------------------------------------
useEffect(() => {
// [!code error]
	permissionStore.setCanEditProduct(responseAccessBootstrapSuspense.data.capabilities.includes("product:edit"));
// [!code error]
}, [permissionStore, responseAccessBootstrapSuspense.data]);
