// component/ui/tabs/_hook/use-tabs.ts
// ----------------------------------------------------------------------------------------
// 탭 부품끼리 나눠 쓰는 값
// ----------------------------------------------------------------------------------------
interface TabsContextValue {
	selectedId: string;
	onSelect: (id: string) => void;
}

export const TabsContext = createContext<TabsContextValue | null>(null);
