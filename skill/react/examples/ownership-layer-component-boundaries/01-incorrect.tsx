// [!code error]
// component/widget/product-toolbar/_product-toolbar-delete-button.tsx
// [!code error]
export const ProductToolbarDeleteButton = () => {
	const navigate = useNavigate();

	// ----------------------------------------------------------------------------------------
	// 삭제 후 목록으로 이동
	// ----------------------------------------------------------------------------------------
	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		void navigate("/products");
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
