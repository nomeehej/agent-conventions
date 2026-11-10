// page/root-outlet.tsx
const setCanEditProduct = usePermissionStore((state) => state.setCanEditProduct);

// ----------------------------------------------------------------------------------------
// 부트스트랩 응답의 권한 목록으로 수정 가능 여부 입력
//
// 여러 화면과 라우트 가드가 이 결과를 조회
//
// 예외: state-calculate-derived-values-during-render
//   화면 여럿이 같은 판단을 조회, 경계에서 한 번 입력
// ----------------------------------------------------------------------------------------
useEffect(() => {
	setCanEditProduct(responseAccessBootstrapSuspense.data.capabilities.includes("product:edit"));
}, [setCanEditProduct, responseAccessBootstrapSuspense.data]);
