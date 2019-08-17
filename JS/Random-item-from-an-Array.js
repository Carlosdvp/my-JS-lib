
// REturns a random item from an aray

function randomItemFromArray(array) {
	var a = 0;
	var b = array.length-1;
	// here we get the index of the array item
	var c = Math.floor(Math.random() * (b-a) + a);
	console.log(c);
	// and we return the item
	return array[c];
}




var testArray = [4,5,1,12,5];
var testArray2 = ["cat","fluffy","alligator","Lion"];

var randomItem = randomItemFromArray(testArray);
console.log(randomItem);

var randomItem2 = randomItemFromArray(testArray2);
console.log(randomItem2);