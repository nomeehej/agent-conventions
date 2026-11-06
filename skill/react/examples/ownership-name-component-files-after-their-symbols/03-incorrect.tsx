// [!code error]
// component/ui/button/ui-button.tsx
// [!code error]
export const UiButton = (props: UiButtonProps) => {
	return <button type="button">{props.children}</button>;
};
