// 예외: 행 12,000개 표가 부모의 입력마다 다시 렌더되어 memo로 같은 프롭의 렌더를 생략한다.
export const ProductListRows = memo((props: ProductListRowsProps) => <Table rows={props.products} />);
