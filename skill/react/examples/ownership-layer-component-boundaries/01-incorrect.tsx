// [!code error]
// component/widget/product-toolbar/product-toolbar-delete-button.tsx: 초안 행에만 렌더하는 버튼이 라우터 훅을 부름
// [!code error]
export const ProductToolbarDeleteButton = () => {
	const navigate = useNavigate();

	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		void navigate("/products");
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
