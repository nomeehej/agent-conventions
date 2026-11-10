// component/ui/panel/_panel-root.tsx
import {clsx} from "clsx";

/**
 * 패널 틀 계약
 */
export interface PanelRootProps {
	/**
	 * 그 부품 자리에 사용처가 넣을 내용
	 */
	children: ReactNode;
}

/**
 * 패널 틀. 나머지 부품은 이 안에서만 그림
 */
export const PanelRoot = (props: PanelRootProps) => {
	return <section className={clsx("panel__root")}>{props.children}</section>;
};
