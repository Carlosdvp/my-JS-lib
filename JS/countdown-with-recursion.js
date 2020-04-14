// use recursion to create a countdown

function countdown(myArray, n) {
  // check that start is equal to or smaller than end
  if (n >= 0) {

  myArray.push(n);
  
  myArray = countdown(myArray, n - 1);

  }
  return myArray;
}


var ans3  = countdown([], 9);
console.log(ans3);