function CheckPrime(n) {
  if (n <= 1) {
    return `${n} is not prime`;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log();
      return `${n} is not prime`;
    }
  }
  return `${n} is prime`;
}

console.log(CheckPrime(3));
console.log(CheckPrime(1));
console.log(CheckPrime(5));
console.log(CheckPrime(6));
console.log("-----------------");
//getAll
function getAllPrimes(n) {
  let primes = [];
  for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  return primes;
}
console.log(getAllPrimes(20));

//while chekcing for prime we have a optimized solution.
//dont need to check for all the a*b pairs check untill the square root of (n) because same pairs will repeat in reverx=se order i.e 2*4 and 4*2
