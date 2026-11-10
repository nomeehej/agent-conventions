const [searchParams, setSearchParams] = useQueryStates(urlParsers);
const query = searchParams.keyword;

<SearchInput value={query} />;
