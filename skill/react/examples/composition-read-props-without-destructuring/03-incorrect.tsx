const UserCard = ({ label, onSave }: UserCardProps) => {
	return <button onClick={onSave}>{label}</button>;
};
