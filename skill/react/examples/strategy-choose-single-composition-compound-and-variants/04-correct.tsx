// component/widget/profile-dialog/profile-dialog-root.tsx

// ----------------------------------------------------------------------------------------
// 대화상자 접힘 상태
//
// 대화상자 부품이 나눠 읽고 toggleBody는 헤더가 호출한다.
// ----------------------------------------------------------------------------------------
interface ProfileDialogContextValue {
	isBodyOpen: boolean;
	toggleBody: () => void;
}

export const ProfileDialogContext = createContext<ProfileDialogContextValue | null>(null);

export interface ProfileDialogRootProps {
	children: ReactNode;
}

// ----------------------------------------------------------------------------------------
// 대화상자 틀
//
// 접힘 상태를 소유하고 부품에 컨텍스트로 전달한다.
// ----------------------------------------------------------------------------------------
export const ProfileDialogRoot = (props: ProfileDialogRootProps) => {
	const [isBodyOpen, setIsBodyOpen] = useState(true);

	const toggleBody = () => {
		setIsBodyOpen((previous) => !previous);
	};

	// Header는 같은 폴더의 ProfileDialogContext를 useContext로 조회해 toggleBody를 호출한다.
	// 공개 이름은 2단계와 같다.
	return (
		<ProfileDialogContext value={{isBodyOpen, toggleBody}}>
			<section className={clsx("profileDialog__root")}>{props.children}</section>
		</ProfileDialogContext>
	);
};
