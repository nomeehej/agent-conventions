// util/session/assert-logged-in.ts

// ----------------------------------------------------------------------------------------
// 로그인 상태 확인
//
// 로그인 상태가 아니면 예외를 던지고 화면 이동은 호출부가 정한다.
// ----------------------------------------------------------------------------------------
export const assertLoggedIn = (session: Session): void => {
	if (!session.userId) {
		throw new NotLoggedInError();
	}
};
