const [searchParams] = useSearchParams();

<ShareLinkButton href={`/products?${searchParams.toString()}`} />;
