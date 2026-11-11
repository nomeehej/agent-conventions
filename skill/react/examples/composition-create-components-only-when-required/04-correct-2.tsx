// page/products/delete-product-button.tsx: 초안 행에만 렌더, 이 버튼만 쓰는 삭제 뮤테이션 보유
export interface DeleteProductButtonProps {
	productId: string;
}

export const DeleteProductButton = (props: DeleteProductButtonProps) => {
	// ----------------------------------------------------------------------------------------
	// 상품 삭제 요청, 초안 행이 아니면 이 구독도 없음
	// ----------------------------------------------------------------------------------------
	// [!code ++]
	const mutationProductRemove = useProductRemove();

	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		mutationProductRemove.mutate({params: {productId: props.productId}});
	};

	return <Button onClick={handleDeleteButtonClick}>삭제</Button>;
};
