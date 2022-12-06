/**
 * WEB222 â€“ Quiz/Lab #3
 *
 * I declare that this lab is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Sunchit Singh
 *      Student ID: 169146214
 *      Date: October 7, 2022
 *
 */

/*******************************************************************************
 * Lab 3: Complete and/or modify the code below as per the instructions included in
 * each individual question. Your code should run in NODE.js as shown in class.
 * Some questions may need to be modified in order to run correctly, or written from
 * scratch. You may decide.
 * 
 * Note, you can create your answer beneath the question comment itself
 */
 
 
/*******************************************************************************
 * Q1:
 * Create a new object called "person". Give the person object 2 properties;
 * 
 * name
 * age
 * 
 * name should be a string array, the first position holds your first name, and second your last.
 * age should be a number, date
 * 
 * output the entire object to the console.
 */

var person = {
    name: ['Sunchit', 'Singh'],
    age: 19
};

console.log(person);

  /*******************************************************************************
  * Information:
  * 
  * DOT NOTATION
  * 
  * The object name (person) acts as the namespace â€” it must be entered first to access 
  * anything inside the object. Next you write a dot, then the item you want to access 
  * â€” this can be the name of a simple property, an item of an array property, or a call
  *  to one of the object's methods.
  * 
  * If you defined your object correctly in Q1, the following code should display your 
  * name and age
  * ex:
  ********************************************************************************/
   console.log(person.name);
   console.log(person.age);


 /*******************************************************************************
 * Q2:
 * 
 * Redfine (recreate) your person object to include a function. 
 * The function should be called "bio" and should output your first name, 
 * last name and age to the console when you call it.
 * 
 * Make sure to use DOT notation for your output.
 * 
 * ex:
 * Harry Scanlan is 35 years old
 * 
 * Use your function to display the output to the screen.
 * 
 */

 person = {
    name: ['Sunchit', 'Singh'],
    age: 19,
    bio() {
        let retVal = "";

        for (let i = 0; i < this.name.length; i++) {
            if (i < this.name.length - 1) {
            retVal += `${this.name[i]} `;
            }
            else {
                retVal += this.name[i];
            }
        }

        retVal += ` is ${this.age} years old`;

        console.log(retVal);
    }
 };

 person.bio();
   
  /*******************************************************************************
  * Q3:
  * Using the same Object from Q2, ADD a new property to your object.
  * This property should be called "studentid" and should be defaulted to your
  * student number.
  * 
  * DO NOT redefine your object. You must ADD the property to it.
  * 
  * You may have to research "how to add a new property to a javascript object"
  * 
  * Make sure to use DOT notation for your input/output.
  * 
  * Display the entire object using the console.
  */
   
  person.studentid = '169146214';

  console.log(person);

  /*******************************************************************************
  * Q4:
  * Using the same object from Q2, ADD a new function called "introduceSelf()"
  * 
  * DO NOT redefine your object. You must ADD the property to it.
  * 
  * The function should introduce yourself by just your first name and your student id.
  * 
  * Call your function to display your output.
  * 
  * Ex:
  * Hi! I'm Harry and my student id is 1234567.
  */

  person.introduceSelf = function() {
    console.log(`Hi! I'm ${this.name[0]} and my student id is ${this.studentid}.`);
  };

  person.introduceSelf();
  
  /*******************************************************************************
  * Information:
  * An object like this is referred to as an object literal â€” we've literally written 
  * out the object contents as we've come to create it. This is different compared to 
  * objects instantiated from classes, which we'll look at later on.
  ********************************************************************************/
  
  
  /*******************************************************************************
  * Q5:
  * So far we've been using DOT notation, but we can also use Bracket Notation when
  * accessing objects. 
  * 
  * Display your FIRST NAME only and age using Bracket notation in the console.
  *
  */

    console.log(person.name[0]);
    console.log(person['age']);
  
 /*******************************************************************************
  * Q6:
  * Add another function to your person object that outputs the same as bio(), but
  * uses BRACKET notation for the output instead of DOT notation. 
  * 
  * Call the function bioBracket() and then use it to display your output
 
  */
  
  person['bioBracket'] = function() {
    console.log(`Hi! I'm ${this.name[0]} and my student id is ${this.studentid}.`);
  };

  person.bioBracket();