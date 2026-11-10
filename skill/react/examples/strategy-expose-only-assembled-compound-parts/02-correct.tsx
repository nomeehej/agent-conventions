// component/ui/panel/panel.tsx
import {PanelBody} from "@/component/ui/panel/_panel-body";
import {PanelHeader} from "@/component/ui/panel/_panel-header";
import {PanelRoot} from "@/component/ui/panel/_panel-root";

// [!code ++]
// 사용처가 내용을 끼우는 Root, Header, Body만 공개, 내부 래퍼와 여백 보정용 DOM은 비공개
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
	Body: PanelBody,
} as const;
