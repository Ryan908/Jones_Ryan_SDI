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
alert("You will need "+students+" cupcakes for your entire class.");

//Printed the total number of cupcakes to the console
console.log(students);


//Created new variable to indicate how many cupcakes the user will want to be frosted, and how many will have sprinkles.
var frosted = prompt("Some cupcakes will come with sprinkles and some will be frosted. \n \nHow many cakes do you wish to have frosted?");

//Subtracted the total number of cakes from the amount of cakes that would be frosted to determine how many cakes will have sprinkles.
 students -= frosted;

//Alert user as to how many cupcakes he will have with sprinkles
alert("You will have "+students+" cupcakes that will have sprinkles!");

//Print number of cupcakes with sprinkles to the console.
console.log(students);

var totals = [students,frosted];

console.log(totals[1]);


/* I entered 50 students in the class and gave each student 2 cupcakes. This gave me a total of 100 cupcakes need for the entire class.
Next I entered 40 cupcakes that I wanted frosted which gave me a total of 60 cupcakes that would have sprinkles. I tried this calculation again with
20 frosted cupcakes and the result was 80 cupcakes with sprinkles.
 */




