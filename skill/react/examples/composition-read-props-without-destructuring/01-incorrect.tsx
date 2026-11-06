const UserCard = (props: UserCardProps) => {
// [!code error]
	const { label, onSave } = props;
// [!code error]
	return <button type="button" onClick={onSave}>{label}</button>;
};
