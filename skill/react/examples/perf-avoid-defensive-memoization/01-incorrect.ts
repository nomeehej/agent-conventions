const columns = useMemo(() => {
	return buildTableColumns(props.columns);
}, [props.columns]);
