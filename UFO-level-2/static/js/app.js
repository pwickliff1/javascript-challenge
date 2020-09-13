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
	
	// Select the City element and get the raw HTML node
  var cityElement = d3.select("#city");
  var cityValue = cityElement.property("value");

	// Select the State element and get the raw HTML node
  var stateElement = d3.select("#state");
  var stateValue = stateElement.property("value");
	
	// Select the Country element and get the raw HTML node
  var countryElement = d3.select("#country");
  var countryValue = countryElement.property("value");
	
	// Select the Shape element and get the raw HTML node
  var shapeElement = d3.select("#shape");
  var shapeValue = shapeElement.property("value");

	
  if (dateValue) {tableData = tableData.filter(ufo => ufo.datetime === dateValue)};
	if (cityValue) {tableData = tableData.filter(ufo => ufo.city === cityValue)};
	if (stateValue) {tableData = tableData.filter(ufo => ufo.state === stateValue)};
	if (countryValue) {tableData = tableData.filter(ufo => ufo.country ===countryValue)};
	if (shapeValue) {tableData = tableData.filter(ufo => ufo.shape === shapeValue)};


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