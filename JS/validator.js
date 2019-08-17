

// validator object
var validator = {};

// the methods

// checks input for email format
validator.isEmailAddress = function(input) {
	// check the input and find the index of the @ symbol
	var email = input,
			indexAt = email.indexOf("@");
	// check to see if the input has the @ between 2 strings, return false if not
	if (indexAt > 0 && indexAt !== (email.length - 1)) {
		return true;
	} else {
		return false;
	}
}

// check for an 8 digit phone number
validator.isPhoneNumber = function(number) {
	var num = number;
	// check to see if input is a number with 8 digits or not
	if (typeof num === 'number' && num.toFixed().split("").length === 8) {
		return true;
	} else {
		return false;
	}
}

// a valid date is any string that can be turned into a JavaScript Date Object.
validator.isDate = function(date) {
	// check input data and make sure it is a valid date object
	if (Object.prototype.toString.call(date) === "[object Date]") {
		return true;
	} else {
		return false;
	}
}

// check to see if date is prior to the ref date
validator.isBeforeDate = function(date, reference) {
	if (date < reference) {
		return true;
	} else {
		return false;
	}
}

// check to see if date is after the ref date
validator.isAfterDate = function(date, reference) {
	if (date > reference) {
		return true;
	} else {
		return false;
	}
}

// is the date provided prior to today?
validator.isBeforeToday = function(date) {
	// get the date at the time of the function call
	var today = new Date();
	if (date < today) {
		return true;
	} else {
		return false;
	}
}

// is the date provided after today?
validator.isAfterToday = function(date) {
	// get the date at the time of the function call
	var today = new Date();
	if (date > today) {
		return true;
	} else {
		return false;
	}
}

// returns true if it is an empty string
validator.isEmpty = function(input) {
	var string = input;

	if (string.trim().length > 0) {
		return false;
	} else {
		return true;
	} 
}

// Checks if the input parameter has leading or trailing whitespaces, or too many between words
validator.isTrimmed = function(input) {
	// get the str.length of the input
	var initialStr = input,
			initialLength = input.length;

	// apply the trim() method
	var trimmedStr = input.trim();
			trimmedLength = trimmedStr.length;

	// check for extra spaces between words
	var extraSpaces = input.replace(/\s+/g, " "),
			extraSpacesLength = extraSpaces.length;

	// compare both values, if they match return true
	if (initialLength === trimmedLength && initialLength === extraSpacesLength) {
		return true;
	} else {
		return false;
	}
}

// Checks if the input text parameter contains one or more of the words within an array

validator.contains = function(input, words) {
	// take the input string and split it into an array of words
	var toCompare = input.split(" ");

	// remove dashes from the string if any
	var dashRemover = dashRemover = input.replace(/-/g, ' ');
	dashRemover = dashRemover.split(" ");
	
	// compare input with given aray
	var res = toCompare.filter(item => words.includes(item)),
			noDash = dashRemover.filter(item => words.includes(item));

	if (res.length > 0 || noDash.length > 0) {
		return true;
	} else {
		return false;
	}
}

// Checks if the input text parameter does not contain any of the words in the words array
validator.lacks = function(input, words) {
	// take the input string and split it into an array of words
	var toCompare = input.split(" ");

	// remove dashes from the string if any
	var dashRemover = dashRemover = input.replace(/-/g, ' ');
	dashRemover = dashRemover.split(" ");
	
	// compare input with given aray
	var res = toCompare.filter(item => words.includes(item)),
			noDash = dashRemover.filter(item => words.includes(item));

	if (res.length > 0 || noDash.length > 0) {
		return false;
	} else {
		return true;
	}
}

//
// Helper Function
function spaceSpecialRemover (input) {
	// remove punctuation
	var noPuntuation = input.replace(/[,.!;:']/g, "");
	// remove spaces in the input string 
	var answer = noPuntuation.replace(/\s/g, "");
	return answer;
}

// 12. input text parameter must contain only strings found within the strings array.

validator.isComposedOf = function(input, strings) {
	
	// remove spaces and special characters from input string
	var ans = spaceSpecialRemover(input);
	// remove the commas from strings array converted into a string
	strings = strings.toString();
	var newStrings = spaceSpecialRemover(strings);

	// compare arrays by looping thorugh each letter
	let counter = 0;

	for (let letter of ans) {
		if (newStrings.includes(letter)) {
			counter++;
		}
	}

	// compare the lenght of resulting matches with the lenght of the input string, if there items that don't match the resulting counter will not match, thus returning false.
	if (counter === ans.length) {
		return true;
	} else {
		return false;
	}

}

// 13. Checks if the input parameter’s character count is less than or equal to the n parameter

validator.isOfLengthOrLessThan = function(input, n) {
	// get the lenght of the input string
	var stringCount = input.length;

	// compare with the 'n' value, return false if it is greater
	if (n <= stringCount) {
		return false;
	} else {
		return true;
	}
}

// 14. Checks if the input parameter’s character count is greater than or equal to the n parameter.

validator.isOfLengthOrGreaterThan = function(input, n) {
	// get the lenght of the input string
	var stringCount = input.length;

	// compare with the 'n' value, return false if it is smaleer
	if (n >= stringCount) {
		return false;
	} else {
		return true;
	}
}

// 15. Checks if the input parameter has a word count less than or equal to the n parameter.

validator.lessWordsThan = function(input, n) {
	// if input is a string, convert to array and get it's word count
	var strArray = input.split(" ").length;

	// compare that number with the 'n' parameter
	if (strArray < n) {
		return true;
	} else {
		return false;
	}
}

// 16. Checks if the input parameter has a word count greater than or equal to the n parameter.

validator.moreWordsThan = function(input, n) {
	// if input is a string, convert to array and get it's word count
	var strArray = input.split(" ").length;

	// compare that number with the 'n' parameter
	if (strArray > n) {
		return true;
	} else {
		return false;
	}
}

// 17. Checks that the input parameter matches all of the following:
	// input is greater than or equal to the floor parameter
	// input is less than or equal to the ceil parameter.

validator.isNumberBetween = function(input, floor, ceil) {
	if (input >= floor && input <= ceil) {
		return true;
	} else {
		return false;
	}
}

// 18. Checks that the input parameter string is only composed of the following characters: a—z, A—Z, or 0—9. Unicode characters are intentionally disregarded.

validator.isAlphanumeric = function(input) {
	// grab the input
	var alphaNum = input;

	// run it through a regEx to make usre it contains letters and numbers
	var ans = (inputStr) => {
		return inputStr.match(/^[a-z0-9]+$/i) !== null;
	}
	var result = ans(alphaNum);

	return result;
}

// 19. Checks if the input parameter is a credit card or bank card number. A credit card number will be defined as four sets of four alphanumeric characters separated by hyphens (-), or a single string of alphanumeric characters (without hyphens).

validator.isCreditCard = function(input) {
	// remove dashes and spaces
	var dashSpaceAway = input.replace(/[- ]/g, "");
	// remove letters
	var numbersOnly = dashSpaceAway.match(/[0-9]+$/g);
	// if number is not null and is 16 characters long return true
	if (numbersOnly !== null && numbersOnly[0].length === 16) {
		return true;
	} else {
		return false;
	}
}

// 20. Checks if the input string is a hexadecimal color, such as #3677bb. Hexadecimal colors are strings with a length of 7 (including the #), using the characters 0—9 and A—F. isHex should also work on shorthand hexadecimal colors, such as #333. The input must start with a # to be considered valid.

validator.isHex = function(input) {
	// it should start with #
	var startHex = input.indexOf("#");
	// it must match the 0-9 and A-F as well
	var hexStr = input.match(/[a-fA-F0-9]+$/g);
	// if the input doesn't start with # return false
	if (startHex === 0 && input.length <= 7 && hexStr) {
		return true;
	} else {
		return false;
	}
}

// 21.Checks if the input string is an RGB color, such as rgb(200, 26, 131). An RGB color consists of:
  // Three numbers between 0 and 255
  // A comma between each number
  // The three numbers should be contained within “rgb(” and “)“.

// If you are unfamiliar, refer to the Introduction to CSS chapter for a more detailed description of the rgb color syntax.

validator.isRGB = function(input) {
	// match against a regEx to find only rgb and 0-255 alues
	var rgbStr = input.match(/^rgb\((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?){2}((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((\d{0,2}(\.\d+)?)|100)%,\s?){2}((\d{0,2}(\.\d+)?)|100)))\)$/ig);

	// check the input
	if (rgbStr) {
		return true;
	} else {
		return false;
	}
}

// 22. Checks if the input string is an HSL color, such as hsl(122, 1, 1). An HSL color consists of:
  // Three numbers:
  //     the first number, Hue, is between 0 and 360
  //     the second and third numbers, Saturation and Lightness, are between 0 and 1
  // A comma between each number
  // The three numbers should be contained within “hsl(” and “)“.

validator.isHSL = function(input) {
	// separate the numbers and turn into an array
	var string = input;
	// it should start with h
	var start = string.indexOf("h");

	// grab just the numbers
	var hslStr = string.indexOf("(")+1;
	var end = string.indexOf(")");
	var numbers = string.slice(hslStr, end).split(",");

	var hue = Number(numbers[0]),
			saturation = Number(numbers[1]),
			lightness = Number(numbers[2]);
	
	// do the checks
	if (start === 0 && hue >=0 && hue <=360 && saturation >= 0&& saturation <= 1 && lightness >= 0&& lightness <= 1) {
		return true;
	} else {
		return false;
	}
}


// 23. Checks if the input parameter is a hex, RGB, or HSL color type.

validator.isColor = function(input) {
	// check against the color verifyers
	if (validator.isHex(input) || validator.isRGB(input) || validator.isHSL(input)) {
		return true;
	} else {
		return false;
	}
}



