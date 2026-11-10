// 행 12,000개 표. memo 적용, 부모가 입력값으로 다시 렌더해도 이 트리 렌더 생략
export const ProductListRows = memo((props: ProductListRowsProps) => {
	return <Table rows={props.products} />;
});
