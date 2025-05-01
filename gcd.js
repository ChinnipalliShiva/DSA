function GCD(a, b) {
  let least = b > a ? a : b;
  let gcd;
  for (let i = 0; i <= least; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

console.log(GCD(24, 36));

function GCDO(a, b) {
  while (b !== 0) {
    let temp = b;
    b = b % a;
    a = temp;
  }
  return a;
}

console.log(GCDO(24, 36));
