// [!code error]
// component/widget/product-toolbar/_product-toolbar-delete-button.tsx
// [!code error]
export const ProductToolbarDeleteButton = () => {
	const navigate = useNavigate();

	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		void navigate("/products");
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
