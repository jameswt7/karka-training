//Fetch

const apiURL = "https://jsonplaceholder.typicode.com/todos/";
const fetchData = fetch(apiURL)
fetchData.then(response => {
    if (!response.ok) {
        throw new Error('HTTP Error! status: ${response.status}');
    }
    return response.json()

        .then(data => {
            console.log("Data:", data);
        })
        .catch(err => {
            console.error("Error:", err.message);
        })
})


//-- Reference Site  <!-- JavaScript code using jQuery -->
//https://www.tutorialspoint.com/how-to-fetch-data-from-json-file-and-display-it-in-an-html-table-using-jquery

$(document).ready(function () {
    // Retrieve JSON data from "jhttps://jsonplaceholder.typicode.com/todos/" file
    $.getJSON("https://jsonplaceholder.typicode.com/todos/", function (data) {
        var tableBody = $("#data-table tbody");

        // Iterate over each person object in the JSON data
        $.each(data, function (index, person) {
            var row = $("<tr></tr>"); // Create a new table row
            //if (500 < size && size < 600) OR if (size > 500 && size < 600) - filter the between range 10 to 70 
            // fi lter the completed true value 
            if ((person.id > 10 && person.id < 70) && (person.completed == true)) {
                // Create table cells and fill them with the person's data
                row.append($("<td></td>").text(person.userId));
                row.append($("<td></td>").text(person.id));
                row.append($("<td></td>").text(person.title));
                row.append($("<td></td>").text(person.completed));
                tableBody.append(row); // Add the row to the table body


            }
        });
    });
});