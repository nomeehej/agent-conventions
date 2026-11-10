<div
	className={clsx("productDescription__prose")}
	// biome-ignore lint/security/noDangerouslySetInnerHtml: 서버가 정제한 본문 HTML
	dangerouslySetInnerHTML={{
		// biome-ignore lint/style/useNamingConvention: React가 정한 속성 이름
		__html: product.bodyHtml,
	}}
/>
