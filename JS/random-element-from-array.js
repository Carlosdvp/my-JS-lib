
// rand returns a random item from an array
function randomItem(...array) {
	var x = Math.floor(Math.random() * array.length)
	return array[x];
}