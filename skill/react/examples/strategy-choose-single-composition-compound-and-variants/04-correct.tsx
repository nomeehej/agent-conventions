// component/widget/profile-dialog/_profile-dialog-root.tsx
/**
 * 대화상자 부품이 나눠 읽는 접힘 상태
 */
interface ProfileDialogContextValue {
	/**
	 * 본문이 펼쳐져 있는지
	 */
	isBodyOpen: boolean;
	/**
	 * 헤더가 부르는 접기 토글
	 */
	toggleBody: () => void;
}

export const ProfileDialogContext = createContext<ProfileDialogContextValue | null>(null);

/**
 * 대화상자 틀 계약
 */
export interface ProfileDialogRootProps {
	/**
	 * 그 부품 자리에 사용처가 넣을 내용
	 */
	children: ReactNode;
}

/**
 * 대화상자 틀. 접힘 상태를 소유하고 부품에 컨텍스트로 전달
 */
export const ProfileDialogRoot = (props: ProfileDialogRootProps) => {
	const [isBodyOpen, setIsBodyOpen] = useState(true);

	/**
	 * 헤더가 부를 접기 토글. 이전 값에 기대므로 함수형으로 갱신
	 */
	const toggleBody = () => {
		setIsBodyOpen((previous) => !previous);
	};

	// Header는 같은 폴더에서 ProfileDialogContext를 가져와 useContext로 읽고 toggleBody 호출. 공개 이름은 2단계와 같음
	return (
		<ProfileDialogContext value={{isBodyOpen, toggleBody}}>
			<section className={clsx("profileDialog__root")}>{props.children}</section>
		</ProfileDialogContext>
	);
};
