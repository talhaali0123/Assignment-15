// Chapter 12-13 IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string)
//in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII
//codes:- A=65, Z=90, a=97, z=122).

let character = prompt("Enter a character:");

if (character >= 'A' && character <= 'Z') {
    console.log("Uppercase letter");
} else if (character >= 'a' && char <= 'z') {
    console.log("Lowercase letter");
} else if (!isNaN(char)) {
    console.log("Number");
} else {
    console.log("Other character");
}


// 2. Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal.

let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
    console.log(num1 + " is larger");
} else if (num2 > num1) {
    console.log(num2 + " is larger");
} else {
    console.log("Both numbers are equal");
}


// 3. Write a program that takes input a number from user &
//state whether the number is positive, negative or zero.

let num = parseInt(prompt("Enter a number:"));

if (num > 0) {
    console.log("Positive number");
} else if (num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}


// 4. Write a program that takes a character (i.e. string of
//length 1) and returns true if it is a vowel, false otherwise

let char = prompt("Enter a character:");

if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
    console.log("True - Vowel");
} else {
    console.log("False - Not a vowel");
}


// 5. Write a program that
//a. Store correct password in a JS variable.
//b. Asks user to enter his/her password
//c. Validate the two passwords:
//i. Check if user has entered password. If not, then
//give message “ Please enter your password”
//ii. Check if both passwords are same. If they are
//same, show message “Correct! The password you
//entered matches the original password”. Show
//“Incorrect password” otherwise.

let correctPassword = "12345";  // Store correct password
let enteredPassword = prompt("Enter your password:");

if (!enteredPassword) {
    console.log("Please enter your password");
} else if (enteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password");
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900):"));

if (time >= 0 && time < 1200) {
    console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening");
} else if (time >= 2100 && time <= 2359) {
    console.log("Good night");
} else {
    console.log("Invalid time");
}


// Chapter 10 (if statements)

// 1. var city = &quot;Karachi&quot; if (city = &quot;Karachi&quot;) { console.log(&quot;The City
// OF Lights&quot;) Correct the above statement:
// Also try this statement by yourself

var city = "Karachi";
if (city === "Karachi") {
    console.log("The City OF Lights");
}


// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.

if (x === y) {
    let z = prompt("Enter the value for z:");
    let newVar = z;  // Assign it to another variable
}


// 3. Code an if statement that tests if ZipCode is &quot;10010&quot; so, Alert
// that &quot;Karachi&quot;. if not then alert (&quot;Please write correct city&quot;)

let ZipCode = prompt("Enter your Zip Code:");
if (ZipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}


// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 1;

var x = 1;
if (x === 1) {
    x = 2;  // Assign a new value
}


// Chapter 11 (Comparison Operators)

// 1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)

if (x !== y) {
    // Code block
}


// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.

if (x >= y) {
    // Code block
}


// 3. Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.

let x = 5;
if (x !== 10) {
    x = 10;
}


// 4. Code an if statement that tests whether a number is unequal
// to a different number. If the condition is true (it will be),
// display a congratulations alert.

if (5 !== 10) {
    alert("Congratulations!");
}


// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.
// If the condition is true (it will be), display an alert that says &quot;No
// match&quot;

let firstName = prompt("Enter your first name:");
if (firstName !== "John") {
    alert("No match");
}



// Chapter 12 (if…else and else if statements)

// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.

if (x >= y) {
    alert("x is greater than or equal to y");
} else {
    alert("x is less than y");
}



// 2. Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)

let marks = parseInt(prompt("Enter your marks:"));
let percentage = (marks / 100) * 100;

if (percentage >= 90) {
    alert("Grade: A");
} else if (percentage >= 75) {
    alert("Grade: B");
} else if (percentage >= 50) {
    alert("Grade: C");
} else {
    alert("Grade: F");
}



// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert(&quot;a is 10&quot;);
// }
// If a isn&#39;t 10, display an alert that says The correct value of a is
// ____
// Note: Try this by yourself

var a = prompt("Enter a value for 'a':");

if (a == 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is " + a);
}


// 4. Prompt the user to enter a city.
// If the city is Karachi, display an alert acknowledging it is Karachi.
// If not, check to see if it&#39;s Lahore.
// If it is, display an alert acknowledging it&#39;s Lahore.
// Otherwise, display a different alert.

let city = prompt("Enter city:");
if (city === "Karachi") {
    alert("It's Karachi");
} else if (city === "Lahore") {
    alert("It's Lahore");
} else {
    alert("Other city");
}


// Chapter 13 (Testing sets of conditions)


// 1. Code the first line of an if statement that tests whether both are
// true: a has the same value as b and c has the same value as d.

if (a === b && c === d) {
    // Code block
}


// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn&#39;t have the
// same value as d.

if (a === b || c !== d) {
    // Code block
}


// 3. Code the first line of an if statement that tests whether I.
// name is either &quot;Hamza&quot; or &quot;Arsalan&quot;. II. age is Less than 60.

if ((name === "Hamza" || name === "Arsalan") && age < 60) {
    // Code block
}



// 4. Declare two variables and assign them number values.
// If the first variable is less than the second variable or greater than
// the second variable, display an alert.

let a = 10;
let b = 20;

if (a < b || a > b) {
    alert("a is not equal to b");
}



// 5. Declare 2 variables. Assign one of them your first name and the
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.

let first_Name = "John";
let last_Name = "Doe";

let enteredFirstName = prompt("Enter your first_Name:");
let enteredLastName = prompt("Enter your last_Name:");

if (enteredFirstName === first_Name && enteredLastName === last_Name) {
    alert("Your names match!");
} else {
    alert("Your names do not match.");
}



// Chapter 14 (If statements nested)


// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says &quot;Password must be greater than 5&quot; if greater
// than 5 then Alert &quot;OK&quot;.

let password = prompt("Enter password:");
if (password) {
    if (password.length > 5) {
        alert("OK");
    } else {
        alert("Password must be greater than 5");
    }
}



// 2. Try this statement by yourself if (a === 1) { if (c === &quot;Max&quot;) {
// alert(&quot;OK&quot;);
// }
// }

if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}


// 3. Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.
// if (a === 1) { if (c
// === &quot;Max&quot;) {
// alert(&quot;OK&quot;);
// }
// }

if (a === 1 && c === "Max") {
    alert("OK");
}


// 4. Declare two variables and assign them the same number value.
// Test two conditions, using nested if statements. Test whether the
// first variable equals the second variable and also whether it is less
// than or equal to the second variable. If the test passes—and it
// will—display an alert message.

let num_1 = 5;
let num_2 = 5;

if (num_1 === num_2) {
    if (num_1 <= num_2) {
        alert("Both conditions are true: num_1 equals num_2 and num_1 is less than or equal to num_2");
    }
}
