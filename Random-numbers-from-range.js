
// generate a random integer between a given range

function randomFromRange(a, b) {
	return Math.floor(Math.random() * (b-a) + a);
}




var randomNumber = randomFromRange(2, 18);
console.log(randomNumber);

var randomNumber2 = randomFromRange(-2, 2);
console.log(randomNumber2);

var randomNumber3 = randomFromRange(35, 50);
console.log(randomNumber3);