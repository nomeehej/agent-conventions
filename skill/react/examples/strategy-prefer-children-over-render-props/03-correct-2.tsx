// component/ui/panel/panel.tsx
import {PanelFooter} from "@/component/ui/panel/_panel-footer";
import {PanelHeader} from "@/component/ui/panel/_panel-header";
import {PanelRoot} from "@/component/ui/panel/_panel-root";

// Header와 Footer도 Root와 같은 형태로 children만 받음
export const Panel = {
	Root: PanelRoot,
	Header: PanelHeader,
	Footer: PanelFooter,
} as const;
