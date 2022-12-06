/**
 * WEB222 – Assignment 02
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Sunchit Singh
 *      Student ID: 169146214
 *      Date: October 13, 2022
 *
 * Please see all unit tests in the files problem-1.test.js, problem-2.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to work with the users Array.
 *
 * Welcome to Assignment 2! In this assignment, you're going to be practicing
 * different ways of working with JavaScript Objects, both built-in Objects
 * like Array and String, and also working with custom Objects you create.
 *
 * Before you dive into all the problems below, let's spend a minute helping you
 * learn how to work with the sample user data included in this assignment.
 *
 * We've included an extra file in this assignment, `src/users.json`. Go
 * take a look at it.  This is a JSON file, which is a data format for
 * representing Objects (NOTE: we'll talk more about JSON in later weeks, and
 * you can read more about it at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON)
 * You can think of JSON files like mini databases for loading data into a program.
 * We'll use it in this assignment to create a list of Users in an
 * imaginary application.
 *
 * This Users data is an Array where each item in the Array is a custom User
 * Object.  Users is really [user, user, user, ...], and each user Object has
 * the following structure:
 *
 * {
 *   "id": 1,                               // A unique Number
 *   "name": {                              // An Object with user name info
 *     "first": "Paige",
 *     "last": "Bools"
 *   },
 *   "birthDate": "1995-02-04T07:34:45Z",   // A Date in String form
 *   "contact": {                           // An Object with contact info
 *     "phone": "8989068955",
 *     "email": "pbools0@webmd.com"
 *   },
 *   "address": {                           // An Object with address info
 *     "street": "476 Veith Parkway",
 *     "city": "Cuamba",
 *     "country": "Mozambique"
 *   },
 *   "accessCount": 776,                    // A Number: access count to the app
 *   "isManager": false                     // A Boolean: is this a manager?
 * }
 *
 * We'll load this JSON data for you. The following line of code will load and
 * parse the file named `src/users.json`, setting the variable `users` to be an
 * Array of user Objects. (NOTE: if you're interested in reading more about
 * this, see: https://nodejs.org/api/modules.html#modules_require_id).
 */
const users = require('./users.json');

/**
 * As we discussed above, the `users` variable is now an Array where each item
 * in the Array is a user Object: [user, user, user, ...]. To get you started,
 * write a function that gets the first element in the users Array, and returns
 * only the country String for this user.
 *
 * You can try running this test using the following command:
 *
 * npm test problem-0
 *
 * See if you can get this test to pass by fixing the bug in the code below.
 */
function firstCountry() {
  // Get the first element from the users Array
  let firstUser = users[0];
  // TODO: fix this code to use dot notation to access the country portion only
  return firstUser.address.country;
}

/*******************************************************************************
 * Problem 1: use a for-loop to iterate over Arrays
 *
 * Write a function named `formatNames` that loops over every user Object in
 * the users array, and calls console.log(), passing it a formatted String:
 * the user's first name, a space, and the user's last name:
 *
 * "Paige Bools"
 * "Elle Bellord"
 * etc...
 *
 * In your solution, make use of the following:
 *
 *  - use a for-loop to iterate over the items in users
 *  - concatenate the first name and last name and assign to a `name` variable
 *  - call console.log() with the `name` variable
 *
 * Your function doesn't need to return anything.
 ******************************************************************************/

function formatNames() {
  for (let i = 0; i < users.length; i++) {
    let name = `${users[i].name.first} ${users[i].name.last}`;
    console.log(name);
  }
}
formatNames();
/*******************************************************************************
 * NOTE: The next Problems use a custom Object named userUtils.  You will be
 * asked to add methods to this object in the problems below.
 ******************************************************************************/
const userUtils = {};

/*******************************************************************************
 * Problem 2: create userUtils.getManagers()
 *
 * Add a new method to the `userUtils` Object called `getManagers`. This method
 * will return a new Array with all manager users.  In other words, the
 * new Array will include all user Objects where isManger is true.
 *
 * In your solution, make use of the following:
 *
 *  - create an empty array named `managers`
 *  - use a for...of loop to loop over all user Objects in users
 *  - if a user is a manager, add the user Object to the managers Array
 *
 * Your function should return the managers Array.
 ******************************************************************************/

// TODO: your code here...
userUtils.getManagers = function() {
  let managers = [];
  for (var element of users) {
    if (element.isManager === true) {
      managers.push(element);
    }
  }
  return managers;
};
/*******************************************************************************
 * Problem 3: create userUtils.getOldestUser()
 *
 * Add a new method to the `userUtils` Object called `getOldestUser`. This
 * method will find the oldest user in the users Array and return his or her
 * user Object.
 *
 * In your solution, make use of the following:
 *
 *  - use the .forEach() method of the users Array
 *  - convert each user's `birthDate` from a String to a Date Object
 *  - use the getAgeInYears() function below to calculate the user's age
 *  - keep track of the largest age you encounter, and the user who it belongs to
 *
 * Your function should return the full user object of the oldest user.
 ******************************************************************************/

// Given a birthDate (a Date object), return an age in years.
function getAgeInYears(birthDate) {
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// TODO: your code here...
userUtils.getOldestUser = function() {
  let age = [];
  let maxAgeInd;

  users.forEach(function(element) {
    let date = new Date(element.birthDate);
    age.push(getAgeInYears(date));
  });

  let maxAge = age[0];

  for (let i = 0; i < age.length; i++) {
    if (maxAge < age[i]) {
      maxAge = age[i];
      maxAgeInd = i;
    }
  }
  return users[maxAgeInd];
};

/*******************************************************************************
 * Problem 4: create userUtils.getProfiles()
 *
 * Add a new method to the `userUtils` Object called `getProfiles`. This
 * method will transform all user Objects in the users Array into new Objects
 * that contain profile information.  The new Objects will look like this:
 *
 * {
 *   id: 1,
 *   email: 'Paige Bools <pbools0@webmd.com>',
 *   image: 'https://faces.com/user/1?width=150&height=150'
 * }
 *
 * Specifically, a user Object will get transformed into a new object that has:
 *
 *  - id: copy the id from the original user Object to the new profile Object
 *  - email: combine the first name, last name, and email into a new String
 *  - image: create a URL to the user's image using the user's id.  NOTE: the
 *    /1 in the URL refers to the user's id, so with an id=56 you'd have /56
 *
 * In your solution, make use of the following:
 *
 *  - use the .map() method of the users Array to create a new Array of profiles
 *  - create a new Object to hold the profile information (id, email, image)
 *  - copy and reformat the properties on the user Object to the new profile Object
 *  - return the Array created by the .map() method
 *
 * NOTE: your function should accept two parameters, `width` and `height`:
 *
 * @param {Number} width - the width to use for the profile image
 * @param {Number} height - (optional) the height to use for the profile image.
 *                          If missing, use the same value as width.
 ******************************************************************************/

// TODO: your code here...
userUtils.getProfiles = function(width, height = width) {
  let profileInfo = users.map(function(element) {
    return {
      id: element.id,
      email: `${element.name.first} ${element.name.last} <${element.contact.email}>`,
      image: `https://faces.com/user/${element.id}?width=${width}&height=${height}`
    };
  });
  return profileInfo;
};

/*******************************************************************************
 * Problem 5: create userUtils.updateAccessCount()
 *
 * Add a new method to the `userUtils` Object called `updateAccessCount`. This
 * method will increase the accessCount property of all user Objects defined
 * in a list by the amount specified:
 *
 * userUtils.updateAccessCount(2, [1, 5, 75]);
 *
 * The function call above would increase the accessCount for user Objects
 * in the users Array with ids 1, 5, and 75.  Each of these three user Objects
 * would have their accessCount incremented by 2.
 *
 * userUtils.updateAccessCount(1, 62);
 *
 * In this version of the function call, only the user Object with id=62
 * would be updated, and its accessCount would go up by 1.
 *
 * In your solution, make use of the following:
 *
 *  - deal with the case that you are passed a Number and also an Array of ids
 *    (hint: convert a single number to an array, so you can always use arrays)
 *  - loop through the list of ids passed to you using any method you like
 *  - use the .find() method of the users Array to find a user by id to update
 *  - update the user's accessCount for each of the id(s) by the amount specified
 *  - if any/all of the ids passed to you aren't in the users array, don't do anything.
 *
 * Your function should return an Array with info about each id and the new
 * accessCount for this user:
 *
 * [
 *   { id: 1, accessCount: 778 },
 *   { id: 2, accessCount: 492 },
 *   ...
 * ]
 *
 * @param {Number} amount - the amount to update each accessCount
 * @param {Number|Array} ids - the id (Number) or ids (Array) of user(s) to update
 ******************************************************************************/

// TODO: your code here...
userUtils.updateAccessCount = function(amount, ids) {
  var check = ids.length;
  let idArr = ids;
  var found = [];
  if (check) {
    for (let i = 0; i < idArr.length; i++) {
      found.push(users.find(element => element.id === idArr[i]));
    }
  } else {
    found.push(users.find(element => element.id === ids));
  }
  let newAccess = [];
  newAccess = found.map(function(element) {
    try {
      return {
        id: element.id,
        accessCount: element.accessCount + amount
      };
    } catch (error) {
      return undefined;
    }
  });
  newAccess = newAccess.filter(function(element) {
    return element !== undefined;
  });
  return newAccess;
};

/*******************************************************************************
 * Problem 6: create userUtils.search.byName()
 *
 * Add a new Object to the `userUtils` Object called `search`, and to this
 * `search` property, add a new function called `byName`. This method will
 * allow us to search for users in the `users` Array by their name:
 *
 * userUtils.search.byName('Paige');
 *
 * This will return an Array of all user Objects which have a firstname OR
 * lastname that exaclty matches 'Paige'.
 *
 * userUtils.search.byName('Pa', true);
 *
 * This will return an Array of all user Objects which have a firstname OR
 * lastname that BEGINS WITH the string 'Pa'.  The second argument specifies
 * that we want to do a fuzzy search (i.e., matches don't have to be exact).
 *
 * In your solution, make use of the following:
 *
 *  - use the .filter() method of the users Array to create a new Array of
 *    user Objects which match the search name criteria
 *  - allow for an exact or a fuzzy search to be performed, and search accordingly.
 *    An exact search is one where the name given must match exactly with the
 *    firstname or lastname.  A fuzzy search only has to begin with the name passed,
 *    and should work for both lower and UPPER case comparisons (e.g., it should
 *    not matter, and should match if the letters are the same regardless of case).
 *
 * Your function should return an Array with all user Objects that match
 * the name criteria.
 *
 * @param {String} name - the name or name portion to search for
 * @param {Boolean} fuzzy - if true, do a fuzzy search; otherwise do an exact search
 ******************************************************************************/

//TODO: your code here...
userUtils.search = {};
userUtils.search.byName = function(name, fuzzy) {
  var filtered;
  if (fuzzy) {
    const check = name.toUpperCase();
    filtered = users.filter(
      element =>
        element.name.first.toUpperCase().startsWith(check) ||
        element.name.last.toUpperCase().startsWith(check)
    );
  } else {
    filtered = users.filter(element => element.name.first === name || element.name.last === name);
  }
  return filtered;
};

/*******************************************************************************
 * Problem 7: create userUtils.search.byCountry()
 *
 * Add a new method to the `userUtils.search` Object called `byCountry`.
 * This method will allow us to search for users in the `users` Array by
 * country name(s):
 *
 * userUtils.search.byCountry('Canada');
 *
 * This will return an Array of all user Objects which have country = 'Canada'.
 *
 * userUtils.search.byCountry('Canada', 'China', 'Brazil');
 *
 * This will return an Array of all user Objects which have a country of
 * 'Canada', 'China', or 'Brazil'.
 *
 * Your function should return an Array with all user Objects that match
 * the country criteria.
 *
 * Allow the user to pass ANY number of arguments to your function (i.e., don't
 * define argument names).  You could also try using a Rest Parameter, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 ******************************************************************************/

// TODO: your code here...
userUtils.search.byCountry = function(...country) {
  var filtered = [];
  var filterReturn = [];
  for (let i = 0; i < country.length; i++) {
    filtered = users.filter(element => element.address.country === country[i]);
    Array.prototype.push.apply(filterReturn, filtered);
  }
  return filterReturn;
};

/*******************************************************************************
 * Problem 8: create userUtils.createWelcomeEmails()
 *
 * Add a new method to the `userUtils` Object called `createWelcomeEmails`.
 * This method will search for all users in the `users` Array who have an
 * accessCount of 0, and generate a personalized welcome email message
 * for each of them:
 *
 * userUtils.createWelcomeEmails();
 *
 * This will return an Object, where each key is the email address of a user
 * with an accessCount of 0.  The value of these properties will be the text
 * of a custom email message to this user:
 *
 * {
 *   "pbools0@webmd.com": "...text of email message Paige Bools...",
 *   "ebellord1@blinklist.com": "...text of email message to Elle Bellord...",
 *   ...
 * }
 *
 * The personalized email message text should use this template:
 *
 * -----------------------------------------------------------------------------
 * Dear FirstName Lastname,
 *
 * Welcome to imaginary application!  We're so happy you joined, and wanted
 * to take a moment to say hello. Our other users from City, Country will
 * be glad to have you join them.
 *
 * Have a great day!
 *
 * Your Friends at the Imaginary Application Team
 * -----------------------------------------------------------------------------
 *
 * You will need to replace FirstName, LastName, City, and Country with the
 * given user's information.
 *
 * HINTS:
 *
 *  - multi-line template strings can be created in JavaScript, see:
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *  - you can combine calls to forEach(), filter(), etc to process Arrays multiple times
 *  - Remember that Object properties can be accessed/set using dot (o.foo) or
 *    index notation (o[foo]).
 ******************************************************************************/

// TODO: your code here...
userUtils.createWelcomeEmails = function() {
  var emailReturn = {};
  users.forEach(function(element) {
    if (element.accessCount === 0) {
      var object = {};
      var key = element.contact.email;
      object[key] = `Dear ${element.name.first} ${element.name.last}
Welcome to imaginary application!  We're so happy you joined, and wanted
to take a moment to say hello. Our other users from ${element.address.city}, ${element.address.country} will
be glad to have you join them.

Have a great day!

Your Friends at the Imaginary Application Team`;
      Object.assign(emailReturn, object);
    }
  });
  return emailReturn;
};

// Expose functions for unit tests, you can leave these alone.
exports.firstCountry = firstCountry;
exports.formatNames = formatNames;
exports.userUtils = userUtils;
