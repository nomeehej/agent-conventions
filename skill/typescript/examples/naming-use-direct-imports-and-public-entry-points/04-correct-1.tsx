// component/ui/tabs/tabs.tsx
// [!code ++]
export const Tabs = (props: TabsProps) => {
	return <div role="tablist">{props.children}</div>;
};
