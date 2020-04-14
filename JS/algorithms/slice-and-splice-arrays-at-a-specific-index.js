
// Slice and Splice

// Use the array methods slice and splice to copy each element of the first array into the second array, in order.

function theFusion(arr1, arr2, index) {
	// get second array as the main one amd the other as the one to be merged 
	var main = arr2.slice(),
			merge = arr1.slice();

	// get the length of the merge array
	var items = merge.length;

	// find the index of main and get the value
	var entryPoint = main[index];

	// ue a loop to push the items into the main array
	for (let i = 0; i < merge.length; i++) {
		main.splice(index, 0, merge[i]);
		index++;
	}

	// return answer
	return main;
}

var ans5 = theFusion([1, 2, 3], [4, 5, 6], 1);

// console.log(ans5);


// Another solution using the spread operator

function theFusion2 (arr1, arr2, index) {
	// get second array as the main one amd the other as the one to be merged 
	var main = arr2.slice(),
			merge = arr1.slice();

	main.splice(index, 0, ...merge);

	// return answer
	return main;
}

var ans6 = theFusion2([1, 2, 3], [4, 5, 6], 1);

// console.log(ans6);