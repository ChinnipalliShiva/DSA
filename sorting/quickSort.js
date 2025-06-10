function QuickSort(n, left = [], right = []) {
  if (n.length <= 1) {
    return n;
  }
  let mid = n[0];
  for (let i = 1; i < n.length; i++) {
    n[i] > mid ? right.push(n[i]) : left.push(n[i]);
  }
  return [...QuickSort(left), mid, ...QuickSort(right)];
}

console.log(QuickSort([7, 324, 78, 32, 768, 3, 79, 23, 76, 32145, 3224]));
