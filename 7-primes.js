/**
 * find all primes
 * 
 * Решето Ротосфена
 * 
 */


function findPrimes(value) {
  const primes = new Set();
  for (let i = 2; i < value; i++) {
    primes.add(i);
  }
  let candidate = 2;

  while (candidate * candidate <= value) {
    if (primes.has(candidate)) {
      for (let toDelete = candidate + candidate; toDelete < value; toDelete += candidate) {
        primes.delete(toDelete);
      }
    }
    candidate++;
  }
  return [...primes];
}

console.log(findPrimes(20));


/*
function findPrimes(value) {
  let i = 2;
  const primes = new Set();
  for (let i = 2; i < value; i++) {
    primes.add(i);
  }
  while (i <= value) {
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
*/