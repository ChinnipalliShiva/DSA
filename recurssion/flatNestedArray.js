function flatArray(a) {
  if (!Array.isArray(a)) {
    return a;
  }
  let result = [];
  for (let i of a) {
    result = result.concat(flatArray(i));
  }
  return result;
}
console.log(flatArray([1, [2, [3, 4, [9]]]]));
