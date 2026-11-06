// [!code ++]
// component/ui/button/button.tsx
// [!code ++]
export const Button = (props: ButtonProps) => {
	return <button type="button">{props.children}</button>;
};
