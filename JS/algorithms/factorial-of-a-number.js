// Factorize a Number - Return the factorial of the provided integer. a factorial is the product of all positive integers less than or equal to n.

function factoralize(num) {
	// a variable to hold the result
	var result = 1;

	// take the number and iterate through it one at a time
	while(num > 1) {
		result = result * num;
		num --;
	}
	

	// return the result
	return result;
}


var ans1 = factoralize(5);
console.log(ans1)