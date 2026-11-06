// component/widget/profile-dialog/_profile-dialog-root.tsx
/**
 * 대화상자 틀. 접힘 상태를 소유하고 부품에 컨텍스트로 전달
 */
export const ProfileDialogRoot = (props: ProfileDialogPartProps) => {
	const [isBodyOpen, setIsBodyOpen] = useState(true);

	/**
	 * 헤더가 부를 접기 토글. 이전 값에 기대므로 함수형으로 갱신
	 */
	const toggleBody = () => {
		setIsBodyOpen((previous) => !previous);
	};

	// Header는 useContext(ProfileDialogContext)로 읽어 toggleBody 호출. 공개 이름은 2단계와 같음
	return (
		<ProfileDialogContext value={{isBodyOpen, toggleBody}}>
			<section className={clsx("profileDialog__root")}>{props.children}</section>
		</ProfileDialogContext>
	);
};
