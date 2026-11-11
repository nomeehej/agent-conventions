const select = await figma.getNodeByIdAsync(selectSetId);
const hover = select.children.find((variant) => variant.name === "Size=Medium, Value=Filled, State=Hover");
const disabled = hover.clone();

select.appendChild(disabled);
// [!code error]
disabled.name = "Size=Medium, Value=Filled, State=Disabled";
