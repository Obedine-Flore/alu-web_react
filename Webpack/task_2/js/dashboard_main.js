import $ from 'jquery';
import '../css/main.css'; // Import the CSS file

// Add elements to the page
$(document).ready(function() {
  $('body').prepend('<p id="logo"></p>');
  $('#app').append('<p>Holberton Dashboard</p>');
  $('#app').append('<p>Dashboard data for the students</p>');
  $('#app').append('<button id="start">Click here to get started</button>');
  $('#app').append('<p id="count"></p>');
  $('#app').append('<p>Copyright - Holberton School</p>');

  let count = 0;
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  $('#start').on('click', _.debounce(updateCounter, 300)); // Use lodash debounce
});