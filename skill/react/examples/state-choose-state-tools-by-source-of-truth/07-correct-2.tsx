// component/ui/tabs/_tabs-root.tsx
import {TabsContext} from "@/component/ui/tabs/_hook/use-tabs";

// ----------------------------------------------------------------------------------------
// 탭 묶음 루트 입력 계약
//
// children: 탭 목록과 패널 부품
// ----------------------------------------------------------------------------------------
export interface TabsRootProps {
	defaultId: string;
	children: ReactNode;
}

export const TabsRoot = (props: TabsRootProps) => {
	const [selectedId, setSelectedId] = useState(props.defaultId);

	return <TabsContext value={{ selectedId, onSelect: setSelectedId }}>{props.children}</TabsContext>;
};
