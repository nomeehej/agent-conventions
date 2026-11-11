// 예외: 행 12,000개 표가 부모의 입력마다 다시 렌더 → memo로 같은 프롭이면 렌더 생략
export const ProductListRows = memo((props: ProductListRowsProps) => {
	return <Table rows={props.products} />;
});
