function Hanoi(n, from, use, to) {
  if (n === 1) {
    console.log(`disk-${n} sent from ${from} to ${to}`);
    return;
  }
  Hanoi(n - 1, from, to, use);

  console.log(`disk-${n} sent from ${from} to ${to}`);

  Hanoi(n - 1, use, from, to);
}

console.log(Hanoi(3, "A", "B", "C"));
