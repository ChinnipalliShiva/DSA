function subString(a, b) {
  let small = a.length > b.length ? b : a;
  let data = [];
  for (let i = 0; i < small.length; i++) {
    let word = "";
    for (let j = 0; j < b.length; j++) {
      if (a[i] === a[j]) {
        word = word + a[i];
      }
    }
  }
}

console.log(subString("zabcf", "abcdef"));
