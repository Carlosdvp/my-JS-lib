// Remove all falsy values from an array.

function falsyKiller (array) {
	return array.filter((item) => {
		if (Boolean(item)) {
			return true;
		};
	})
}

var ans7 = falsyKiller([7, "ate", "", false, 9])
var ans8 = falsyKiller([false, null, 0, NaN, undefined, ""])

// console.log(ans7);
// console.log(ans8);