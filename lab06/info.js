/*
    Name: Sunchit Singh
    Student ID: 169146214
    Date: November 11, 2022
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
    document.getElementsByClassName("r-name")[0].innerHTML=(localStorage.getItem("fullname").split(" "))[0];
    document.getElementsByClassName("r-name")[1].innerHTML=localStorage.getItem("fullname");
    document.getElementsByClassName("r-email")[0].innerHTML=localStorage.getItem("email");
    document.getElementsByClassName("r-phone")[0].innerHTML=localStorage.getItem("phone");
    document.getElementsByClassName("r-date")[0].innerHTML=localStorage.getItem("date");
    document.getElementsByClassName("r-feedback")[0].innerHTML=localStorage.getItem("feedback");

    console.log(fullname);
}

