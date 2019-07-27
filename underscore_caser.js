
let secondStr = 'Cats are awesome!';

function underscoreCaser(string) {

	// separate the string into an array of words at the spaces
	var noSpaces = string.split(' ');
	// variable to hold the camelcased string
	var newStr;

	// camel case the words in the array
	for(let i = 0; i < noSpaces.length; i++) {
		// if it is the first word make first letter lowercase
		if (noSpaces[i] === noSpaces[0]) {
			// grab the first letter and make it lowercase
			var firstLetter = noSpaces[i].substr(0, 1).toLowerCase();
			var firstWord = noSpaces[i].replace(noSpaces[i].substr(0, 1), firstLetter);
			newStr = firstWord + '_';
		} else {
		// else make the first letter uppercase
			// grab the first letter and make it uppercase
			var firstLetter = noSpaces[i].substr(0, 1).toLowerCase();
			var firstWord = noSpaces[i].replace(noSpaces[i].substr(0, 1), firstLetter);
			newStr = newStr + '_' + firstWord;
		}
	}

	return newStr;
}

var res7 = underscoreCaser(secondStr);

console.log(res7);