// component/ui/tabs/tabs.tsx
// [!code error]
const Tabs = (props: TabsProps) => {
	return <div role="tablist">{props.children}</div>;
};

// [!code error]
export default Tabs;
