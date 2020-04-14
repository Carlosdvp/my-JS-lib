// Find the Longest Word in a String

function theLongestWord (string) {
	// split string into individual words
	var answer = string.split(' ');
	// make a counter of the longest word
	var long = 0;
	// and a variable to hold that word
	var theWord;

	// loop through the array
	for (var i = 0; i < answer.length; i++) {

		if(long < answer[i].length) {
			long = answer[i].length;
			theWord = answer[i];
		}

	}
	// return the answer
	return theWord;
}


var ans2 = theLongestWord("The quick brown fox jumped over the lazy dog");
console.log(ans2);