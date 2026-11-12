// component/ui/panel/panel.tsx
import {PanelFooter} from "@/component/ui/panel/panel-footer";
import {PanelHeader} from "@/component/ui/panel/panel-header";
import {PanelRoot} from "@/component/ui/panel/panel-root";

// Header와 Footer도 자기 파일에서 Root처럼 children만 받는다.
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
	Footer: PanelFooter,
} as const;
