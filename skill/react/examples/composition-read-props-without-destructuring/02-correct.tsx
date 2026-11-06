const UserCard = (props: UserCardProps) => {
// [!code ++]
	return <button type="button" onClick={props.onSave}>{props.label}</button>;
};
