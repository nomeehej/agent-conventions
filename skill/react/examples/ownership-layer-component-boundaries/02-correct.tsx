// [!code ++]
// page/products/delete-product-button.tsx
// [!code ++]
// 초안 행에만 그리고 이 버튼만 쓰는 라우터 훅을 가진다.
// [!code ++]
export const DeleteProductButton = () => {
	const navigate = useNavigate();

	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		void navigate("/products");
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
