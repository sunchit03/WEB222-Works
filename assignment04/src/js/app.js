/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Sunchit Singh
 *      Student ID: 169146214
 *      Date:       November 15, 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

let heading = document.getElementById("selected-category");
let menu = document.getElementById("menu");
let productsCategory = document.getElementById("category-products");

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

heading.innerText = categories[0].name;

window.onload = function () {
  console.log("Page loaded");

  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].categories.length; j++) {
      if (categories[0].id === products[i].categories[j] && !products[i].discontinued) {
        let tr = document.createElement("tr");
        tr.addEventListener("click", function () {
          console.log(products[i]);
        });

        let tdName = document.createElement("td");
        tdName.innerText = products[i].title;
        tr.appendChild(tdName);

        let tdDesc = document.createElement("td");
        tdDesc.innerText = products[i].description;
        tr.appendChild(tdDesc);

        let tdPrice = document.createElement("td");
        tdPrice.innerText = new Intl.NumberFormat("en-US", {
          currency: "CAD",
          style: "currency"
        }).format(products[i].price / 100);
        tr.appendChild(tdPrice);

        productsCategory.appendChild(tr);
      }
    }
  }

  for (let i = 0; i < categories.length; i++) {
    let button = document.createElement("button");
    button.id = categories[i].id;
    button.innerText = categories[i].name;

    button.addEventListener("click", function () {
      heading.innerText = this.innerText;
    });

    button.addEventListener("click", function () {
      productsCategory.innerHTML = "";
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].categories.length; j++) {
          if (this.id === products[i].categories[j] && !products[i].discontinued) {
            let tr = document.createElement("tr");
            tr.addEventListener("click", function () {
              console.log(products[i]);
            });

            let tdName = document.createElement("td");
            tdName.innerText = products[i].title;
            tr.appendChild(tdName);

            let tdDesc = document.createElement("td");
            tdDesc.innerText = products[i].description;
            tr.appendChild(tdDesc);

            let tdPrice = document.createElement("td");
            tdPrice.innerText = new Intl.NumberFormat("en-US", {
              currency: "CAD",
              style: "currency"
            }).format(products[i].price / 100);
            tr.appendChild(tdPrice);

            productsCategory.appendChild(tr);
          }
        }
      }
    });

    menu.appendChild(button);
  }
};
