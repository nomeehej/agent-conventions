const variables = await figma.variables.getLocalVariablesAsync();
const surface = variables.find((variable) => variable.name === "bg/surface");
const border = variables.find((variable) => variable.name === "border/control");
const radius = variables.find((variable) => variable.name === "radius/control");
const textStyles = await figma.getLocalTextStylesAsync();
const body = textStyles.find((style) => style.name === "body-14/regular");
const box = variant.findOne((node) => node.name === "Box");
const value = variant.findOne((node) => node.name === "Value");

// [!code ++]
box.fills = [figma.variables.setBoundVariableForPaint(box.fills[0], "color", surface)];
// [!code ++]
box.strokes = [figma.variables.setBoundVariableForPaint(box.strokes[0], "color", border)];

for (const corner of ["topLeftRadius", "topRightRadius", "bottomLeftRadius", "bottomRightRadius"]) {
	box.setBoundVariable(corner, radius);
}

// [!code ++]
await value.setTextStyleIdAsync(body.id);
