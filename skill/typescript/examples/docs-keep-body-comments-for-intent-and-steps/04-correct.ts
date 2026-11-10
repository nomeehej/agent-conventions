const submitProductDraft = async (draft: ProductDraft) => {
// [!code ++]
	// SDK가 빈 문자열 거부 → trim 뒤 빈 값이면 호출 생략
	if (!draft.name.trim()) {
		return;
	}

// [!code ++]
	// 본문 저장에 첨부 참조 ID 필요 → 첨부 먼저 업로드
	const uploadedAttachments = await uploadAttachments(draft.attachments);
	const savedProduct = await saveProduct({name: draft.name, attachments: uploadedAttachments});

// [!code ++]
	// 저장보다 먼저 무효화 → 옛 목록이 캐시에 재입력
	await queryClient.invalidateQueries({queryKey: productListQueryKey()});

	return savedProduct;
};
