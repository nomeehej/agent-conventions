export interface PanelHeaderProps {
	children: ReactNode;
}

// [!code error]
// ----------------------------------------------------------------------------------------
// 패널 헤더 부품
// ----------------------------------------------------------------------------------------
export const PanelHeader = (props: PanelHeaderProps) => {
	return <header className={clsx("panel__header")}>{props.children}</header>;
};
