// [!code error]
// component/widget/product-toolbar/product-toolbar-delete-button.tsx
// [!code error]
// 초안 행에만 그리는 버튼이 라우터 훅을 부른다.
// [!code error]
export const ProductToolbarDeleteButton = () => {
	const navigate = useNavigate();

	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		void navigate("/products");
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
