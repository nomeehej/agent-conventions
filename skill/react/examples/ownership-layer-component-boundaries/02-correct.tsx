// [!code ++]
// page/products/_delete-product-button.tsx
// [!code ++]
export const DeleteProductButton = () => {
	const navigate = useNavigate();

	// ----------------------------------------------------------------------------------------
	// 삭제 후 목록으로 이동
	// ----------------------------------------------------------------------------------------
	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		void navigate("/products");
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
