// component/ui/tabs/_hook/use-tabs.ts
interface TabsContextValue {
	selectedId: string;
	onSelect: (id: string) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);
