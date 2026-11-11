const colors = await figma.variables.getLocalVariableCollectionsAsync();
const color = colors.find((collection) => collection.name === "color");
// [!code error]
const surface = figma.variables.createVariable("Surface White", color, "COLOR");

// [!code error]
surface.setValueForMode(color.defaultModeId, {r: 1, g: 1, b: 1, a: 1});
