var minWage = {
    "Toronto": 15.50,
    "Vancouver": 15.65,
    "Montreal": 14.25,
    "Niagara Falls": 15.50,
    "Victoria": 15.65,
    "Halifax": 13.60,
    "Quebec City": 14.25,
    "Calgary": 15.00,
    "Ottawa": 15.50,
    "Edmonton": 15.00
}


var payDiv = document.getElementById("pay-div");
var city = document.getElementById("city");

payDiv.innerHTML = "";

let payLabel = document.createElement("label");
payLabel.id = "pay-lbl";
payLabel.for = "pay-rate";
payLabel.classList.add("form-label");


let required = document.createElement("span");
required.classList.add("text-danger");
required.innerText = "*";
payLabel.appendChild(required);

payLabel.innerHTML += "Hourly Rate";

let payRate = document.createElement("input");
payRate.id = "pay-rate";
payRate.classList.add("form-control");
payRate.type = "number";
payRate.name = "pay-rate";
payRate.tabIndex = "8";
//payRate.pattern = "^\\d*[.]?\\d+$";
payRate.step = "0.01";



window.onload = function() {
    city.addEventListener("change", () => {
        if (city && city.value) {
            var flag = 0;
            payRate.min = "15.50";
            for (const key in minWage) {
                if (flag == 0 && city.value === key) {
                    payRate.min = `${minWage[key]}`;
                    flag = 1;
                }
            }
        }
    });
}


payRate.required = true;




 function checkRadio() {

    let hiring = document.getElementById("hiring");
    payDiv.innerHTML = "";

    if (hiring.checked === true) {
        
        /* <label id="pay-lbl" for="pay-rate" class="form-label"><span class="text-danger">*</span>Hourly Rate</label>
            <input id="pay-rate" class="form-control" type="text" name="pay-rate" tabindex="8" pattern="^\d*[.]?\d+$" required>
        */
        
        payDiv.appendChild(payLabel);
        // if (city && city.value) {
        //     var flag = 0;
            
        //     for (const key in minWage) {
        //         if (flag == 0 && city.value === key) {
        //             payRate.min = `${minWage[key]}`;
        //             flag = 1;
        //         }
        //     }
        // }
        payDiv.appendChild(payRate);
    }
 };