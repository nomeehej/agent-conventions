// [!code error]
// component/widget/chatbot/_chat-content.tsx: 어느 화면을 그릴지 고르기만 하고 상태는 소유 안 함
// [!code error]
export const ChatContent = () => {
	const chat = useChatContext();

	return (
// [!code error]
		<Fragment>
			{chat.isEmpty && <p className={clsx("chatbot__empty")}>{chat.emptyMessage}</p>}
			{!chat.isEmpty && <ChatMessages messages={chat.messages} />}
// [!code error]
		</Fragment>
	);
};
