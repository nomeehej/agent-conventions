import type {ButtonProps} from "@/component/ui/button/button";

/**
 * 저장 버튼 클릭 기본 동작 차단
 */
const handleSubmitClick: ButtonProps["onClick"] = (event) => {
	event.preventDefault();
};
