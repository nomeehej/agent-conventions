/**
 * 패널 헤더 부품
 *
 * 제목과 우측 동작 영역은 사용처가 직접 조립
 */
export interface PanelHeaderProps {
	/**
	 * 헤더 줄에 늘어놓을 제목과 동작
	 */
	children: ReactNode;
}

export const PanelHeader = (props: PanelHeaderProps) => {
	return <header className={clsx("panel__header")}>{props.children}</header>;
};
