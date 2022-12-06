var payDiv = document.getElementById("pay-div");


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
payRate.type = "text";
payRate.name = "pay-rate";
payRate.tabIndex = "8";
payRate.pattern = "^\\d*[.]?\\d+$";
payRate.required = true;




 function checkRadio() {

    let hiring = document.getElementById("hiring");
    payDiv.innerHTML = "";

    if (hiring.checked === true) {
        
        /* <label id="pay-lbl" for="pay-rate" class="form-label"><span class="text-danger">*</span>Hourly Rate</label>
            <input id="pay-rate" class="form-control" type="text" name="pay-rate" tabindex="8" pattern="^\d*[.]?\d+$" required>
        */
        
        payDiv.appendChild(payLabel);
        payDiv.appendChild(payRate);
    }
 };