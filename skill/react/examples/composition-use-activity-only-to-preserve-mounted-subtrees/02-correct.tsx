// [!code ++]
// 편집을 취소하면 폼이 해제되므로 다시 들어갈 때 빈 입력으로 시작한다.
return (
	<Fragment>
{/* [!code ++] */}
		{isEditing && <ProductEditorForm />}
{/* [!code ++] */}
		{!isEditing && <ProductPreviewPane />}
	</Fragment>
);
