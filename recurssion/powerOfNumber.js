function powerOfNumber(n, p) {
  if (p === 0) {
    return 1;
  }
  if (p === 1) {
    return n;
  }
  return n * powerOfNumber(n, p - 1);
}
console.log(powerOfNumber(20, 3));
