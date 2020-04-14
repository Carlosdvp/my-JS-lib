// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function stringCloner (str, num) {
	// check if num is greater than 0
	if (num > 0) {
		// take the string 
		let answer = "";
		// repeat num times
		for (var i = 1; i <= num; i++) {
			answer += str;
		}
		return answer
	} else {
		return "";
	}

	
}


var ans7 = stringCloner("abc", 3);
var ans8 = stringCloner("abc", -2);

// console.log(ans7);
// console.log(ans8);