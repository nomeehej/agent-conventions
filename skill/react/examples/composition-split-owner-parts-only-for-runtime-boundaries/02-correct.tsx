// component/widget/chatbot/chatbot.tsx
// ----------------------------------------------------------------------------------------
// 챗봇 위젯 진입
//
// 대화 목록과 입력 폼 조립
// 대화 목록이 비면 안내 문구 표시
// ----------------------------------------------------------------------------------------
export const Chatbot = () => {
	const chat = useChatContext();

	return (
		<section className={clsx("chatbot__root")}>
			{chat.isEmpty && <p className={clsx("chatbot__empty")}>{chat.emptyMessage}</p>}
			{!chat.isEmpty && <ChatMessages messages={chat.messages} />}
			<ChatComposer
				// 전송 중 상태와 폼 프로바이더 소유, _chat-composer.tsx로 분리
				onSubmit={chat.send}
			/>
		</section>
	);
};
