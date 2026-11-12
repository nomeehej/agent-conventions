// component/widget/profile-dialog/profile-dialog-root.tsx
import {clsx} from "clsx";

export interface ProfileDialogRootProps {
	children: ReactNode;
}

// ----------------------------------------------------------------------------------------
// 대화상자 틀, 나머지 부품은 이 안에서만 렌더
// ----------------------------------------------------------------------------------------
export const ProfileDialogRoot = (props: ProfileDialogRootProps) => <section className={clsx("profileDialog__root")}>{props.children}</section>;
