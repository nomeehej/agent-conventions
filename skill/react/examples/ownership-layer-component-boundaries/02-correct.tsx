// [!code ++]
// page/products/_delete-product-button.tsx
// [!code ++]
export const DeleteProductButton = () => {
	const navigate = useNavigate();

	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		void navigate("/products");
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
