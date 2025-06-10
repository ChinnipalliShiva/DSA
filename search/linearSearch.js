function LinearSearch(k, a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === k) return i;
  }
}

let arr = [2, 7, 5, 8, 43, 65, 78, 65, 8, 4, 32, 76, 87, 5, 32, 53, 8, 87, 4];
console.log(LinearSearch(43, arr));
console.log(LinearSearch(53, arr));
console.log(LinearSearch(32, arr));
console.log(LinearSearch(78, arr));
console.log(LinearSearch(43, arr));

