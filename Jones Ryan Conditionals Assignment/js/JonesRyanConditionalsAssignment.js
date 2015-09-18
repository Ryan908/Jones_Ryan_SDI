/*
Ryan Jones
SDI Section 02
Conditionals Assignment
09/16/15
 */

//set up files and first variable of maximum capacity of guests allowed on the museum tour.
var tourGuestMax = 10;
//adding variable for second conditional
var captainMax = 5;

//prompt user for the number of guests.
var guests = prompt("How many guests would you like to invite on your tour?");

//Prompt user whether they have an adequate number of guests and validate entry.
(guests <= tourGuestMax) ? console.log("We can begin the tour!") : console.log("You have too many people.");

if (guests === ""){
    console.log("You must enter a number!");
    alert("You must enter a number!");
}

var captains = prompt("You cannot have a tour group without designating a captain. \n How many captains will you have in your group?");

//calculated booleans using logical operators
if (captains >= captainMax && captains < tourGuestMax ){
    console.log("Ok now we may start the tour.")

}else {
    console.log("But you need more captains.");
}


//validated prompt
if (captains === "") {
    console.log("Please enter how many captains you will need.");
    alert("Please enter how many captains you will need.");
}