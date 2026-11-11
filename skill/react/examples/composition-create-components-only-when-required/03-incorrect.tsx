// page/products/product-list-section.tsx: 초안 행에만 렌더하는 삭제 버튼의 뮤테이션을 목록이 부름
export const ProductListSection = () => {
	const [removeErrorMessage, setRemoveErrorMessage] = useState<string | null>(null);
	const queryClient = useQueryClient();

	const responseProductListSuspense = useProductListSuspense();
	// [!code error]
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

	const handleDeleteButtonClick = (productId: string) => () => {
		if (mutationProductRemove.isPending) {
			return;
		}

		mutationProductRemove.mutate({params: {productId}});
	};

	return (
		<Fragment>
			{removeErrorMessage !== null && <p className={clsx("productListSection__error")}>{removeErrorMessage}</p>}
			<ul className={clsx("productListSection__root")}>
				{responseProductListSuspense.data.items.map((product) => (
					<li key={product.id} className={clsx("productListSection__item")}>
						{product.name}
						{/* [!code error] */}
						{product.status === "draft" && (
							<Button disabled={mutationProductRemove.isPending} onClick={handleDeleteButtonClick(product.id)}>
								삭제
							</Button>
						)}
					</li>
				))}
			</ul>
		</Fragment>
	);
};
