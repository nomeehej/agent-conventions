// page/products/products-page.tsx: 닫아도 상태와 DOM은 보존하고 이펙트는 정리한다.
return (
	<Activity mode={isSidebarOpen ? "visible" : "hidden"}>
		<ProductSidebar />
	</Activity>
);
