// component/ui/panel/_panel-root.tsx
import {clsx} from "clsx";

import type {PanelPartProps} from "@/component/ui/panel/_type/panel-part";

/**
 * 패널 틀. 나머지 부품은 이 안에서만 그림
 */
export const PanelRoot = (props: PanelPartProps) => {
	return <section className={clsx("panel__root")}>{props.children}</section>;
};
