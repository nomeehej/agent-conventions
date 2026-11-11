// page/(main)/main-outlet.tsx
export const MainOutlet = () => {
	const location = useLocation();

	return (
		<div className={clsx("mainOutlet__root")}>
			<AppNavigation />

			<main className={clsx("mainOutlet__main")}>
				<ErrorBoundary resetKeys={[location.pathname, location.search]} fallback={<ScreenErrorState />}>
					<Suspense fallback={<ScreenSkeleton />}>
						<Outlet />
					</Suspense>
				</ErrorBoundary>
			</main>
		</div>
	);
};
