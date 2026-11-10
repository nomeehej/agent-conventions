const [isOpen, setIsOpen] = useState(false);

// [!code error]
<Button onClick={(_event) => setIsOpen(true)}>열기</Button>;
