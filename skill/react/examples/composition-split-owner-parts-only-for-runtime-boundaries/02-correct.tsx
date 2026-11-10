// component/widget/chatbot/chatbot.tsx
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
