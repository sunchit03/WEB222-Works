/**
 * WEB222 – Assignment 05
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
 *      Date:       November 30, 2022
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

let heading = document.getElementById("selected-category");
let menu = document.getElementById("menu");
let row = document.createElement("div");
row.classList.add("row");
document.getElementsByTagName("main")[0].appendChild(row);
//let productsCategory = document.getElementById("category-products");

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

heading.innerText = categories[0].name;

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");
  card.onclick = function () {
    console.log(product);
  };

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageURL;
  productImage.alt = `Book cover of "${product.title}"`;
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  // ... rest of your card building code here
  const productContent = document.createElement("div");

  const productName = document.createElement("h6");
  productName.classList.add("book-title");
  productName.innerText = product.title;
  productContent.appendChild(productName);

  const productPrice = document.createElement("span");
  productPrice.classList.add("book-price");
  productPrice.innerText = new Intl.NumberFormat("en-US", {
    currency: "CAD",
    style: "currency"
  }).format(product.price / 100);
  productContent.appendChild(productPrice);

  const productDesc = document.createElement("p");
  productDesc.classList.add("book-desc");
  productDesc.innerText = product.description;
  productContent.appendChild(productDesc);

  card.appendChild(productContent);
  // Return the card’s <div> element to the caller
  return card;
}

window.onload = function () {
  console.log("Page loaded");

  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].categories.length; j++) {
      if (categories[0].id === products[i].categories[j] && !products[i].discontinued) {
        row.appendChild(createProductCard(products[i]));
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
      row.innerHTML = "";
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].categories.length; j++) {
          if (this.id === products[i].categories[j] && !products[i].discontinued) {
            row.appendChild(createProductCard(products[i]));
          }
        }
      }
    });
    menu.appendChild(button);
  }
};
