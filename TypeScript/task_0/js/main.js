// Defines the student interface
// Create two students
var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "USA",
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "Canada",
};
// Store students in an array
var studentsList = [student1, student2];
// Create a table and append the rows using Vanilla JS
var table = document.createElement("table");
var tableHeader = table.createTHead();
var headerRow = tableHeader.insertRow();
var headerFirstName = headerRow.insertCell();
headerFirstName.innerText = "First Name";
var headerLocation = headerRow.insertCell();
headerLocation.innerText = "Location";
// Loop through studentList array and append the rows to the table
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell();
    var locationCell = row.insertCell();
    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.location;
});
// Append table to body of the html document
document.body.appendChild(table);
