// page/root-frame.tsx
const setCanEditProduct = usePermissionStore((state) => state.setCanEditProduct);

// 예외: state-calculate-derived-values-during-render, 여러 화면이 같은 판단을 조회해 경계에서 한 번 입력
useEffect(() => {
	setCanEditProduct(responseAccessBootstrapSuspense.data.capabilities.includes("product:edit"));
}, [setCanEditProduct, responseAccessBootstrapSuspense.data]);
