// Check if a value is classified as a boolean primitive. Return true or false.

function booler (thing) {
	// chack if boolean or not
	if (typeof(thing) === "boolean") {
		return true;
	} else {
		return false;
	}
}

var ans1 = booler(false);
var ans2 = booler([1,2]);
var ans3 = booler('a');

// console.log(ans1);
// console.log(ans2);
// console.log(ans3);