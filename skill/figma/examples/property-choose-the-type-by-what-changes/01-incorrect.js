const textField = await figma.getNodeByIdAsync(textFieldSetId);
const base = textField.defaultVariant;

for (const icon of ["Search", "Calendar", "Clock"]) {
	for (const suffix of ["On", "Off"]) {
		const variant = base.clone();

		textField.appendChild(variant);
		// [!code error]
		variant.name = `Size=Medium, Icon=${icon}, Suffix=${suffix}, State=Default`;
	}
}
