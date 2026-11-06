import type {Ref} from "react";

export interface StatusBadgeProps {
	ref?: Ref<HTMLSpanElement>;
	label: string;
}

export const StatusBadge = (props: StatusBadgeProps) => {
	return <span ref={props.ref}>{props.label}</span>;
};
