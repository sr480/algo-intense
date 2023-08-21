/**
 * find all primes
 * 
 * Решето Ротосфена
 * 
 * 
 */

function findPrimes(value) {
  let i = 2;
  const primes = new Set();
  while (i < value) {
    let isPrime = true;
    for (const prime of primes.keys()) {
      if (i % prime === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.add(i);
    }
    i++;
  }
  return [...primes];
}

console.log(findPrimes(20));