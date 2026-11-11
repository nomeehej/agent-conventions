// component/widget/profile-dialog/profile-dialog.tsx
import {ProfileDialogBody} from "@/component/widget/profile-dialog/profile-dialog-body";
import {ProfileDialogHeader} from "@/component/widget/profile-dialog/profile-dialog-header";
import {ProfileDialogRoot} from "@/component/widget/profile-dialog/profile-dialog-root";

export const ProfileDialog = {
	Root: ProfileDialogRoot,
	Header: ProfileDialogHeader,
	Body: ProfileDialogBody,
} as const;
