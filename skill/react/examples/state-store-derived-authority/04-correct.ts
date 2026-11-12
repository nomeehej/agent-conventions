// page/root-frame.tsx
const setCanEditProduct = usePermissionStore((state) => state.setCanEditProduct);

// 예외: state-calculate-derived-values-during-render를 따르지 않는다.
// 여러 화면이 같은 판단을 조회하므로 경계에서 한 번 입력한다.
useEffect(() => {
	setCanEditProduct(responseAccessBootstrapSuspense.data.capabilities.includes("product:edit"));
}, [setCanEditProduct, responseAccessBootstrapSuspense.data]);
