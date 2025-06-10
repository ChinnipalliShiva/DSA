function Merge(n) {
  if (n.length === 1) {
    return n; //base
  }
  let l = n.length;
  let m = Math.floor(l / 2);
  let left = Merge(n.slice(0, m));
  let right = Merge(n.slice(m));

  return mergeComapre(left, right);
}

function mergeComapre(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}
console.log(Merge([7, 324, 78, 32, 768, 3, 79, 23, 76, 32145, 3224]));
