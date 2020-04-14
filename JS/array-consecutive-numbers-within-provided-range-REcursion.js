// use recursion to create a function that returns an array of consecutive integers starting with 1 through the number passed to the function.

function rangeOfNumbers(startNum, endNum) {
  // grab the start and end values
  var start = startNum,
      end = endNum,
      ans = [];

  // check that start is equal to or smaller than end
  if (start - 1 === end) {
    return ans;
  } else {
    ans = rangeOfNumbers(start, end - 1);
    ans.push(end);
    // return the array
    return ans;
  }
};



var ans2  = rangeOfNumbers(5, 9);
console.log(ans2);