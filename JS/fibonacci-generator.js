
// one implementation

// The Math
const sqrt = Math.sqrt;
const pow = Math.pow;

const fibCalc = n => Math.round(
  (1 / sqrt(5)) * ( pow(((1 + sqrt(5)) / 2), n) - pow(((1 - sqrt(5)) / 2), n) )
);

// the Function
// n parameter is the number of values to be returned by the function
function* fibonacci (n) {
  const isInfinite = n === undefined;
  let current = 0;

  // return a number of values equal to the parameter 'n'
	for (let i = 0; i < n; i++) {
		yield fibCalc(current);
    current++;
	}
}



const ans = fibonacci();

for (let val of fibonacci(9)) {
	console.log(val);
}



// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);
// console.log(ans.next().value);


/******************************************************************/

// 2nd implementation

function* fibonacci2(start = 0) {
	// N = N-1 + N-2
	let current = 1;
	let next = 0;
	var temp;

	// use a for loop to generate 10 number starting at the given number 
	for (let i = 0; i < 10; i++) {
		temp = current;
		current = current + next;
		next = temp;
		start++;
		yield next;
	}
}

// iterate through each of the values returned by the generator
// for (let val of fibonacci2()) {
// 	console.log(val);
// }







/****************************************************************************/

// using Memoization

function* memoFibo (number, memo) {
	memo = memo || {};

	if (number === 0) {
		return 0;
	} else if (number === 1) {
		return 1;
	} else if (memo[number]) {
		return memo[number];
	}
	number++;
	memo[number] = memoFibo(number-1, memo) + memoFibo(number-2);

	yield memo[number];
}


function fibonacci3(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci3(num - 1, memo) + fibonacci3(num - 2, memo);
}

var ans3 = memoFibo(5);
var ans4 = fibonacci3(8);

console.log(ans3.next().value);
console.log(ans4);