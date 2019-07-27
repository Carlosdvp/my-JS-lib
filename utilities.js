

// the utilities object
var utilities = {};

// 1. Write a function that operates similarly to .forEach. 
	// Your function should:
	// - iterate and call the callback parameter for each element or property of a list at the interval specified by the n parameter. 
	// It should not call callback on values greater than the list’s number of elements.

utilities.by = function(list, n, callback) {
	// sset the ceiling as the list's number of elements
	var limit = list.length;

	// get the for loop to start at the 2nd item, index n -1; and iterate by 'n' number of times
	for (let i = list[n]-1; i <= limit; i = i+n) {
		callback(i, list[i]-n, list);
	}

	return callback;
}

// callback function
var testy = function (val, index, list) {
	var result = `the answer is ${val}`;
	console.log(result);
};

// test case
// utilities.by([1,2,3,4,5,6,8,9], 2, testy); // will output: 2, 4, 6, 8


// 2. Write a function that will create an array of all the keys of an object. Remember that a key is the name of an object’s property. 

utilities.keys = function(object) {
	return Object.keys(object);
}


// 3. Write a function that will create an array of all the values of an object.

utilities.values = function(object) {
	return Object.values(object);
}


// 4. Write a function that will create an array of all the keys and values of an object in the order of [key, value, key, value] for as many key/value pairs as exist in the object.

utilities.pairs = function(object) {
	// turn the objct into an array of arrays for each value pair
	var entries = Object.entries(object),
			res = [];

	res = entries[0];
	res = res.concat(entries[1]);
	res = res.concat(entries[2]);

	return res;
}

// var ans4 = utilities.pairs({count: 5, length: 10, total: 16}); // ["count", 5, "length", 10, "total", 16]

// console.log(ans4);


// 5. Write a function that returns a randomly re-arranged copy of the elements in its parameter array.

utilities.shuffle = function(array) {
	// grab the indexes from the original array
	for (let i = array.length - 1; i > 0; i--) {
		// random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1)); 
    // swap elements
    [array[i], array[j]] = [array[j], array[i]];
  }
	// return new array
	return array;
}


// 6.Write a function that will return the plural of a word depending on the value of the n parameter. If n is 1, return the non-plural word (parameter word); otherwise, add an “s” to the plural word

utilities.pluralize = function(n, word, pluralWord) {
	// if n = 1 return 'word' unchanged
	if (n === 1) {
		return word;
	} else if (pluralWord !== undefined) {
		return pluralWord;
	} else {
		return `${word}s`;
	}
}

// var ans1 = utilities.pluralize(1, "lion");     // returns "lion"
// console.log(ans1);


// 7.Write a function for converting a camelCase string to a dashed string.

utilities.toDash = function(str) {
	// grab the uppercase letters and add an - before each one
	var newStr = camelString.replace( /([A-Z])/g, '-$1');
	// replace uppercase letters with lowercase ones
	var secondStr = newStr.replace(/[A-Z]/g, letter => letter.toLowerCase());
	// return new string
	return secondStr;
}


// 8. Write a function for converting a dashed string to a camelCase string.

utilities.toCamel = function(str) {
	// separate the string into an array of words at the dashes
	var noSpaces = string.split('-');
	// variable to hold the camelcased string
	var newStr;
	// camel case the words in the array
	for(let i = 0; i < noSpaces.length; i++) {
		// if it is the first word make first letter lowercase
		if (noSpaces[i] === noSpaces[0]) {
			// grab the first letter and make it lowercase
			var firstLetter = noSpaces[i].substr(0, 1).toLowerCase();
			var firstWord = noSpaces[i].replace(noSpaces[i].substr(0, 1), firstLetter);
			newStr = firstWord;
		} else {
		// else make the first letter uppercase
			// grab the first letter and make it uppercase
			var firstLetter = noSpaces[i].substr(0, 1).toUpperCase();
			var firstWord = noSpaces[i].replace(noSpaces[i].substr(0, 1), firstLetter);
			newStr = newStr + firstWord;
		}
	}
	return newStr;
}


// 9. Write a function that searches all values of the parameter obj and returns “true” if any are equal to the search parameter.

utilities.has = function(obj, search) {
	// pull the values from the obj
	var res = Object.values(obj);
	var length = res.length;

	// if search parameter is one of the values return true
	for (let i = 0; i <= length; i++) {
		if (res.includes(search)) {
			return true;
		} else {
			return false;
		}
	}
}


// 10. Write a function that returns a new object by picking all key/value pairs from the parameter obj. The keys that are picked will be determined by the array parameter keys.

utilities.pick = function(obj, keys) {
	// to hold the resulting object
	var answer = {};
	// loop through each item in the keys array and return the matching keys and their values, and remove any tht have an undefined value
	keys.forEach((element) => {
		if (obj[element] === undefined) {
			delete obj[element];
		} else {
			answer[element] = obj[element];
		}
	});

	// and return the answer
	return answer;
}

// test case
// var data = {
// 	type: "transformer",
// 	index: 19,
// 	siblings: 19,
// 	access: "full"
// };

// var ans1 = utilities.pick(data, ["type", "index"]);      // returns {type: "transformer", index: 19};
// var ans3 = utilities.pick(data, ["access", "animals"]);  // returns {access: "full"};

// console.log(ans1);
// console.log(ans3);


// 11. Returns the input parameter text with all symbols removed. Symbols refer to any non-alphanumeric character.

utilities.withoutSymbols = function(input) {
	// grab the input
	var alphaNum = input;
	// run it through a regEx to make usre it contains letters and numbers, while ignoring whitespace
	var ans = (inputStr) => {
		return inputStr.replace(/[^a-z0-9 ]/gi, "");
	}
	var result = ans(alphaNum);

	return result;
}


// 12. Counts the number of words in the input parameter

utilities.countWords = function(input) {
	if (input.length > 0) {
		// remove dashes if any and replace with spaces
		var newStr = input.replace( /-/g, ' ');
		console.log(newStr);
		// take the input and split into words
		var words = newStr.split(" ");

		return words.length;
	} else {
		return 0;
	}
}


