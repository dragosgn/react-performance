let a = 10000;
let colors = [];
let i;

for (i = 0; i < a; i++) {
  colors.push("#" + Math.floor(Math.random() * 16777215).toString(16));
}

export default colors.map((color, index) => ({ id: index, color: color }));
