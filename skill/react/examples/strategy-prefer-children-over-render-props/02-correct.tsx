// component/ui/panel/panel-root.tsx
import {clsx} from "clsx";

export interface PanelRootProps {
	children: ReactNode;
}

// ----------------------------------------------------------------------------------------
// 패널 틀
//
// 나머지 부품은 이 안에서만 렌더한다.
// ----------------------------------------------------------------------------------------
export const PanelRoot = (props: PanelRootProps) => <section className={clsx("panel__root")}>{props.children}</section>;
