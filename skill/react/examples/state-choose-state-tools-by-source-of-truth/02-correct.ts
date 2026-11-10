const [isOpen, setIsOpen] = useState(false);
// [!code ++]
const themeStore = useThemeStore();

/**
 * 사용자 상세 조회
 * {@link /api/user}
 */
const responseUserGetItemSuspense = useUserGetItemSuspense();
