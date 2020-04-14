// Check if a string (first argument, str) ends with the given target string (second argument, target).

function checkEnding (string, end) {
	// variable to hold the answer and the parameters
	let answer = null,
			check = end,
			word = string;

	// get the length of both parameters
	check = check.length;
	word = word.length;

	// slice a substring equal to check's length
	var shortWord = word - check;
	answer = string.substr(shortWord, word)

	// compare answer with end, if they match return true, else return false
	if (answer === end) {
		return true;
	} else {
		return false;
	}

	return answer;
}


var ans5 = checkEnding("Bastian", "n");
var ans6 = checkEnding("Open sesame", "pen");

// console.log(ans5);
// console.log(ans6);
