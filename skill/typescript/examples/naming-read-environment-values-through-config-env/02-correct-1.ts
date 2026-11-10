// config/env.ts
if (!import.meta.env.VITE_API_BASE_URL) {
	throw new MissingEnvironmentValueError("VITE_API_BASE_URL");
}

// ----------------------------------------------------------------------------------------
// API 서버 주소, 배포 환경별 변동
// ----------------------------------------------------------------------------------------
export const env_api_base_url = import.meta.env.VITE_API_BASE_URL;
