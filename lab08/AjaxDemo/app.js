var api = "https://rickandmortyapi.com/api/";
var select;

window.onload = function () {

    // grab beer select list
    select = document.getElementById('selection');

    // load all beers into the dropbox (select, option)
    loadDropDownList();

    // bind onclick / eventlistener
    var btnLoad = document.getElementById("btn-load");

    btnLoad.onclick = function (e) {

        var itemId = select.value;
        loadPageContent(itemId);
    }
}

// load a single beer
function loadPageContent(itemId) {
    console.log("“There's a lesson here, and I’m not going to be the one to figure it out.” — Rick");

    var url = api + "character/" + itemId;

    var xhr = new XMLHttpRequest();

    // onload will run when we trigger the var
    // XHR to run
    xhr.onload = function () {
        // get beer data
        var response = JSON.parse(this.responseText);

        console.log(response);

        var content = document.getElementById("content");
        content.classList.add("card");
        content.textContent = "";

        var cardImage = document.createElement("div");
        content.appendChild(cardImage);
        var image = document.createElement("img");
        image.src = response.image;
        cardImage.classList.add("card-image");
        cardImage.appendChild(image);

        var cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        content.appendChild(cardContent);
        var name = document.createElement("h2");
        name.innerText = response.name;
        cardContent.appendChild(name);

        var deadOrAlive = document.createElement("span");
        if (response.status === "Dead") {
            deadOrAlive.classList.add("dead");
        } else if (response.status === "Alive") {
            deadOrAlive.classList.add("alive");
        } else {
            deadOrAlive.classList.add("unknown");
        }
        deadOrAlive.innerText = "⦿";
        cardContent.appendChild(deadOrAlive);

        var species = document.createElement("span");
        species.innerText = (response.status.charAt(0).toUpperCase())+response.status.slice(1) + " - " + response.species;
        cardContent.appendChild(species);

        var location = document.createElement("p");
        location.innerText = "Location: ";
        location.setAttribute("style", "color:darkgray");
        cardContent.appendChild(location);
        var lineBreak = document.createElement("span");
        lineBreak.innerHTML = "<br/>";
        location.appendChild(lineBreak);

        var loc = document.createElement("span");
        loc.innerText = response.location.name;
        loc.setAttribute("style", "color:white");
        location.appendChild(loc);
        

    }

    xhr.open("GET", url);
    xhr.send();


}

function loadDropDownList() {
    var url = api + "character";

    var xhr = new XMLHttpRequest();

    // onload will run when we trigger the var
    // XHR to run
    xhr.onload = function () {
        // get beer data
        var response = JSON.parse(this.responseText).results;

        console.log(response);

        // loop through the beers (aka, the data array)
        response.forEach(function (item) {
            //console.log(beer);

            // create a new option
            var option = document.createElement("option");
            option.value = item.id;
            option.innerHTML = item.name;

            select.appendChild(option);
        });

    }

    xhr.open("GET", url);
    xhr.send();

}