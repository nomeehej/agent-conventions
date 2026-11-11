// component/ui/tabs/tabs-root.tsx
import {TabsContext} from "@/component/ui/tabs/_hook/use-tabs";

export interface TabsRootProps {
	defaultId: string;
	children: ReactNode;
}

export const TabsRoot = (props: TabsRootProps) => {
	const [selectedId, setSelectedId] = useState(props.defaultId);

	return <TabsContext value={{ selectedId, onSelect: setSelectedId }}>{props.children}</TabsContext>;
};
