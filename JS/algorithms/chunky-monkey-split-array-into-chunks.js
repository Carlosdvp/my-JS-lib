// Chunky Monkey

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chungus(array, size) {
	// get 2 arrays based on the size parameter
	let bigOne = [];

	// combine into a main 2-d array
	for (let i = 0; i < array.length; i+= size) {
		bigOne.push(array.slice(i, i+size));
	}

	// the answer
	return bigOne;
}


var ans17 = chungus(["a", "b", "c", "d"], 2);
var ans18 = chungus([0, 1, 2, 3, 4, 5], 4);
var ans19 = chungus([0, 1, 2, 3, 4, 5], 2);

console.log(ans17);
console.log(ans18);
console.log(ans19);