
// find the first 10 numbers divisible by 3 or 5, we start at 72 and the loop stops after reaching the 10th number

var count = 0;
var currentNumber = 72;

while (count < 11) {
	if (currentNumber % 3 === 0 || currentNumber % 5 === 0) {
		console.log(currentNumber);
		count++;
	}
	currentNumber++; // try the next number
}