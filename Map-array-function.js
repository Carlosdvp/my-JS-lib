
// The function has the following syntax: map(arr, callback). 

function map (array, callback) {
	//hold the items of the new array
	var newArray = [];

	// for each item apply the callback
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			newArray.push(array[i] * array[i]);
		}
	}

	return newArray;
}

var mappingExample = map([1,2,3,4], function(item){
  return item * item;
});

console.log(mappingExample);
// [1, 4, 9, 16]


// Given an array of numbers, determine if each number of the array is odd or even. Use the map function from the previous example to solve it. Sample input: [1, 4, 9, 16]; Sample output: ["odd", "even", "odd", "even"]. 


function map2 (array, callback) {
	//hold the items of the new array
	var newArray = [];

	// for each item apply the callback
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])%2 === 0) {
			newArray.push("even");
		} else if (!callback(array[i])%2 === 0) {
			newArray.push("odd");
		}
	}

	return newArray;
}

var mappingExample2 = map2([4,5,1,12,5], function(item){
  return item;
});

console.log(mappingExample2);