
// Function that can extract the names and values of all cookies for a domain and save them as keys and values in an object.


// extract cookies from a website
function cookieMonster() {
	// the object to hold our cookies
	const cookieJar = {};

	// find the cookies
	var cookies = document.cookie;

	// separate the cookies into a cookie arrray
	cookieArr = cookies.split(';');

	// split cookies into name and value
	var cookieSeparator,
			cookieName,
			cookieValue;

	cookieArr.forEach(function(cookie, index) {
		cookieSeparator = cookie.indexOf("=");
		cookieName = cookie.slice(0, cookieSeparator).trim();
		cookieValue = cookie.slice(cookieSeparator + 1);
	
		// add each pair to the object
		cookieJar[cookieName] = cookieValue;
	}) 

	// return the object
	return cookieJar;
}

// call the function
var ans1 = cookieMonster();
console.log(ans1);

