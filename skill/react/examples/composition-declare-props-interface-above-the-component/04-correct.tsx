// ----------------------------------------------------------------------------------------
// 패널 헤더 부품, 제목과 우측 동작 영역은 사용처가 직접 조립
// ----------------------------------------------------------------------------------------
export interface PanelHeaderProps {
	children: ReactNode;
}

export const PanelHeader = (props: PanelHeaderProps) => <header className={clsx("panel__header")}>{props.children}</header>;
