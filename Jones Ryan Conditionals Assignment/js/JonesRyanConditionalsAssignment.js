/*
Ryan Jones
SDI Section 02
Conditionals Assignment
09/16/15
 */

//set up files and first variable of maximum capacity of guests allowed on the museum tour.
var tourGuestMax = 10;

//prompt user for the number of guests.
var guests = prompt("How many guests would you like to invite on your tour?");

//Prompt user whether they have an adequate number of guests and validate entry.
(guests <= tourGuestMax) ? console.log("Ok let's begin the tour!") : console.log("You have too many people.");

if (guests === ""){
    console.log("You must enter a number!");
    alert("You must enter a number!");
}

