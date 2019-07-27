function spaceSpecialRemover (input) {
	// remove punctuation
	var noPuntuation = input.replace(/[,.!;:]/g, "");
	// remove spaces in the input string 
	var answer = noPuntuation.replace(/\s/g, "");
	return answer;
}