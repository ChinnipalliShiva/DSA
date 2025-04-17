function range(start, end) {
  debugger;
  if (start === end) {
    return [end];
  }
  return [start, ...range(start + 1, end)];
}

console.log(range(0, 5));
// console.log(range(0,5)) => [0]  && [1] && [2] && [3] && [4] && 
