function Factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(Factorial(5));

// ------

function recursiveFactorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case to stop recursion
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));
