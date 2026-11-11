const select = await figma.getNodeByIdAsync(selectSetId);
const valueTextKey = Object.keys(select.componentPropertyDefinitions).find((key) => key.startsWith("Value text#"));
const hover = select.children.find((variant) => variant.name === "Size=Medium, Value=Filled, State=Hover");
const disabled = hover.clone();

select.appendChild(disabled);
disabled.name = "Size=Medium, Value=Filled, State=Disabled";
// [!code ++]
disabled.findOne((node) => node.name === "Value").componentPropertyReferences = {characters: valueTextKey};
