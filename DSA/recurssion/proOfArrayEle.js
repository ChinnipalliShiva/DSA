function A(a) {
  if (a.length <= 0) {
    return 1
  }
  let l = a.length;
  return a[l - 1] * A(a.slice(0, l- 1));
}

console.log(A([4, 5,3,2,10]));

// function B(a, index) {
//   console.log(a, index);
//   if (a.length === 1) {
//     return a[0];
//   }
//   let item = a[index]
//   a.shift(index)
//   console.log("2 : ",item,a)
//   return item * B(a, index + 1);
// }
// console.log(B([4, 5, 6], 0));
