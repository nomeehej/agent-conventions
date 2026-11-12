// component/ui/panel/panel.tsx
import {PanelBody} from "@/component/ui/panel/panel-body";
import {PanelHeader} from "@/component/ui/panel/panel-header";
import {PanelRoot} from "@/component/ui/panel/panel-root";

// [!code ++]
// 사용처가 내용을 끼우는 Root, Header, Body만 공개하고 안쪽 래퍼는 각 부품의 JSX에 둔다.
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
	Body: PanelBody,
} as const;
