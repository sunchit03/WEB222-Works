/**
 * WEB222 â€“ Quiz/Lab #2
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
 *      Date: September 27, 2022
 *
 */
 
/*******************************************************************************
 * Lab 2: Complete and/or modify the code below as per the instructions included in
 * each individual question. Your code should run in NODE.js as shown in class.
 * Some questions may need to be modified in order to run correctly, or written from
 * scratch. You may decide.
 * 
 * Note, you can create your answer beneath the question comment itself
 */
 
/*******************************************************************************
 * Q1:
 * create a function that displays each character of this string on the screen
 * with a space between each letter. The string must appear on one line
 * 
 * Example output:
 * H e l l o   W o r l d ,   I ' m   a   n e w   j a v a s c r i p t   p r o g r a m m e r
 */

 const stringData = "Hello World, I'm a new javascript programmer";

 function stringNew(read) {
    var answer = "";
 for (var i = 0; i < read.length ; i++) {
    if (i < read.length - 1) {
    answer += read[i] + " ";
    }
    else {
        answer += read[i];
    } 
 }

 console.log(answer);

}

 stringNew(stringData);

 /*******************************************************************************
 * Q2:
 * Replace all of the pipe "|" characters with a comma ",". Note, Older versions of 
 * Javascript do not have a replaceall function. Find a way to replace these.
 * Example output:
 * Harry,Jim,Jeswin,Gurpreet,Sam,Tobias,Angel,Tong
 */

var names = "Harry|Jim|Jeswin|Gurpreet|Sam|Tobias|Angel|Tong";


var newString = names.replace(/\|/g, ',');
console.log(newString);

 /*******************************************************************************
 * Q3:
 * Split the names string into an ARRAY based on the ',' and display the names vertically on the screen
 * Example Output:
 * Harry
 * Jim
 * Jeswin
 * Gurpreet
 * Sam
 * Tobias
 * Angel
 * Tong
 */
 
let nameArray = newString.split(",");
for (var i = 0; i < nameArray.length; i++) {
    console.log(nameArray[i]);
}

  /*******************************************************************************
 * Q4:
 * Write a function that extracts the area code from a phone number and display it 
 * on the screen. You can use a regex if you want, but your function must work for
 * all three types of phone numbers.
 * Example Output:
 * 519
 */

  var phoneNum1 = "(519)-555-5555";
  var phoneNum2 = "519-555-5555";
  var phoneNum3 = "5195555555";

  var areaCode = (phoneNum1.match(/^\(?\d\d\d/));
  var areaCode1 = areaCode[0].replace(/^\(?/, "");
  console.log(areaCode1);

  var areaCode = (phoneNum2.match(/^\(?\d\d\d/));
  var areaCode1 = areaCode[0].replace(/^\(?/, "");
  console.log(areaCode1);

  var areaCode = (phoneNum3.match(/^\(?\d\d\d/));
  var areaCode1 = areaCode[0].replace(/^\(?/, "");
  console.log(areaCode1);

 /*******************************************************************************
 * Q5:
 * Create a simple int array that holds X amout of numbers. Initalize the array 
 * when you create it. Output the array to the screen.
 * Example Output:
 * 5,5,6,10,3,1,6
 */

 var arr = [5, 5, 6, 10, 3, 1, 6];

 var newArr = arr.join(",");

 console.log(newArr);