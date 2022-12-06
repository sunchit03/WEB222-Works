/**
 * WEB222 â€“ Quiz/Lab #1
 *
 * I declare that this labs is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Sunchit Singh
 *      Student ID: 169146214
 *      Date: September 14, 2022
 *
 */
 
/*******************************************************************************
 * Lab 1: Complete and/or modify the code below as per the instructions included in
 * each individual question. Your code should run in NODE.js as shown in class.
 * Some questions may need to be modified in order to run correctly, or written from
 * scratch. You may decide.
 * 
 * Note, you can create your answer beneath the question comment itself
 */
 
 
/*******************************************************************************
 * Q1:
 * Output a welcome message to the console. The message should be contained inside of a 
 * string variable that is accessible by the entire program via it's scope.
 */

var welcome = "Welcome to WEB222!";
console.log(welcome);
 
 /*******************************************************************************
 * Q2:
 * Create a conditional statement that outputs the grade of a student based on their 
 * mark. You may use an IF or a SWITCH. I'll get you started.
 */
 
  var grade;
  var mark = 94;
  
if (mark >= 90) {
    grade = "A+";
} else if (mark >= 80) {
    grade = "A";
} else if (mark >= 75) {
    grade = "B+";
} else if (mark >= 70) {
    grade = "B";
} else if (mark >= 65) {
    grade = "C+";
} else if (mark >= 60) {
    grade = "C";
} else if (mark >= 55) {
    grade = "D+";
} else if (mark >= 50) {
    grade = "D";
} else {
    grade = "F";
}
  // ...
  
  console.log("The student received an " + grade + " in the course!");
  
   
  /*******************************************************************************
  * Q3:
  * This the following 4 lines of code has a bug and doesn't add correctly. 
  * Find the bug and fix it so the output is correct. 
  * Add comments to show that you've corrected the bug appropriately. 
  *
  */
   
  var y = "4"; 
  var x = 20;
  
  var total = x + parseInt(y); // The variable y is a string type, so it needs to be converted into a number type.
  console.log(x + " + " + y + " = " + total);
  

  /*******************************************************************************
  * Q4:
  * Create a function that multiply's two numbers together and outputs the answer.
  * The function must accept 2 parameters. Don't forget about SCOPE if you're
  * using variables inside of your function.
  */
  
  // receives two numbers and multiplies them
  function mult(a, b) {
    console.log(`${a} * ${b} = ${a*b}`);
  }
  
  /*******************************************************************************
  * Q5:
  * Using your multiply function, use the shortest amount of code to display the 
  * following output on the screen:
  * 
  * 1 * 1 = 1
  * 2 * 2 = 4
  * 3 * 3 = 9
  * 4 * 4 = 16
  * 5 * 5 = 25
  * 6 * 6 = 36
  * 7 * 7 = 49
  * 8 * 8 = 64
  * 9 * 9 = 81
  * 10 * 10 = 100
  *
  */
  
  // looping from 1 to 10
  for (let i = 1; i <= 10; i++) {
    mult(i, i);
  }
  
  /*******************************************************************************
  * Q6:
  * Determine using a conditional statement, if the following variable is a number
  * or is not a number. If it is not, try to convert it to a number and use
  * your mult() function to multiply it by 2.
  * 
  * NOTE: YOU MAY NOT MODIFY ANY VARIABLES that are Constants.
  *
  */
  
  const number = "17";
  
  if (typeof number === "number") {
    console.log(`Variable number is a ${typeof number}.`)
  } else {
    console.log(`Variable number is a ${typeof number}, so we have to convert it into a number`);
    isNaN(number);
  }
  mult(number, 2);
    
  
  
  

