/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// The string value 5 was converted into a number for the calculation in result. This doesn't change the output,
// but the Number() conversion makes it more clear what is happening.
let result = Number("5") - 2;
console.log("The result is: " + result);

// The variable isValid is initialized with a string value undefined.
// It is changed to a Boolean value on the next line.
// Before the change, the value would read "false", executing the if statement despite the intention not to.
let isValid;
isValid = Boolean(isValid);
if (isValid) {
    console.log("This is valid!");
}

// The value in age is converted from a string to a number in the
// totalAge arithmetic. This changes totalAge from being read as
// 255 to 30.
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

// Implicit type conversion example:
if (5 == "5") {
    console.log("The string is converted to a number before the comparison.");
}

// Explicit type conversion example:
let stringNumber = 55;
stringNumber = String("55");