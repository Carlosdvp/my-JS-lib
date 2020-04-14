// Mutations

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// first answer = not quite

function anybodyIn(array) {
	// take the first element array[0] and the 2nd, array[1]
	var mainword = array[0],
			included = array[1];

	// lowercase all the letters
	mainword = mainword.toLowerCase();
	included = included.toLowerCase();

	// split each word into its component letters
	var splitMain = mainword.split('');
	var splitIncluded = included.split('');

	// sort the letters in both subarrays
	splitMain = splitMain.sort();
	splitIncluded = splitIncluded.sort();

	// put the arrays back together
	mainword = splitMain.join('')
	included = splitIncluded.join('')

	// check to see if array[0] includes array[1]
	var answer = mainword.includes(included);

	// return true/false
	return answer;
}

var ans13 = anybodyIn(["hello", "hey"]);
var ans14 = anybodyIn(["Mary", "Army"]);

// console.log(ans13);
// console.log(ans14);


// 2nd answer - refactored 1st -- this one did the trick

function anybodyIn2 (array) {
	// take the first element array[0] and the 2nd, array[1] and convert to lowercase
	var mainword = array[0].toLowerCase(),
			included = array[1].toLowerCase();
	// a variable to hold the answer
	let answer = [];

	// split the 2nd element into letters
	var splitIncluded = included.split('');

	// loop thorugh the 2nd array and check each letter against the 1st element
	splitIncluded.forEach((letter) => {
		if (mainword.includes(letter)) {
			answer.push(letter);
		}
	})
	// take the results from the foreach method and put them back together
	answer = answer.join('')

	// compare the resulting humpty dumpty to the og word
	if (answer === included) {
		return true;
	} else {
		return false;
	}

}

var ans15 = anybodyIn2(["hello", "hey"]);
var ans16 = anybodyIn2(["Mary", "Army"]);

// console.log(ans15);
// console.log(ans16);