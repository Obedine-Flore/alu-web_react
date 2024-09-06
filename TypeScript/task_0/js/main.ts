// Defines the student interface

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "USA",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "Canada",
};

// Store students in an array

const studentsList: Student[] = [student1, student2];

// Create a table and append the rows using Vanilla JS

const table = document.createElement("table");
const tableHeader = table.createTHead();
const headerRow = tableHeader.insertRow();

const headerFirstName = headerRow.insertCell();
headerFirstName.innerText = "First Name";

const headerLocation = headerRow.insertCell();
headerLocation.innerText = "Location";

// Loop through studentList array and append the rows to the table
studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.innerText = student.firstName;
    locationCell.innerText = student.location;
});

// Append table to body of the html document
document.body.appendChild(table);
