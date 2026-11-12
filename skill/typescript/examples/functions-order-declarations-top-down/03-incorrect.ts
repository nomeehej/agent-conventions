// [!code error]
const selectedLocaleSupported = isSupportedLocale(selectedLocale);

// ----------------------------------------------------------------------------------------
// 지원 로케일 판정
//
// 짧고 고정된 지원 로케일 목록을 기준으로 판정한다.
// ----------------------------------------------------------------------------------------
export const isSupportedLocale = (locale: string): boolean => {
	return locale_supported_values.includes(locale);
};
