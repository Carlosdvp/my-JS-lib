function solution(N) {

	// temp variables to hold our values
	var binary = '';
	var temp = N;

	// use while loop to transform into 0's and 1's
	while (temp > 0) {
		if (temp % 2 === 0) {
			binary = '0' + binary;
		} else {
			binary = '1'+ binary;
		}
		temp = Math.floor(temp/2);
	}
  return binary;
}


var ans = solution(32)

console.log(ans)