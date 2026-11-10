const [isOpen, setIsOpen] = useState(false);
// [!code ++]
const themeStore = useThemeStore();

// ----------------------------------------------------------------------------------------
// 사용자 상세 조회
//
// 엔드포인트: /api/user
// ----------------------------------------------------------------------------------------
const responseUserGetItemSuspense = useUserGetItemSuspense();
