function PowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n % 2 === 0) {
    n = n / 2;
  }
  return n === 1;
}

console.log(PowerOfTwo(1));
console.log(PowerOfTwo(16));
console.log(PowerOfTwo(32));
console.log(PowerOfTwo(30));
console.log(PowerOfTwo(64));
console.log("--------------------------------");

//case2
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false|
