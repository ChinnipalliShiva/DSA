function product(a) {
  let maxPro = 0;
  for (i = 0; i < a.length - 1; i++) {
    if (a[i] * a[i + 1] > maxPro) {
      maxPro = a[i] * a[i + 1];
    }
  }
  return maxPro;
}
console.log(product([1, 2, 3, 4, 5])); // 20
console.log(product([1, 2, 3, 4, 5, 6])); // 30
