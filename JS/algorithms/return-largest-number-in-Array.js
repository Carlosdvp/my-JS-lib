// Return Largest Numbers in Arrays

// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestNumber(array) {
	// array to hold our answer
	var theOther = [];
	// sort the arrays
	array.forEach((item) => {
		// sort in ascending order - largest number at the end
		item.sort((a, b) => {return a-b});
		// take te last number from each array
		item = item.pop(item.length-1)
		// new array with just the largest numbers
		theOther.push(item);

		return theOther;
	})
	// return the answer
	return theOther;
}



var ans4 = largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(ans4);