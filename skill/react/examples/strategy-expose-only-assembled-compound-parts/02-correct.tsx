// component/ui/panel/panel.tsx
import {PanelBody} from "@/component/ui/panel/_panel-body";
import {PanelHeader} from "@/component/ui/panel/_panel-header";
import {PanelRoot} from "@/component/ui/panel/_panel-root";

// [!code ++]
// 단순 클래스 래퍼는 헤더 부품만 쓰고 여백 보정용 DOM은 안 만듦
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
	Body: PanelBody,
} as const;
