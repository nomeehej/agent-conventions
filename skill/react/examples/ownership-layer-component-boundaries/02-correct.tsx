// [!code ++]
// page/products/delete-product-button.tsx: 초안 행에만 렌더, 이 버튼만 쓰는 라우터 훅 보유
// [!code ++]
export const DeleteProductButton = () => {
	const navigate = useNavigate();

	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		void navigate("/products");
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
