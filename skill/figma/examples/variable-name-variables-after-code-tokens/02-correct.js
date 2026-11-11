const colors = await figma.variables.getLocalVariableCollectionsAsync();
const color = colors.find((collection) => collection.name === "color");
const variables = await figma.variables.getLocalVariablesAsync("COLOR");
const white = variables.find((variable) => variable.name === "common/white");
// [!code ++]
const surface = figma.variables.createVariable("bg/surface", color, "COLOR");

// [!code ++]
surface.setValueForMode(color.defaultModeId, figma.variables.createVariableAlias(white));
// [!code ++]
surface.scopes = ["FRAME_FILL", "SHAPE_FILL"];
// [!code ++]
surface.setVariableCodeSyntax("WEB", "var(--app-color-surface)");
