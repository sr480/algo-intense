/**
 * find all primes
 * 
 * Решето Ротосфена
 * 
 */


function findPrimes(value) {
  const candidates = new Set();
  for (let i = 2; i <= value; i++) {
    candidates.add(i);
  }
  let candidate = 2;

  while (candidate <= value) {
    if (candidates.has(candidate)) {
      for (let toDelete = candidate + candidate; toDelete < value; toDelete += candidate) {
        candidates.delete(toDelete);
      }
    }
    candidate++;
  }
  return [...candidates];
}

console.log(findPrimes(2));


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