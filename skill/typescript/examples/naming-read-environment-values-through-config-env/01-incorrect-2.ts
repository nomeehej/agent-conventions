// service/order-export-client.ts
// 다른 파일이 같은 키를 다시 조회, 같은 리터럴 기본값 중복
const orderExportBaseUrl = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";
