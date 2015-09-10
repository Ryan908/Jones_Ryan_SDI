/*
Ryan Jones
SDI Section 02
09/09/2015
Expressions Assignment
 */







//Created variable students and prompted user for input

var students = prompt("How many students are in your class?");

//Print number of student to the console.
console.log(students);

//Alert user confirming number of students and advise to the next step
alert("Ok you will have " +students+ " students in attendance. \nNext we will need to find out how many cupcakes each student will have.");

//Created variable cupcakes and prompted for user input.
var cupcakes = prompt("How many cupcakes will each of your student be allowed to have?");

//Print number of cupcakes to the console
console.log(cupcakes);

//Multiplied the number of students to get the total number of cupcakes needed.
students *= cupcakes;

//Alert user confirming total number of cakes they will need for their students.
alert("You will need "+students+" cupcakes for your entire class.")

//Printed the total number of cupcakes to the console
console.log(students);

//Setting variable total cakes into place for final calculation.
totalcakes = students * cupcakes;




