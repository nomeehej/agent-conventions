// component/widget/app-shell/app-shell.tsx
export const AppShell = (props: AppShellProps) => {
	return (
		<div className={clsx("appShell__root")}>
			<AppNavigation />

			<main className={clsx("appShell__main")}>
				<ErrorBoundary fallback={<ScreenErrorState />}>
					<Suspense fallback={<ScreenSkeleton />}>{props.children}</Suspense>
				</ErrorBoundary>
			</main>
		</div>
	);
};
