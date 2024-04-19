import { things } from "./classes.js";
import { prod } from "./data.js";
import { Products } from "./const.js";

const products = document.querySelector(".products");
const productCards = document.querySelector(".products__cards");
const addbtn = document.querySelector(".products__btn");
const modal = document.querySelector(".modal");
const delete__btn = document.querySelector(".delete__btn");
const submit__btn = document.querySelector(".submit__btn");
const inputClear = document.querySelector(".inputClear");

const inputName = document.querySelector(".name");
const inputquantity = document.querySelector(".quantity");
const inputimg = document.querySelector(".img");
const inputunit = document.querySelector(".unit");
const inputprice = document.querySelector(".price");

function dateproductCards(products) {
  let productHTML = "";
  products.forEach((product) => {
    productHTML += `
      <div class="products__card">
        <div class="products__card__imgs">
          <img src="${product.img}" alt="${product.name}" />
        </div>
        <div class="products__card__info">
          <h2 class="products__card__title">name: ${product.name}</h2>
          <p class="products__card__desc">quentity: ${product.quentity}</p>
          <p class="products__card__desc">unit: ${product.unit}</p>
          <p class="products__card__desc">price: ${product.price}</p>
        </div>
        <div class="products__card__btns">
          <button class="products__btn">Submit</button>
          <button class="products__btn" name="delete" data-id="${product.id}">Delete</button>
        </div>
      </div>
    `;
  });
  productCards.innerHTML = productHTML;
}
dateproductCards(prod);

addbtn.addEventListener("click", () => {
  modal.style.display = "block";
});

delete__btn.addEventListener("click", () => {
  modal.style.display = "none";
});

submit__btn.addEventListener("click", (el) => {
  el.preventDefault();
  if (
    inputName.value &&
    inputimg.value &&
    inputquantity.value &&
    inputunit.value &&
    inputprice.value &&
    inputName.value
  ) {
    let addproducts = new things(
      inputName.value,
      inputimg.value,
      inputquantity.value,
      inputunit.value,
      inputprice.value,
      inputName.value
    );

    prod.push(addproducts);
    localStorage.setItem(Products, JSON.stringify(prod));
    dateproductCards(prod);
    modal.style.display = "none";
    inputName.value = "";
    inputimg.value = "";
    inputquantity.value = "";
    inputunit.value = "";
    inputprice.value = "";
    inputName.value = "";

    // inputClear.forEach((clear) => {
    //   clear.value = "";
    // });
  } else {
    alert("Iltimos malumotni toliq kiriting!!!");
  }
});

const deleteBtn = (id) => {
  let index = prod.findIndex((u) => u.id === id);
  prod.splice(index, 1);
  dateproductCards(prod);
};

products.addEventListener("click", (e) => {
  if (e.target.name === "delete") {
    deleteBtn(e.target.dataset.id);
  } else if (e.target.name === "edit") {
  }
});
