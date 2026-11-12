// page/root-frame.tsx
// [!code error]
const permissionStore = usePermissionStore();

useEffect(() => {
// [!code error]
	permissionStore.setCanEditProduct(responseAccessBootstrapSuspense.data.capabilities.includes("product:edit"));
// [!code error]
}, [permissionStore, responseAccessBootstrapSuspense.data]);
