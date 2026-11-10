const submitProductDraft = async (draft: ProductDraft) => {
// [!code ++]
	// trim 후 값이 없으면 호출 생략, SDK가 빈 문자열 거부
	if (!draft.name.trim()) {
		return;
	}

// [!code ++]
	// 1. 첨부 먼저 업로드, 본문 저장에 참조 ID 필요
	const uploadedAttachments = await uploadAttachments(draft.attachments);
	const savedProduct = await saveProduct({name: draft.name, attachments: uploadedAttachments});

// [!code ++]
	// 2. 저장 완료 후 목록 캐시 무효화, 순서 변경 시 옛 목록이 캐시에 재입력
	await queryClient.invalidateQueries({queryKey: ["products"]});

	return savedProduct;
};
