const box = variant.findOne((node) => node.name === "Box");
const value = variant.findOne((node) => node.name === "Value");

// [!code error]
box.fills = [{type: "SOLID", color: {r: 1, g: 1, b: 1}}];
// [!code error]
box.strokes = [{type: "SOLID", color: {r: 0.81, g: 0.83, b: 0.85}}];
// [!code error]
box.cornerRadius = 4;
// [!code error]
value.fontSize = 14;
