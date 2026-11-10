// component/ui/panel/panel.tsx
import {PanelFooter} from "@/component/ui/panel/_panel-footer";
import {PanelHeader} from "@/component/ui/panel/_panel-header";
import {PanelRoot} from "@/component/ui/panel/_panel-root";

// Header와 Footer도 자기 파일에서 Root처럼 children만 수신
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
	Footer: PanelFooter,
} as const;
