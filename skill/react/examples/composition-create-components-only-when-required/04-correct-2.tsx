// page/products/delete-product-button.tsx: 초안 행에만 렌더, 이 버튼만 쓰는 삭제 뮤테이션 보유
export interface DeleteProductButtonProps {
	productId: string;
}

export const DeleteProductButton = (props: DeleteProductButtonProps) => {
	const [removeErrorMessage, setRemoveErrorMessage] = useState<string | null>(null);
	const queryClient = useQueryClient();

	// ----------------------------------------------------------------------------------------
	// 상품 삭제 요청, 초안 행이 아니면 이 구독도 없음
	//
	// 삭제가 목록과 요약 집계를 함께 바꿔 둘 다 무효화
	// ----------------------------------------------------------------------------------------
	// [!code ++]
	const mutationProductRemove = useProductRemove({
		mutation: {
			onSuccess: (_data, _variables, _onMutateResult, _context) => {
				void queryClient.invalidateQueries({queryKey: productListQueryKey()});
				void queryClient.invalidateQueries({queryKey: productSummaryQueryKey()});
			},
			onError: (error, _variables, _onMutateResult, _context) => {
				setRemoveErrorMessage(toSubmitErrorMessage(error));
			},
		},
	});

	const handleDeleteButtonClick: MouseEventHandler<HTMLButtonElement> = (_event) => {
		if (mutationProductRemove.isPending) {
			return;
		}

		mutationProductRemove.mutate({params: {productId: props.productId}});
	};

	return (
		<Fragment>
			<Button disabled={mutationProductRemove.isPending} onClick={handleDeleteButtonClick}>
				삭제
			</Button>
			{removeErrorMessage !== null && <p className={clsx("deleteProductButton__error")}>{removeErrorMessage}</p>}
		</Fragment>
	);
};
