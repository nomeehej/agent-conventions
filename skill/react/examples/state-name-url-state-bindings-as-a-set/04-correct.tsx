const [urlParams, setUrlParams] = useQueryStates(productUrlParsers);

<SearchInput value={urlParams.keyword} />;
