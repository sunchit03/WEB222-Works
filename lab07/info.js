/*
    Name: Sunchit Singh
    Student ID: 169146214
    Date: November 24, 2022
*/

function getData()
{
    //getting the values
    var fullname = document.getElementById("fullname").value;
    var email= document.getElementById("email").value; 
    var phone = document.getElementById("phone").value; 
    var date = document.getElementById("date").value;
    var feedback = document.getElementById("feedback").value; 
    //saving the values in local storage
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("date", date);
    localStorage.setItem("feedback", feedback);   


}

function display() {
    //document.getElementsByClassName("r-name")[0].innerHTML= fullname;
    document.getElementsByClassName("r-name")[0].innerHTML=(localStorage.getItem("fullname").split(" "))[0];
    document.getElementsByClassName("r-name")[1].innerHTML=localStorage.getItem("fullname");
    document.getElementsByClassName("r-email")[0].innerHTML=localStorage.getItem("email");
    document.getElementsByClassName("r-phone")[0].innerHTML=localStorage.getItem("phone");
    document.getElementsByClassName("r-date")[0].innerHTML=localStorage.getItem("date");
    document.getElementsByClassName("r-feedback")[0].innerHTML=localStorage.getItem("feedback");
}


function formSubmit(event) {
    debugger;
    if (!inputValidation()) {

        event.preventDefault();
        return false;
    }
    return true;
}


function inputValidation() {
    let fname = document.getElementById("fullname").value;
    let mail = document.getElementById("email").value; 
    let telephone = document.getElementById("phone").value; 
    let dateVal = document.getElementById("date").value;
    let feedbackVal = document.getElementById("feedback").value;

    if (fname === "") {
        alert("Name field cannot be empty");
        return false;
    }

    if (fname.split(" ")[1] === undefined || fname.split(" ")[1] === "") {
        alert("Enter both first and last name");
        return false;
    }

    if (mail === "") {
        alert("Email field cannot be empty");
        return false;
    }
    
    if (!mail.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
        alert("Email address invalid. Enter a valid email address.");
        return false;
    }

    if (telephone === "" ) {
        alert("Phone number cannot be empty");
        return false;
    }

    if (!telephone.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)) {
        alert("Invalid phone number format.");
        return false;
    }

    if (dateVal === "") {
        alert("Date field cannot be empty.")
        return false;
    }

    if (feedbackVal === "") {
        alert("Feedback field cannot be empty.")
        return false;
    }

    return true;
};






