export interface ProfileDialogProps {
	isCompact?: boolean;
	showActivity?: boolean;
	showFocus?: boolean;
	dialogTitle?: string;
	renderFooter?: () => ReactNode;
}

export const ProfileDialog = (props: ProfileDialogProps) => {
	return (
		<section className={props.isCompact ? "dialog dialog--compact" : "dialog"}>
			<header>
				<h3>{props.dialogTitle}</h3>
			</header>
			<ProfileSummary />
			{props.showActivity && <ProfileActivityPanel />}
			{props.showFocus && <ProfileFocusPanel />}
			<footer>{props.renderFooter?.()}</footer>
		</section>
	);
};
