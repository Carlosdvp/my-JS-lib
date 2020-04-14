
// Reverse a string

function reverseTheThing(string) {
	let oldStr = string,
			res;

	// take the string and break into an array of letters
	res = oldStr.split('');
	// reverse the order of the array's elements
	res = res.reverse();
	// make it a string again
	res = res.join('');
	res = String(res);
	// return the result
	return res;
}


var ans = reverseTheThing('sexy');
console.log(ans);