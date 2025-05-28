function Stair(n) {
  if (n <= 1) {
    return 1;
  }
  return Stair(n - 1) + Stair(n - 2);
}

console.log(Stair(5));


//index and range is very imp in this
function Stair2(n) {
  let a = [1, 2];
  for (let i = 2; i < n; i++) {
    a[i] = a[i - 1] + a[i - 2];
    console.log(a)
  }
  return a[n-1]
}

console.log(Stair2(5));
