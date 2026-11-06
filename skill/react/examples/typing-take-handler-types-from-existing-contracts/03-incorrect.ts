// [!code error]
import type {ButtonProps as MuiButtonProps} from "@mui/material";

// [!code error]
const handleSubmitClick: MuiButtonProps["onClick"] = (event) => {
	event.preventDefault();
};
