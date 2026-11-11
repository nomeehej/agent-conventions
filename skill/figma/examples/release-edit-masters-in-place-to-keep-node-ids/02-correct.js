const button_large_height = 40;
const button = await figma.getNodeByIdAsync(buttonSetId);
const labelKey = Object.keys(button.componentPropertyDefinitions).find((key) => key.startsWith("Label#"));
const mediums = button.children.filter((variant) => variant.name.includes("Size=Medium"));

for (const medium of mediums) {
	// [!code ++]
	const large = medium.clone();
	const label = large.findOne((node) => node.name === "Label");

	button.appendChild(large);
	large.name = medium.name.replace("Size=Medium", "Size=Large");
	large.description = "코드에 없는 제안. 같은 묶음 입력 부품의 Large 높이";
	large.resize(large.width, button_large_height);
	label.componentPropertyReferences = {...label.componentPropertyReferences, characters: labelKey};
}
