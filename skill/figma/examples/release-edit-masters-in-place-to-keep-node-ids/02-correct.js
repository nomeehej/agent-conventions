const button = await figma.getNodeByIdAsync(buttonSetId);
const labelKey = Object.keys(button.componentPropertyDefinitions).find((key) => key.startsWith("Label#"));
const hovers = button.children.filter((variant) => variant.name.includes("State=Hover"));

for (const hover of hovers) {
	// [!code ++]
	const pressed = hover.clone();

	button.appendChild(pressed);
	pressed.name = hover.name.replace("State=Hover", "State=Pressed");
	pressed.description = "코드에 없는 제안. Hover보다 한 단계 진한 action/primary-hover";
	pressed.findOne((node) => node.name === "Label").componentPropertyReferences = {characters: labelKey};
}
