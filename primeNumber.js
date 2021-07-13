//Check a number is prime or not.
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return "Not a prime number";
    } else {
      return "Your number is a prime number";
    }
  }
}
const result = isPrime(176);
console.log(result);
