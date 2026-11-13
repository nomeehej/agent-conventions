const chooseRowLabel = (params: ChooseRowLabelParams) => {
	if (isNotNil(params.label)) return params.label;
	if (isNotNil(params.rowLabel)) return params.rowLabel;

	return empty_display_text;
};
