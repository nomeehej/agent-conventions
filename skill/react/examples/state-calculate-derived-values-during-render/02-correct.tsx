const [selectedIds, setSelectedIds] = useState<string[]>([]);

// [!code ++]
return <SelectedCountBadge count={selectedIds.length} />;
