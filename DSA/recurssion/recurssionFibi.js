// //find fibinocci no at given index
// function recurssionFibi(n) {
//   if (n < 2) {
//     return n;
//   }
//   return recurssionFibi(n - 1) + recurssionFibi(n - 2);
// }

// console.log(recurssionFibi(1));
// console.log(recurssionFibi(6));
// console.log(recurssionFibi(11));
// console.log(recurssionFibi(3));
// console.log(recurssionFibi(10));
// console.log(recurssionFibi(12));

//find all fibinocci no
function recursionFibiSeq(first = 0, sec = 1, final) {
  if (final <= 0) {
    return [];
  }
  const nextFibi = first;
  return [nextFibi, ...recursionFibiSeq(sec, first + sec, final - 1)];
}

console.log(recursionFibiSeq(0, 1, 6));
console.log(recursionFibiSeq(0, 1, 8));
console.log(recursionFibiSeq(0, 1, 10));
console.log(recursionFibiSeq(0, 1, 11));
console.log(recursionFibiSeq(0, 1, 12));
console.log(recursionFibiSeq(0, 1, 20));

