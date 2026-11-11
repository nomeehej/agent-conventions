// ----------------------------------------------------------------------------------------
// 예제가 import 없이 쓰는 이름
//
// 실제 스택의 이름은 설치된 패키지의 타입을 그대로 가리킴
// 예제 세계관의 이름은 여기서 선언
// tsc 가 Cannot find name 이나 Cannot find module 을 내면 그 이름을 알맞은 절에 추가
// ----------------------------------------------------------------------------------------

declare module "*.css";
declare module "*.svg";

interface ImportMeta {
	env: Record<string, string | undefined>;
}

// ----------------------------------------------------------------------------------------
// 실제 스택
// ----------------------------------------------------------------------------------------
declare const useState: typeof import("react").useState;
declare const useEffect: typeof import("react").useEffect;
declare const useMemo: typeof import("react").useMemo;
declare const useContext: typeof import("react").useContext;
declare const useRef: typeof import("react").useRef;
declare const useTransition: typeof import("react").useTransition;
declare const useDeferredValue: typeof import("react").useDeferredValue;
declare const useEffectEvent: typeof import("react").useEffectEvent;
declare const useImperativeHandle: typeof import("react").useImperativeHandle;
declare const startTransition: typeof import("react").startTransition;
declare const memo: typeof import("react").memo;
declare const createContext: typeof import("react").createContext;
declare const Suspense: typeof import("react").Suspense;
declare const Fragment: typeof import("react").Fragment;
declare const Activity: typeof import("react").Activity;
declare const QueryClient: typeof import("@tanstack/react-query").QueryClient;
declare const useSuspenseQuery: typeof import("@tanstack/react-query").useSuspenseQuery;
declare const useSuspenseQueries: typeof import("@tanstack/react-query").useSuspenseQueries;
declare const useQueryClient: typeof import("@tanstack/react-query").useQueryClient;
declare const useQueryErrorResetBoundary: typeof import("@tanstack/react-query").useQueryErrorResetBoundary;
declare const Route: typeof import("react-router").Route;
declare const Routes: typeof import("react-router").Routes;
declare const useNavigate: typeof import("react-router").useNavigate;
declare const useSearchParams: typeof import("react-router").useSearchParams;
declare const parseAsInteger: typeof import("nuqs").parseAsInteger;
declare const parseAsString: typeof import("nuqs").parseAsString;
declare const useQueryStates: typeof import("nuqs").useQueryStates;
declare const isNotNil: typeof import("es-toolkit").isNotNil;
declare const orderBy: typeof import("es-toolkit").orderBy;
declare const sortBy: typeof import("es-toolkit").sortBy;
declare const sumBy: typeof import("es-toolkit").sumBy;
declare const uniq: typeof import("es-toolkit").uniq;
declare const MuiButton: typeof import("@mui/material").Button;
declare const MuiTableRow: typeof import("@mui/material").TableRow;
declare const clsx: typeof import("clsx").clsx;
declare const dayjs: typeof import("dayjs").default;
type ReactNode = import("react").ReactNode;
type ReactElement = import("react").ReactElement;
type Context<T> = import("react").Context<T>;
type ButtonHTMLAttributes<T> = import("react").ButtonHTMLAttributes<T>;
type CSSProperties = import("react").CSSProperties;
type MuiButtonProps = import("@mui/material").ButtonProps;
type TableCellProps = import("@mui/material").TableCellProps;
type MuiTableRowProps = import("@mui/material").TableRowProps;
type Ref<T> = import("react").Ref<T>;
type MouseEventHandler<T = Element> = import("react").MouseEventHandler<T>;
type ChangeEventHandler<T = Element> = import("react").ChangeEventHandler<T>;
type HTMLAttributes<T> = import("react").HTMLAttributes<T>;

// ----------------------------------------------------------------------------------------
// 예제 세계관: 작은 상점 관리자 콘솔의 도메인
// ----------------------------------------------------------------------------------------
type ProductStatus = "draft" | "active" | "hidden";
declare const product_status: {readonly draft: "draft"; readonly active: "active"; readonly hidden: "hidden"};
type ProductStatusFilter = ProductStatus | "all";
interface Product {
	id: string;
	name: string;
	price: number;
	stock: number;
	status: ProductStatus;
	categoryId: string;
	ownerId: string;
	bodyHtml: string;
	updatedAt: string;
}
type ProductRecord = Product;
interface ProductRef {
	id: string;
}
interface ProductRow extends Row {
	status: ProductStatus;
	stock: number;
	lockedAt?: string;
	ownerId: string;
}
interface ProductCategory {
	id: string;
	name: string;
}
interface ProductCategoryNode extends ProductCategory {
	children: ProductCategoryNode[];
}
interface ProductChange {
	productId: string;
	stock: number;
}
interface ProductSummary {
	changeRate: number | null;
}
interface ProductDraft {
	name: string;
	price: number;
	tags: string[];
	attachments: File[];
}
interface ProductFormValues {
	name: string;
	description: string;
	categoryId: string;
}
type ProductEditorFormValues = ProductFormValues;
interface ProductSaveRequest {
	name: string;
	description?: string;
	categoryId?: string;
	price?: number;
	tags?: string[];
	attachmentIds?: string[];
}
interface ProductCreateRequest extends ProductSaveRequest {}
interface ProductListResponse {
	items: Product[];
	total: number;
}
type ProductPage = ProductListResponse;
interface ProductTreeResponse {
	categoryNodes: ProductCategoryNode[];
}

type OrderStatus = "pending" | "paid" | "shipped" | "completed" | "cancelled";
type OrderStatusCode = "P" | "C" | "D";
interface OrderLine {
	id: string;
	label: string;
	amount: number;
}
interface OrderLineInput {
	product: Product;
	quantity: number;
}
interface OrderTotal {
	currency: string;
	amount: number;
}
interface Order {
	id: string;
	status: OrderStatus;
	total: number;
	orderedAt: string;
	ownerId: string;
	lines: OrderLine[];
	overdueLineIds: string[];
}
interface OrderRow extends Row {
	status: OrderStatus;
	total: number;
	orderedAt: string;
	dueDate: string;
	isCancelled: boolean;
	isDueSoon: boolean;
}
type StatusLabel = "취소" | "임박" | "진행";
interface OrderFilters {
	status?: OrderStatus;
	keyword?: string;
}
interface OrderDraft {
	productId: string;
	quantity: number;
	memo: string;
}
interface OrderSaveRequest {
	quantity: number;
	memo: string;
}
interface OrderSummary {
	orderAmount: Amount;
	orderCount: number;
	statusDescription: string;
	totalAmount: Amount;
}
interface ToOrderSummaryParams {
	orderSummary: OrderSummary;
	stockCount?: number;
}
interface SummaryMetric {
	id: string;
	label: string;
	value: string | number;
}
interface SummaryStatusGroup {
	id: string;
	title: string;
	description: string;
	total: string;
	rows: SummaryMetric[];
}
interface OrderSummaryContent {
	metrics: SummaryMetric[];
	statusGroups: SummaryStatusGroup[];
	stockCount?: number;
}
interface OrderSummaryItem {
	id: string;
	name: string;
	code: string;
}
interface OrderSummaryResponse {
	items: OrderSummaryItem[];
}
interface SummaryRow {
	id: string;
	label: string;
}

type UserRole = "admin" | "staff";
interface UserRecord {
	id: string;
	name: string;
	email: string;
}
interface User extends UserRecord {
	role: UserRole;
	avatarUrl: string;
	nickname?: string;
}
interface UserRow extends Row {
	role: UserRole;
	isActive: boolean;
}
interface UserResponse {
	items: User[];
}
interface UserFormValues {
	name: string;
	email: string;
	role: UserRole;
}
interface Profile {
	id: string;
	displayName: string;
	email: string;
	avatarUrl: string;
}
interface ProfileFormValues {
	displayName: string;
}
interface Session {
	userId: string | null;
}
interface Settings {
	theme: "light" | "dark";
	locale: string;
	supportEmail?: string;
}

interface Amount {
	value: number;
	currency: string;
}
type Tone = "neutral" | "accent" | "positive" | "negative";
interface Row {
	id: string;
	name: string;
}
type RowAction = "edit" | "view";
declare const row_action: {readonly edit: "edit"; readonly view: "view"};
interface Draft {
	title: string;
}
interface PageRequest {
	page: number;
	size: number;
}
interface GeneratedExportRequest {
	format: "csv" | "xlsx";
	requestedAt: string;
}
interface ChartPoint {
	x: number;
	y: number;
}
interface ChartSeries {
	id: string;
	role: string;
	points: ChartPoint[];
	colorToken?: string;
}
interface ChartInstance {
	resize(): void;
	dispose(): void;
	setOption(option: unknown): void;
}
interface TableColumn {
	id: string;
	label: string;
}
interface Capabilities {
	capabilities: string[];
}

declare class MissingEnvironmentValueError extends Error {
	constructor(name: string);
}
declare class NoActiveProductError extends Error {}
declare class NotLoggedInError extends Error {}

// ----------------------------------------------------------------------------------------
// 예제 세계관: constant/ 의 값
// ----------------------------------------------------------------------------------------
declare const api_base_url: string;
declare const pagination_default_page: number;
declare const pagination_default_page_size: number;
declare const date_format: string;
declare const empty_display_text: string;
declare const order_memo_limit: number;
declare const product_tag_limit: number;
declare const query_retry_count: number;
declare const support_email_default: string;
declare const tick_count: number;
declare const token_expiry_hours: number;
declare const pricing_default_currency: string;
declare const locale_supported_values: readonly string[];
declare const editable_order_statuses: readonly OrderStatus[];
declare const product_list: Product[];
declare const productColumns: TableColumn[];

// ----------------------------------------------------------------------------------------
// 예제 세계관: 컴포넌트와 프롭, 레이어 순서(ui, widget, page)
// ----------------------------------------------------------------------------------------
type Theme = "light" | "dark";
interface ErrorFallbackProps {
	error: Error;
	resetErrorBoundary: () => void;
}
interface TreeItem {
	id: string;
	name: string;
	children: TreeItem[];
}
interface TableSort {
	columnId: string;
	direction: "asc" | "desc";
}
interface ChatMessage {
	id: string;
	text: string;
	sentAt: string;
}
interface DailyCount {
	date: string;
	count: number;
}
type ChartOption = Record<string, unknown>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
}
declare const Button: (props: ButtonProps) => ReactElement;
declare const Chart: {
	Toolbar: (props: {variant: string}) => ReactElement;
};
interface CollapseProps {
	className?: string;
	variant?: "default" | "compact";
	title?: string;
	children?: ReactNode;
}
declare const Collapse: (props: CollapseProps) => ReactElement;
declare const Empty: (props: {description: string}) => ReactElement;
interface ErrorBoundaryProps {
	fallback?: ReactNode;
	fallbackRender?: (props: ErrorFallbackProps) => ReactNode;
	onReset?: () => void;
	children?: ReactNode;
}
declare const ErrorBoundary: (props: ErrorBoundaryProps) => ReactElement;
declare const FilterIcon: () => ReactElement;
declare const InlineErrorState: (props: {retryLabel?: string; onRetry?: () => void}) => ReactElement;
interface LineChartProps {
	title: string;
	points: ChartPoint[];
}
declare const LineChart: (props: LineChartProps) => ReactElement;
declare const LineChartSkeleton: () => ReactElement;
declare const List: (props: {rows: readonly Row[]}) => ReactElement;
declare const LoadingFallback: (props: {ariaLabel?: string}) => ReactElement;
declare const Pagination: () => ReactElement;
declare const RecommendationSkeleton: () => ReactElement;
declare const ScreenErrorState: () => ReactElement;
declare const ScreenSkeleton: () => ReactElement;
interface SearchInputProps {
	value?: string;
	label?: string;
	onChange?: (value: string) => void;
}
declare const SearchInput: (props: SearchInputProps) => ReactElement;
declare const ShareLinkButton: (props: {href: string}) => ReactElement;
declare const Spinner: () => ReactElement;
interface TableProps<TRow extends Row = Row> {
	rows: readonly TRow[];
	columns?: TableColumn[];
	onRowSelect?: (rows: TRow[]) => void;
	onSave?: (formValues: ProductFormValues) => void;
}
declare const Table: <TRow extends Row>(props: TableProps<TRow>) => ReactElement;
interface TabsProps {
	children?: ReactNode;
}
declare const Tabs: (props: TabsProps) => ReactElement;
interface TreeProps {
	items?: TreeItem[];
	expandedItems?: string[];
	onExpandedItemsChange?: (itemIds: string[]) => void;
	selectedItems?: string | null;
	onSelectedItemsChange?: (itemId: string | null) => void;
}
declare const Tree: (props: TreeProps) => ReactElement;
interface PanelPartProps {
	children?: ReactNode;
}

declare const AppNavigation: () => ReactElement;
interface AppShellProps {
	children?: ReactNode;
}
interface ChartCardProps {
	className?: string;
	variant?: "default" | "compact" | "muted";
	option?: ChartOption;
	dailyCounts: DailyCount[];
}
declare const ChartCard: (props: ChartCardProps) => ReactElement;
declare const ChatComposer: (props: {onSubmit: (text: string) => void}) => ReactElement;
declare const ChatMessages: (props: {messages: ChatMessage[]}) => ReactElement;
declare const OrderTableChildRow: (props: {row: OrderRow}) => ReactElement;
declare const OrderTableHeader: (props: {sort: TableSort}) => ReactElement;
declare const OrderTableRow: (props: {row: OrderRow}) => ReactElement;
declare const ProductBrowseActions: () => ReactElement;
declare const ProductEditActions: () => ReactElement;
declare const ProductSearchField: () => ReactElement;
interface ProductStatusBadgeProps {
	children?: ReactNode;
}
interface ProductTableProps {
	children?: ReactNode;
}
interface ProfileDialogPartProps {
	children?: ReactNode;
}
interface ProfileDialogContextValue {
	isBodyOpen: boolean;
	toggleBody: () => void;
}
declare const ProfileDialogContext: Context<ProfileDialogContextValue | null>;
declare const ProfileDialog: {
	Root: (props: ProfileDialogPartProps) => ReactElement;
	Header: (props: ProfileDialogPartProps) => ReactElement;
	Body: (props: ProfileDialogPartProps) => ReactElement;
};
declare const ProfileSummary: (props: {profile: Profile}) => ReactElement;
interface UserCardProps {
	user: User;
	theme?: Theme;
	label?: string;
	onSave?: () => void;
}

declare const LegacyDatePicker: (props: {value: string; onChange: (value: string) => void}) => ReactElement;
interface MediaUploadPanelProps {
	files: File[];
}
declare const OrderFilterFields: () => ReactElement;
declare const OrderFilterPanel: () => ReactElement;
declare const ProductBulkActionBar: (props: {selectedRows?: ProductRow[]; label?: string}) => ReactElement;
declare const ProductCreateForm: () => ReactElement;
declare const ProductDetailChartSection: () => ReactElement;
declare const ProductFilterSection: (props: {
	keyword?: string;
	categoryId?: string;
	onKeywordChange?: Dispatch<string>;
	onCategoryIdChange?: Dispatch<string | undefined>;
}) => ReactElement;
declare const ProductList: () => ReactElement;
declare const ProductListSection: () => ReactElement;
interface ProductPanelProps {
	isVisible: boolean;
	children?: ReactNode;
}
declare const ProductRecommendationSection: () => ReactElement;
declare const ProductListRow: (props: {product: Product}) => ReactElement;
declare const ProductListRowDivider: () => ReactElement;
interface ProductListRowsProps {
	products: Product[];
}
declare const ProductSearchSection: () => ReactElement;
interface ProductListTableProps {
	rows: ProductRow[];
	editHrefBase?: string;
}
declare const ProductListTable: (props: ProductListTableProps) => ReactElement;
interface ProductTableSectionProps {
	heading?: ReactNode;
	title?: string;
	children?: ReactNode;
}
declare const ProductTableSection: (props: ProductTableSectionProps) => ReactElement;
declare const ProductTreeSection: () => ReactElement;
declare const DeleteProductButton: (props: {productId: string}) => ReactElement;

// ----------------------------------------------------------------------------------------
// 예제 세계관: API 클라이언트, 생성된 쿼리 훅, 뮤테이션, 스토어
// ----------------------------------------------------------------------------------------
type UseSuspenseQueryResult<TData> = import("@tanstack/react-query").UseSuspenseQueryResult<TData>;
type UseQueryResult<TData> = import("@tanstack/react-query").UseQueryResult<TData>;
type UseMutationResult<TData, TVariables> = import("@tanstack/react-query").UseMutationResult<TData, Error, TVariables>;
type NavigateFunction = import("react-router").NavigateFunction;
type Dispatch<T> = import("react").Dispatch<import("react").SetStateAction<T>>;
interface ApiResponse<T> {
	data: T;
}
type ProductListResponseDTO = ApiResponse<ProductListResponse>;
interface ApiQueryOptions<TResponse, TData> {
	query?: {
		select?: (response: ApiResponse<TResponse>) => TData;
	};
}
interface ApiMutationOptions<TData, TVariables> {
	mutation?: Pick<
		import("@tanstack/react-query").UseMutationOptions<TData, Error, TVariables>,
		"onSuccess" | "onError" | "onSettled"
	>;
}
interface ApiClient {
	get<T = unknown>(url: string, config?: {params?: unknown}): Promise<T>;
	post<T = unknown>(url: string, body?: unknown): Promise<T>;
}
declare const createClient: (options: {baseUrl?: string; timeoutMs?: number}) => ApiClient;
declare const client: ApiClient;
declare const queryClient: import("@tanstack/react-query").QueryClient;
declare const productListQueryKey: () => readonly unknown[];
declare const productSummaryQueryKey: () => readonly unknown[];
declare const productListQueryOptions: () => ExampleQueryOptions<ProductListResponse>;
declare const categoryListQueryOptions: () => ExampleQueryOptions<{categories: ProductCategory[]}>;
declare const productDetailSummaryQueryOptions: (productId: string) => ExampleQueryOptions<ProductSummary>;
declare const useProductListSuspense: <TData = ProductListResponse>(
	params?: {page?: number; keyword?: string},
	options?: ApiQueryOptions<ProductListResponse, TData>,
) => UseSuspenseQueryResult<TData>;
declare const useGetProductListSuspense: typeof useProductListSuspense;
declare const useProductTreeSuspense: <TData = ProductTreeResponse>(
	params?: Record<string, never>,
	options?: ApiQueryOptions<ProductTreeResponse, TData>,
) => UseSuspenseQueryResult<TData>;
declare const useUserGetItemSuspense: () => UseSuspenseQueryResult<User>;
declare const useProductList: () => UseQueryResult<ProductListResponse>;
declare const useProductQuery: (options: {client: ApiClient; pageSize: number}) => UseQueryResult<ProductListResponse>;
declare const useOrderQuery: (options: {pageSize: number}) => UseQueryResult<OrderRow[]>;
declare const useProductSave: (
	options?: ApiMutationOptions<Product, {data: ProductSaveRequest}>,
) => UseMutationResult<Product, {data: ProductSaveRequest}>;
declare const useProductCreate: (
	options?: ApiMutationOptions<Product, {data: ProductCreateRequest}>,
) => UseMutationResult<Product, {data: ProductCreateRequest}>;
declare const useProductRemove: () => UseMutationResult<void, {params: {productId: string}}>;
interface PermissionStore {
	canEditProduct: boolean;
	setCanEditProduct: (value: boolean) => void;
}
declare const usePermissionStore: {
	(): PermissionStore;
	<T>(selector: (state: PermissionStore) => T): T;
};
interface ThemeStore {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}
declare const useThemeStore: () => ThemeStore;
interface ChatContextValue {
	isEmpty: boolean;
	emptyMessage: string;
	messages: ChatMessage[];
	send: (text: string) => void;
}
declare const useChatContext: () => ChatContextValue;
interface FormHandle<T> {
	values: T;
}
declare const useForm: <T>() => FormHandle<T>;
declare const navigate: NavigateFunction;

// ----------------------------------------------------------------------------------------
// 예제 세계관: 보조 함수
// ----------------------------------------------------------------------------------------
interface ProductFilter {
	status: ProductStatusFilter;
	keyword: string;
}
interface SearchIndex {
	search(keyword: string): Product[];
}
declare const fetchProducts: (params: {pageSize: number}) => Promise<ProductListResponse>;
declare const isProductFilter: (value: unknown) => value is ProductFilter;
declare const parseStoredProductFilter: (raw: string | null) => ProductFilter | undefined;
declare const matchRow: (row: Row, keyword: string) => boolean;
declare const mountChart: (container: HTMLElement) => ChartInstance;
declare const notify: (userId: string) => void;
declare const reportEmptySearch: (keyword: string) => void;
declare const saveRecord: (draft: Draft) => Promise<Draft>;
declare const saveProduct: (request: ProductSaveRequest & {attachments?: string[]}) => Promise<Product>;
declare const uploadAttachments: (files: File[]) => Promise<string[]>;
declare const subscribeToProductChanges: {
	(productIds: string[]): () => void;
	(productId: string, onChange: (change: ProductChange) => void): () => void;
};
declare const subscribeToUserJoined: (onJoined: (userId: string) => void) => () => void;
declare const toChartPoints: (counts: DailyCount[]) => ChartPoint[];
declare const toProductRows: (response: ProductListResponseDTO) => ProductRow[];
declare const toSearchIndex: (products: Product[]) => SearchIndex;
declare const toSubmitErrorMessage: (error: unknown) => string;
declare const toTableColumns: (columns: TableColumn[]) => TableColumn[];
declare const toTickTime: (index: number) => string;
declare const toTreeData: (node: ProductCategoryNode) => TreeItem;
declare const toggleSelection: (id?: string) => void;
declare const toProductCreateRequest: (values: ProductFormValues) => ProductCreateRequest;
declare const toProductSaveRequest: (values: ProductFormValues, attachmentIds?: string[]) => ProductSaveRequest;
declare const toSeriesColorToken: (role: string, index: number) => string;
declare const formatAmount: (amount: Amount) => string;
declare const formatPercent: (rate: number | null) => string;
declare const handleListItemClick: (productId: string) => MouseEventHandler<HTMLButtonElement>;
declare const handleChange: (value: string) => void;
declare const handleFilterToggleClick: MouseEventHandler<HTMLButtonElement>;
declare const setPage: Dispatch<number>;
declare const setSelectedCategoryId: Dispatch<string>;
declare const setSelectedUserIds: Dispatch<string[]>;
declare const setStatusFilter: Dispatch<ProductStatusFilter>;
declare const setSubmitErrorMessage: Dispatch<string | null>;
declare const setVisibleRowCount: Dispatch<number>;

// ----------------------------------------------------------------------------------------
// 조각 예제가 바깥에서 받는 변수, 이름만 선언
//
// 조각은 컴포넌트 본문이나 함수 본문만 보여 줌 → 바깥에서 받는 값은 선언으로 대신
// ----------------------------------------------------------------------------------------
interface FragmentProps {
	columns: TableColumn[];
	formValues: ProductFormValues;
	isSelected: boolean;
	keyword: string;
	onChange: (change: ProductChange) => void;
	onKeywordChange: ChangeEventHandler<HTMLInputElement>;
	productId: string;
	products: Product[];
	variant: "fill" | "outline" | "default";
	view: "chart" | "table";
}
declare const props: FragmentProps;
declare const amount: Amount;
declare const points: ChartPoint[];
declare const seriesItems: ChartSeries[];
declare const summary: ProductSummary;
declare const summaryText: string;
declare const dailyCounts: DailyCount[];
declare const productRows: ProductRow[];
declare const responseProductSearch: ApiResponse<{rows?: ProductRow[]}>;
declare const productSummary: {averageRate: string};
declare const product: Product;
declare const archivedProducts: Product[];
declare const selectedProduct: Product | null;
declare const productId: string;
declare const order: Order;
declare const rows: OrderRow[];
declare const expandedRows: OrderRow[];
declare const sort: TableSort;
declare const user: User;
declare const users: User[];
declare const session: Session;
declare const settings: Settings;
declare const formValues: ProductFormValues;
declare const query: {pageSize?: number};
declare const urlParsers: {
	keyword: ReturnType<typeof parseAsString.withDefault>;
	categoryId: ReturnType<typeof parseAsString.withDefault>;
	page: ReturnType<typeof parseAsInteger.withDefault>;
};
declare const urlParams: {keyword: string; categoryId: string; page: number};
declare const keyword: string;
declare const deferredKeyword: string;
declare const value: string;
declare const tone: Tone;
declare const variant: string;
declare const target: URL;
declare const requestUrl: URL;
declare const issuedAt: string;
declare const today: string;
declare const rawKey: string;
declare const savedFilter: ProductFilter;
declare const selectedLocale: string;
declare const rowOffset: number;
declare const pageCount: number;
declare const draftFiles: File[];
declare const isActive: boolean;
declare const isCritical: boolean;
declare const isDense: boolean;
declare const isDisabled: boolean;
declare const isSelected: boolean;
declare const ownerId: string;
declare const ownerIds: string[];
declare const allowedProductIds: string[];
declare const watchedProductIds: string[];
declare const canInviteMembers: boolean;
declare const canManageItems: boolean;
declare const response: ApiResponse<ProductListResponse>;
declare const responseDateTime: string;
declare const responseProductListSuspense: UseSuspenseQueryResult<ProductListResponse>;
declare const responseProductSearchSuspense: UseSuspenseQueryResult<ProductListResponse>;
declare const responseProductSummarySuspense: UseSuspenseQueryResult<ProductSummary>;
declare const responseAccessBootstrapSuspense: UseSuspenseQueryResult<Capabilities>;
declare const responseTableColumnsSuspense: UseSuspenseQueryResult<{columns: TableColumn[]}>;
declare const responseOrderSummarySuspense: UseSuspenseQueryResult<{rows: OrderRow[]; filters: OrderFilters}>;
declare const mutationProductSave: UseMutationResult<Product, {data: ProductSaveRequest}>;
declare const mutationProductRemove: UseMutationResult<void, {params: {productId: string}}>;
declare const mutationAttachmentUpload: UseMutationResult<{attachmentIds: string[]}, {files: File[]}>;
declare const mutationMediaSave: UseMutationResult<void, {data: unknown}>;

// ----------------------------------------------------------------------------------------
// 아직 남은 이름
// ----------------------------------------------------------------------------------------
type ExampleQueryOptions<T> = {queryKey: readonly unknown[]; queryFn: () => Promise<T>};
declare const products: Product[];

// ----------------------------------------------------------------------------------------
// 예제 세계관: `@/` 모듈, 예제가 import 하는 것만 선언
//
// 모듈 안에서 같은 이름을 다시 내보내려고 Shape, Component 별칭을 거침
// ----------------------------------------------------------------------------------------
type ButtonPropsShape = ButtonProps;
type ChartSeriesShape = ChartSeries;
type PanelPartComponent = (props: PanelPartProps) => ReactElement;
type ProfileDialogPartComponent = (props: ProfileDialogPartProps) => ReactElement;
type LineChartComponent = (props: LineChartProps) => ReactElement;
type TabsComponent = (props: TabsProps) => ReactElement;
type ProductTableSectionComponent = (props: ProductTableSectionProps) => ReactElement;
interface TabsContextValue {
	selectedId: string;
	onSelect: (id: string) => void;
}
declare module "@/component/ui/button/button" {
	export type ButtonProps = ButtonPropsShape;
	export const Button: (props: ButtonPropsShape) => ReactElement;
}
declare module "@/component/ui/line-chart/_constant/series" {
	export const chart_series_line: {readonly id: "line"; readonly role: "line"};
}
declare module "@/component/ui/line-chart/_type/chart-series" {
	export type ChartSeries = ChartSeriesShape;
}
declare module "@/component/ui/line-chart/line-chart" {
	export const LineChart: LineChartComponent;
}
declare module "@/component/ui/panel/panel-body" {
	export const PanelBody: PanelPartComponent;
}
declare module "@/component/ui/panel/panel-footer" {
	export const PanelFooter: PanelPartComponent;
}
declare module "@/component/ui/panel/panel-header" {
	export const PanelHeader: PanelPartComponent;
}
declare module "@/component/ui/panel/panel-root" {
	export const PanelRoot: PanelPartComponent;
}
declare module "@/component/ui/panel/panel" {
	export const Panel: {
		Root: PanelPartComponent;
		Header: PanelPartComponent;
		Body: PanelPartComponent;
		Footer: PanelPartComponent;
	};
}
declare module "@/component/ui/tabs/_hook/use-tabs" {
	export const TabsContext: Context<TabsContextValue | null>;
}
declare module "@/component/ui/tabs/tabs" {
	export const Tabs: TabsComponent;
}
declare module "@/component/widget/product-table/product-table" {
	export const ProductTable: (props: ProductTableProps) => ReactElement;
}
declare module "@/component/widget/product-toolbar/product-toolbar-root" {
	export const ProductToolbarRoot: (props: {children?: ReactNode}) => ReactElement;
}
declare module "@/component/widget/product-toolbar/product-toolbar" {
	export const ProductToolbar: {
		Root: (props: {children?: ReactNode}) => ReactElement;
	};
}
declare module "@/component/widget/profile-dialog/profile-dialog-body" {
	export const ProfileDialogBody: ProfileDialogPartComponent;
}
declare module "@/component/widget/profile-dialog/profile-dialog-header" {
	export const ProfileDialogHeader: ProfileDialogPartComponent;
}
declare module "@/component/widget/profile-dialog/profile-dialog-root" {
	export const ProfileDialogRoot: ProfileDialogPartComponent;
}
declare module "@/config/env" {
	export const env_api_base_url: string;
}
declare module "@/constant/pagination" {
	export const pagination_default_page_size: number;
}
declare module "@/constant/retry" {
	export const retry_max_attempts: number;
}
declare module "@/page/(main)/orders/orders-page" {
	export const OrdersPage: () => ReactElement;
}
declare module "@/page/(main)/main-outlet" {
	export const MainOutlet: () => ReactElement;
}
declare module "@/page/(main)/products/products-page" {
	export const ProductsPage: () => ReactElement;
}
declare module "@/page/root-outlet" {
	export const RootOutlet: () => ReactElement;
}
declare module "@/page/product-detail/_function/to-summary" {
	export const toSummary: (response: ApiResponse<ProductSummary>) => ProductSummary;
}
declare module "@/page/(main)/product-detail/product-detail-page" {
	export const ProductDetailPage: () => ReactElement;
}
declare module "@/page/product-detail/review-section" {
	export const ReviewSection: () => ReactElement;
}
declare module "@/page/product-detail/product-table-section" {
	export const ProductTableSection: ProductTableSectionComponent;
}
declare module "@/page/profile/_function/to-profile-save-request" {
	export const toProfileSaveRequest: (values: ProfileFormValues) => {displayName: string};
}
declare module "@/type/user-profile" {
	export type UserProfile = Profile;
}
declare module "@/util/date/format-display-date" {
	export const formatDisplayDate: (value: string) => string;
}

// ----------------------------------------------------------------------------------------
// 테스트 예제가 쓰는 앱 계약, 러너 API는 설치된 패키지의 실제 타입
// ----------------------------------------------------------------------------------------
declare module "@/util/number/format-quantity" {
	export const formatQuantity: (value: number | null) => string;
}
declare module "@/util/date/normalize-date-range" {
	// ----------------------------------------------------------------------------------------
	// 기간 보정의 입력과 출력, 입력에서는 두 날짜 모두 빈 문자열 허용
	// ----------------------------------------------------------------------------------------
	export interface DateRange {
		startDate: string;
		endDate: string;
	}
	export const normalizeDateRange: (range: DateRange) => DateRange;
}
declare module "@/service/orders" {
	export interface OrderDto {
		id: string;
		quantity: number;
		status: "open" | "closed";
	}
	export const getOrder: (id: string) => Promise<OrderDto>;
}
declare module "@/page/orders/_function/to-order-rows" {
	export interface OrderRow {
		id: string;
		quantityLabel: string;
	}
	export const toOrderRows: (orders: import("@/service/orders").OrderDto[]) => OrderRow[];
}

// ----------------------------------------------------------------------------------------
// 생성 API 예제 계약, 실제 프로젝트에서는 Kubb 산출물의 이름과 signature 확인
// ----------------------------------------------------------------------------------------
declare module "@/service/__kubb/type/order-dto" {
	export type OrderDto = import("@/service/orders").OrderDto;
}
declare module "@/service/__kubb/type/orders/get-orders" {
	// ----------------------------------------------------------------------------------------
	// 주문 목록 API의 성공 본문
	//
	// items: 조회한 페이지의 주문만
	// total: 모든 페이지를 합친 주문 수
	// updatedAt: 목록 기준 시각
	// ----------------------------------------------------------------------------------------
	export interface GetOrdersStatus200 {
		items: import("@/service/__kubb/type/order-dto").OrderDto[];
		total: number;
		page: number;
		updatedAt: string;
	}

	// ----------------------------------------------------------------------------------------
	// 주문 조회의 서버 오류 본문, message 는 사용자에게 전달할 오류 메시지
	// ----------------------------------------------------------------------------------------
	export interface GetOrdersStatus500 {
		message: string;
	}
}
declare module "@/service/__kubb/mock/order-dto" {
	export const createOrderDto: (data?: Partial<import("@/service/__kubb/type/order-dto").OrderDto>) => import("@/service/__kubb/type/order-dto").OrderDto;
}
declare module "@/service/__kubb/mock/orders/get-orders" {
	export const createGetOrdersStatus200: (data?: Partial<import("@/service/__kubb/type/orders/get-orders").GetOrdersStatus200>) => import("@/service/__kubb/type/orders/get-orders").GetOrdersStatus200;
	export const createGetOrdersStatus500: (data?: Partial<import("@/service/__kubb/type/orders/get-orders").GetOrdersStatus500>) => import("@/service/__kubb/type/orders/get-orders").GetOrdersStatus500;
}
declare module "@/service/__kubb/msw/orders/get-orders-handler" {
	export const getOrdersHandler: (data?: import("@/service/__kubb/type/orders/get-orders").GetOrdersStatus200 | import("msw").HttpResponseResolver) => import("msw").RequestHandler;
	export const getOrdersHandlerResponse200: (data: import("@/service/__kubb/type/orders/get-orders").GetOrdersStatus200) => Response;
	export const getOrdersHandlerResponse500: (data: import("@/service/__kubb/type/orders/get-orders").GetOrdersStatus500) => Response;
}
declare module "@/service/__kubb/msw/handlers" {
	export const handlers: import("msw").RequestHandler[];
}
declare module "@/service/mock/mock-orders" {
	export const mockOrders: typeof import("./testing/examples/network-compose-generated-contracts-through-owned-builders/02-correct").mockOrders;
}
declare module "@/service/msw/orders/get-orders" {
	export const getOrdersMockHandler: typeof import("./testing/examples/network-compose-generated-contracts-through-owned-builders/03-correct").getOrdersMockHandler;
}
declare module "@/service/msw/handlers" {
	export const mockHandlers: typeof import("./testing/examples/network-compose-generated-contracts-through-owned-builders/04-correct").mockHandlers;
}
declare module "@/service/msw/_constant/mock" {
	export const mock_unhandled_api_prefix: typeof import("./testing/examples/network-detect-unhandled-api-requests/03-correct").mock_unhandled_api_prefix;
}
declare module "@test/_fixture/to-mock-route" {
	export const toMockRoute: typeof import("./testing/examples/network-share-handlers-across-browser-and-node/03-correct").toMockRoute;
}
declare module "@test/_fixture/test" {
	export const test: typeof import("./testing/examples/network-share-handlers-across-browser-and-node/04-correct").test;
	export const expect: typeof import("@playwright/test").expect;
}
declare module "@/app-providers" {
	export const AppProviders: (props: {children: ReactNode}) => ReactElement;
}
declare module "@test/_gallery/story-route" {
	export const StoryRoute: (props: {entry: string; path: string; children: ReactNode}) => ReactElement;
}
declare module "@/component/widget/order-dialog/order-dialog" {
	export const OrderDialog: (props: {orderId: string; onSave: (orderId: string) => void}) => ReactElement;
}

// ----------------------------------------------------------------------------------------
// 컴포넌트 테스트 예제가 렌더하는 부품
//
// DatePicker: 달력은 팝업이라 play 가 canvas 바깥 screen 에서 찾음, 오늘 버튼은 getToday 를 읽음
// getToday: 오늘 날짜를 `YYYY-MM-DD` 로 돌려주는 모듈, story 는 sb.mock 으로 바꿈
// BarcodeScanner: 카메라가 있어야 스캔 화면이 열림
// ----------------------------------------------------------------------------------------
interface DatePickerProps {
	label: string;
	value: string;
	onChange?: (value: string) => void;
}
interface BarcodeScannerProps {
	onScan: (code: string) => void;
}
declare module "@/component/ui/date-picker/date-picker" {
	export const DatePicker: (props: DatePickerProps) => ReactElement;
}
declare module "@/component/widget/barcode-scanner/barcode-scanner" {
	export const BarcodeScanner: (props: BarcodeScannerProps) => ReactElement;
}
declare module "@/util/date/get-today" {
	export const getToday: () => string;
}

// ----------------------------------------------------------------------------------------
// figma 예제: 라이브러리 master의 축을 프롭으로 옮긴 부품
// ----------------------------------------------------------------------------------------
declare module "@/component/ui/select/select" {
	export interface SelectOption {
		value: string;
		label: string;
	}
	export interface SelectProps {
		size: "small" | "medium" | "large";
		value: string;
		options: SelectOption[];
		disabled?: boolean;
		onChange: (value: string) => void;
	}
	export const Select: (props: SelectProps) => ReactElement;
}

// ----------------------------------------------------------------------------------------
// Storybook 예제가 렌더하는 부품
//
// 서버 데이터는 화면이 조회해 프롭으로 전달 → story는 args로 수신
// DatePicker, getToday 는 위 컴포넌트 테스트 절의 선언을 함께 씀
// ----------------------------------------------------------------------------------------
interface TextFieldProps {
	label: string;
	value: string;
	placeholder?: string;
	error?: boolean;
	helperText?: string;
	disabled?: boolean;
	onChange: (value: string) => void;
}
declare module "@/component/ui/text-field/text-field" {
	export const TextField: (props: TextFieldProps) => ReactElement;
}
declare module "@/component/ui/search-input/search-input" {
	export const SearchInput: (props: SearchInputProps) => ReactElement;
}
declare module "@/component/widget/user-card/user-card" {
	export const UserCard: (props: UserCardProps) => ReactElement;
}
