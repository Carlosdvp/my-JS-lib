
// creating amultiplication table

var table;

table = "<table border='1' width='300' cellpadding='3'>";

// outer loop to create the rows
for (let i = 1; i <= 10; i++) {
	table = table + "<tr>";

	// inner loop to create the columns
	// this loop goes 10 times each time the outer loop runs
	for (let j = 1; j <= 10; J++) {
		table = table + "<td>" + i * j + "</td>";
	}

	table = table + "</tr>";
}

table = table + "</table>";

document.write(table);