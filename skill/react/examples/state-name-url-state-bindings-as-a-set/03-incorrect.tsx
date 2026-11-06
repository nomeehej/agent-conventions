const [searchParams, setSearchParams] = useQueryStates(productUrlParsers);
const query = searchParams.keyword;

<SearchInput value={query} />;
