// from "data" data.js
var tableData = data;

// Select the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);


// Complete the event handler function for the form
function runEnter() {
	 
	// Clear table data
	var elements = document.getElementsByTagName('td');
	while (elements[0]) elements[0].parentNode.removeChild(elements[0]);
	 
	// Select the Date element and get the raw HTML node
  var dateElement = d3.select("#datetime");
  var dateValue = dateElement.property("value");

  // Filter table on date
	tableData = tableData.filter(ufo => ufo.datetime === dateValue);
	
	// Load filtered data
	loadTable();
	
	// Prevent the page from refreshing
 	d3.event.preventDefault();
};

// Load UFO table data
function loadTable(){
		tableData.forEach((UfoReport) => {
		var row = tbody.append("tr");
		Object.entries(UfoReport).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
};