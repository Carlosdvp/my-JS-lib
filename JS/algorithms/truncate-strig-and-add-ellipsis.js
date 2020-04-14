
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString (str, num) {
	if (str.length > num) {
		// grab the string's length
		let howLong = str.length;
		// slice string equal to num 
		let smaller = str.slice(0, num);
		// add ... to the truncated string
		let answer = `${smaller}...`;

		// return the answer
		return answer;

	} else {
		// grab the string's length
		let howLong = str.length;
		// slice string equal to num 
		let smaller = str.slice(0, num);

		// return the answer
		return smaller;
	}
}


var ans9 = truncateString("A-tisket a-tasket A green and yellow basket", 8);
var ans10 = truncateString("Peter Piper picked a peck of pickled peppers", 11);
var ans11 = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

console.log(ans9);
console.log(ans10);
console.log(ans11);