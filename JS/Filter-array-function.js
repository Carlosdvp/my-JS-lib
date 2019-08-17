// ----------  filter function for an array ---------


function filter(arr, callback) {
	// holds the filtering result
	var result = [];
	// for each item apply the callback
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i])) {
			result.push(arr[i]);
		}
	}
	return result;
}

// the callback function will only add even numbers to Result
var numbers = [3,2,4,5,6,7,8,9];

var oddNumbers = filter(numbers, function(item) {
	return item % 2 != 0;
})

console.log(oddNumbers);