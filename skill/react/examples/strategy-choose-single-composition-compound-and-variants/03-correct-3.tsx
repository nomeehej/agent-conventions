// component/widget/profile-dialog/_profile-dialog-root.tsx
import {clsx} from "clsx";

import type {ProfileDialogPartProps} from "@/component/widget/profile-dialog/_type/profile-dialog-part";

/**
 * 대화상자 틀. 나머지 부품은 이 안에서만 그림
 */
export const ProfileDialogRoot = (props: ProfileDialogPartProps) => {
	return <section className={clsx("profileDialog__root")}>{props.children}</section>;
};
