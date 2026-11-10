const [isOpen, setIsOpen] = useState(false);
// [!code error]
const [theme, setTheme] = useState<Theme>("light");

const responseUserGetItemSuspense = useUserGetItemSuspense();
// [!code error]
const [userName, setUserName] = useState(responseUserGetItemSuspense.data.name);
