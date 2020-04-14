// Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined.

function finderKeeper (array, fun) {
	// the answer
	var ans = [];
	
	// loop through the elements in the array - forEach()
	array.forEach( (item) => {
		if (fun(item)) {
			// pass items that pass the tst inot ans array
			ans.push(item);
		} else {
			return;
		}
	})
	// return the first element that matches the test
	return ans[0];
}


var ans12 = finderKeeper([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
var ans13 = finderKeeper([1, 3, 5, 9], function(num) { return num % 2 === 0 });

console.log(ans12);
console.log(ans13);