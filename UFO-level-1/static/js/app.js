// from data.js
var tableData = data;
var button = d3.select("#filter-btn");
var form = d3.select("#sightings");

console.log(data);

button.on("click", pullSightings);
form.on("submit", pullSightings);

function pullSightings() {
    
    d3.event.preventDefault();

    var tableBody = d3.select("#sighting-table");
    tableBody.html("");
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue)

    var filteredSightings = data.filter(data => data.datetime === inputValue);
    console.log(filteredSightings);

    filteredSightings.forEach(function(sighting) {
        console.log(sighting);
        var row = tableBody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};