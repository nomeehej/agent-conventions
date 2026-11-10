/**
 * 게시 결과 요약
 */
interface PublishResult {
	documentId: string;
	published: boolean;
	// [!code ++]
	/**
	 * 서버 시간대 기준 예약 게시 시각, 즉시 게시면 없음
	 */
	scheduledAt?: string;
}
