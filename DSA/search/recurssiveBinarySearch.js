function recurssiveBinarySearch(k, a) {
  if (a.length <= 1) {
    return;
  }
  a.sort((a, b) => a - b);
  console.log(a);
  return search(k, a, 0, a.length - 1);
}

function search(k, a, left, right) {
  if (left > right) return "not found";
  let mid = Math.floor(right + left / 2);
  if (a[mid] === k) return mid;
  if (a[mid] > k) {
    return search(k, a, left, mid - 1);
  } else {
    return search(k, a, mid + 1, right);
  }
}
let arr = [2, 1, 7, 10, 43, 65, 23, 78, 65, 76, 87, 5, 32, 53, 8, 4];
console.log(recurssiveBinarySearch(100, arr));
