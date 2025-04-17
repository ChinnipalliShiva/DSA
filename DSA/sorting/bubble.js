function BubbleSort(n) {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
    for (let j = 0; j < n.length - 1 - i; j++) {
      if (n[j] > n[j + 1]) {
        [n[j], n[j + 1]] = [n[j + 1], n[j]];
      }
    }
  }
  return n;
}

console.log(BubbleSort([7, 324, 78, 32, 768, 3, 79, 23, 76, 32145, 3224]));
