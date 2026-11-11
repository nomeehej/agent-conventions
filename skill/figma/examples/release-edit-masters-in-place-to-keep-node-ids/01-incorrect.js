const button = await figma.getNodeByIdAsync(buttonSetId);
const section = button.parent;

// [!code error]
button.remove();
figma.combineAsVariants(buttonVariants.map(drawButtonVariant), section);
