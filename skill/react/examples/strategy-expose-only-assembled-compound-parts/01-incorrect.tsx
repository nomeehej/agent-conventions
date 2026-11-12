// component/ui/panel/panel.tsx
import {PanelBody} from "@/component/ui/panel/panel-body";
import {PanelHeader} from "@/component/ui/panel/panel-header";
// [!code error]
import {PanelHeaderInner} from "@/component/ui/panel/panel-header-inner";
import {PanelRoot} from "@/component/ui/panel/panel-root";
// [!code error]
import {PanelSpacer} from "@/component/ui/panel/panel-spacer";

// [!code error]
// 사용처가 끼워 넣을 자리가 없는 래퍼와 여백 보정용 DOM까지 이름이 붙어 노출된다.
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
// [!code error]
	HeaderInner: PanelHeaderInner,
// [!code error]
	Spacer: PanelSpacer,
	Body: PanelBody,
} as const;
