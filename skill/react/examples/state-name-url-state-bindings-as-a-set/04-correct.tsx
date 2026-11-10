const [urlParams, setUrlParams] = useQueryStates(urlParsers);

<SearchInput value={urlParams.keyword} />;
