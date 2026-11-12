// page/(main)/main-frame.tsx
export const MainFrame = () => {
	const location = useLocation();

	return (
		<div className={clsx("mainFrame__root")}>
			<AppNavigation />

			<main className={clsx("mainFrame__main")}>
				<ErrorBoundary resetKeys={[location.pathname, location.search]} fallback={<ScreenErrorState />}>
					<Suspense fallback={<ScreenSkeleton />}>
						<Outlet />
					</Suspense>
				</ErrorBoundary>
			</main>
		</div>
	);
};
