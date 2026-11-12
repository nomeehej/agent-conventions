// [!code ++]
type ToRequest = (request: string) => string;

// [!code ++]
const toRequest: ToRequest = (request) => request.trim();

// ----------------------------------------------------------------------------------------
// 검색어용으로 공백을 한 칸으로 줄인 요청 문자열
// ----------------------------------------------------------------------------------------
// [!code ++]
const toSearchRequest: ToRequest = (request) => request.replaceAll(/\s+/g, " ").trim();

// [!code ++]
export const sendRequest = (request: string, toBody: ToRequest): Promise<void> => client.post("/requests", toBody(request));

// 두 구현을 같은 자리에서 교체해 쓴다.
sendRequest(" 초록 셔츠 ", toRequest);
sendRequest(" 초록   셔츠 ", toSearchRequest);
