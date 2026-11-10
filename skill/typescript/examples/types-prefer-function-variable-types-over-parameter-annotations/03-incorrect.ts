/**
 * 앞뒤 공백을 걷어 낸 요청 문자열
 */
// [!code error]
const toRequest = (request: string): string => {
	return request.trim();
};

/**
 * 검색어용으로 공백을 한 칸으로 줄인 요청 문자열
 */
// [!code error]
const toSearchRequest = (request: string): string => {
	return request.replaceAll(/\s+/g, " ").trim();
};

/**
 * 변환 함수를 받아 요청 문자열을 전송
 */
// [!code error]
export const sendRequest = (request: string, toBody: (request: string) => string): Promise<void> => {
	return client.post("/requests", toBody(request));
};

// 두 구현을 같은 자리에서 교체
sendRequest(" 초록 셔츠 ", toRequest);
sendRequest(" 초록   셔츠 ", toSearchRequest);
