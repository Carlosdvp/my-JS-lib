
// celcius to farenheit

// formula:
// c/5 = (f-32) / 9

function celciusToFarenheit(celcius) {
	return parseInt((celcius	* (9/5)) + 32);
}

var conversionOne = celciusToFarenheit(18);

console.log(conversionOne);


// farenheit to celcius

function farenToC(farenheit) {
	return Number(((farenheit - 32) * (5/9)).toFixed());
}

var conversion2 = farenToC(70);

console.log(conversion2);

console.log("test");