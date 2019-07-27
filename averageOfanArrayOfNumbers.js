// to calculate the average of an array of numbers

var numArray = [12, 3, 9, 7, 13, 15, 16, 41, 19];

var sum = 0; // initial sum starts at 0

for (let i = 0; i < numArray.length; i++) {
	// add each number from the array with each iteration
	sum += numArray[i];
}

var average = sum/numArray.length;

console.log(`The average is: ${average}`);