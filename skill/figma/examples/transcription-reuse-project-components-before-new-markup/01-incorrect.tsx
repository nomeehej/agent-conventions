// [!code error]
<div className="flex flex-col">
	<div className="flex">
{/* [!code error] */}
		<div className="w-[270px]">상품명</div>
		<div className="w-[60px]">판매가</div>
	</div>
{/* [!code error] */}
	{products.map((product) => (
		<div className="flex" key={product.id}>
			<div className="w-[270px]">{product.name}</div>
			<div className="w-[60px]">{product.price}</div>
		</div>
	))}
</div>
