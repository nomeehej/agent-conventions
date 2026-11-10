const [isOpen, setIsOpen] = useState(false);
// [!code error]
const [theme, setTheme] = useState<Theme>("light");

// ----------------------------------------------------------------------------------------
// 사용자 상세 조회
//
// 엔드포인트: /api/user
// ----------------------------------------------------------------------------------------
const responseUserGetItemSuspense = useUserGetItemSuspense();
// [!code error]
const [userName, setUserName] = useState(responseUserGetItemSuspense.data.name);
