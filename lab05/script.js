// Name: Sunchit Singh
// Student ID: 169146214
// Email: sunchit-singh@myseneca.ca

function changeCSS() {
    if (document.getElementsByTagName("link").item(0).getAttribute("href") === "styles1.css") {
        document.getElementsByTagName("link").item(0).setAttribute("href", "styles2.css");
        console.log("css -> styles2.css");
    }
    else {
        document.getElementsByTagName("link").item(0).setAttribute("href", "styles1.css");
        console.log("css -> styles1.css");
    }
}

function changeColor() {
    let hexCode = (document.querySelector("#bg-color").value);
    if (!hexCode.startsWith("#")) {
        hexCode = "#" + hexCode
    }

    if (hexCode.match(/^#[0-9A-F]{1,6}$/gi)) {
        document.getElementById("bg-color").setAttribute("style", `background-color:${hexCode}`);
        console.log("colour changed to ", hexCode);
    }
    else {
        console.log(hexCode, "is not valid")
    }
}

     