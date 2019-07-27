// yet another implementation of the Sieve of Erastothenes

//Define number limit
var n = 20;

//Create and populate number array
var numbers = [];

for (let i = 0; i <= n; i++) {
	numbers.push(true);
}
	
//Remove multiples of prime numbers
for (let i = 2; i <= n; i++) {
	for (let j = i * i; j <= n; j += i) {
		numbers[j] = false;
	}
}

//Create and populate array of prime numbers
var primes = [];

for (let i = 2; i <= n; i++) {
	if (numbers[i]) {
		primes.push(i);
	}
}

//log the prime number array
console.log(primes);