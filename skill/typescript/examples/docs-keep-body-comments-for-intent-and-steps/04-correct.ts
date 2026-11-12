const submitProductDraft = async (draft: ProductDraft) => {
// [!code ++]
	// SDK가 빈 문자열을 거부하므로 trim 뒤 빈 값이면 호출하지 않는다.
	if (!draft.name.trim()) return;

// [!code ++]
	// 본문 저장에 첨부 참조 ID가 필요해서 첨부를 먼저 올린다.
	const uploadedAttachments = await uploadAttachments(draft.attachments);
	const savedProduct = await saveProduct({name: draft.name, attachments: uploadedAttachments});

// [!code ++]
	// 저장보다 먼저 무효화하면 옛 목록이 캐시에 다시 들어온다.
	await queryClient.invalidateQueries({queryKey: productListQueryKey()});

	return savedProduct;
};
