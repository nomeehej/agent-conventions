// component/ui/tabs/tabs-root.tsx
interface TabsContextValue {
	selectedId: string;
	onSelect: (id: string) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);

export interface TabsRootProps {
	defaultId: string;
	children: ReactNode;
}

export const TabsRoot = (props: TabsRootProps) => {
	const [selectedId, setSelectedId] = useState(props.defaultId);

	return <TabsContext value={{ selectedId, onSelect: setSelectedId }}>{props.children}</TabsContext>;
};
