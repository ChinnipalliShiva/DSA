function LinearProgress(n) {
  for (let i = 0; i < n.length; i++) {
    console.log(n[i]);
    for (let j = 0; j < i; j++) {
      if (n[i] < n[j]) {
        [n[j], n[i]] = [n[i], n[j]];
      }
    }
  }
  return n;
}

console.log(LinearProgress([7, 324, 78, 32, 78, 3, 76, 23, 76, 32145, 324]));
