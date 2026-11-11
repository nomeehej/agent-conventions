const textField = await figma.getNodeByIdAsync(textFieldSetId);
const searchIcon = await figma.getNodeByIdAsync(searchIconId);
// [!code ++]
const iconKey = textField.addComponentProperty("Icon", "INSTANCE_SWAP", searchIcon.id);
// [!code ++]
const suffixKey = textField.addComponentProperty("Suffix", "BOOLEAN", false);
// [!code ++]
const suffixTextKey = textField.addComponentProperty("Suffix text", "TEXT", "단위");

for (const variant of textField.children) {
	const icon = variant.findOne((node) => node.name === "Icon");
	const suffix = variant.findOne((node) => node.name === "Suffix");

	icon.componentPropertyReferences = {mainComponent: iconKey};
	suffix.componentPropertyReferences = {visible: suffixKey, characters: suffixTextKey};
}
