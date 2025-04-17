// function ArrayFibinocci(n) {
//   let fib = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   console.log(fib);
// }
// ArrayFibinocci(10);

function StringFibinocci(n) {
  let first = 0;
  let sec = 1;
  console.log(first);
  console.log(sec);
  for (let i = 2; i < n; i++) {
    let sum = first + sec;
    console.log(sum);
    first = sec;
    sec = sum;
  }
}
StringFibinocci(10);
