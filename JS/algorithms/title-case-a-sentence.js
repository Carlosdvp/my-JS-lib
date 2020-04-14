// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function capitalizer (words) {
	// split the string at the spaces
	var theWords = words.toLowerCase().split(' '),
			newWords = [];

	// take the firt letter of each substring and change to uppercase - forEach method
	theWords.forEach((word) => {
		var firstLetter = word.slice(0, 1);
		var firstCapLetter = firstLetter.toUpperCase();
	// put the word back together
		word = word.replace(firstLetter, firstCapLetter);
		newWords.push(word);

	})
	// put the string back together and return the answer

	// return th answer
	return newWords.join(' ');

}


var ans4 = capitalizer("I'm a little tea pot");

// console.log(ans4);
