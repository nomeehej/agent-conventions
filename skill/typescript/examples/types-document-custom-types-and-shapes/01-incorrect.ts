// [!code error]
/**
 * 게시 결과 요약
 * 예약 게시 시각은 서버 시간대 기준
 */
interface PublishResult {
	documentId: string;
	published: boolean;
	scheduledAt?: string;
}
