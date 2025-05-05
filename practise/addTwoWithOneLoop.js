let a = 9;
let b = [9, 11, 7, 10, 2];
let c = new Set();
for (let i of b) {
  if (c.has(i)) {
    console.log("i", i, a - i);
  }
  c.add(a - i);
}
