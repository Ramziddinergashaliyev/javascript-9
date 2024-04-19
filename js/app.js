import { things } from "./classes.js";
import { prod } from "./data.js";

const productCards = document.querySelector(".products__cards");
const addbtn = document.querySelector(".products__btn");
const modal = document.querySelector(".modal");

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
          <button class="products__btn">Delete</button>
        </div>
      </div>
    `;
  });
  productCards.innerHTML = productHTML;
}

addbtn.addEventListener("click", () => {
  modal.style.display = "block";
});
dateproductCards(prod);
