function Permutation(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i] !== arr[j] && data.push(arr[i] + arr[j]);
    }
  }
  return data;
}

console.log(Permutation(["A", "B", "C"]));

function Combination(arr) {
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      data.push(arr[i] + arr[j]);
    }
  }
  return data;
}

console.log(Combination(["A", "B", "C"]));
