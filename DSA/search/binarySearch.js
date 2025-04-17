function BinarySearch(k, a) {
  a.sort((a, b) => a - b);
  console.log(a);
  let left = 0;
  let right = a.length - 1;
  while (left <= right) {
    let mid = Math.floor(right + left / 2);
    if (a[mid] === k) return mid;
    if (k > a[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return "not found"; //if nothing is found
}

let arr = [2, 1, 7, 10, 43, 65, 23, 78, 65, 76, 87, 5, 32, 53, 8, 4];
console.log(BinarySearch(100, arr));
// console.log(BinarySearch(53, arr));
// console.log(BinarySearch(32, arr));
// console.log(BinarySearch(78, arr));
// console.log(BinarySearch(43, arr));
