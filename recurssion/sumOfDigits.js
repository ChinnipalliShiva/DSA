function sumOfDigits(n, sum = 0) {
  if (n === 0) {
    return sum;
  }
  sum = sum + (n % 10);
  return sumOfDigits(Math.floor(n / 10), sum);
}
console.log(sumOfDigits(123));
