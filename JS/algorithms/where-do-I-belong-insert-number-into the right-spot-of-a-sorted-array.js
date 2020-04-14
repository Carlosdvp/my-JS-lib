// Where do I Belong

// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

function getShorty (arr, num) {
	// sort the array
	var sortedOut = arr.sort((a, b) =>  a - b);
	// create variables to hold the 2 halves and the index where we need to insert num
	var newArr = [],
			endportion = [],
			index = null;
	// compare num withe items in the array
		// return the index of where that number should go in the sorted array
	sortedOut.forEach((item) => {
		if (num > item) {
			// get the index where the loop stops
			index = sortedOut.indexOf(item);
			// copy the array up to item's index
			newArr = sortedOut.slice(0, index+1);
			// and then the other hal
			endportion = sortedOut.slice(index+1);
		} 
	})

	newArr.push(num);
	// return the answer

	return [...newArr, ...endportion]

}

var ans9 = getShorty([2, 20, 10], 19)
var ans10 = getShorty([10, 20, 30, 40, 50], 35)

// console.log(ans9);
// console.log(ans10);



// A simpler version that simply returns the index where the num neds to go


function justGetTheIndex (arr, num) {
	// sort the array
	var sortedOut = arr.sort((a, b) =>  a - b);
	// create variables to hold the 2 halves and the index where we need to insert num
	var index = 0;
	// compare num withe items in the array
		// return the index of where that number should go in the sorted array
	sortedOut.forEach((item) => {
		if (item > num) {
			// get the index where the loop stops
			index++;
		} 
	})

	return index;

}

var ans11 = justGetTheIndex([5, 3, 20, 3], 5)
var ans12 = justGetTheIndex([10, 20, 30, 40, 50], 35)

// console.log(ans11);
// console.log(ans12);