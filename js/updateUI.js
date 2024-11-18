import { addProduct, deleteElement, updateAmount } from "./productsLocal.js";

const homeCartTemplate = document.getElementById("home-cart-template");
const productsContainer = document.getElementById("products-container");
const trTemplate = document.getElementById("tr-template");
const tbody = document.querySelector("tbody");

let allProducts;

// stop navigation
const stopNavigation = (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;

  const item = allProducts.find((product) => product.id == id);
  addProduct({ ...item, amount: 1 });
};
export const updateHomeUI = ({ products }) => {
  allProducts = products;
  allProducts.forEach((product) => {
    const { thumbnail, title, price, description, rating, id } = product;
    const clone = homeCartTemplate.content.cloneNode(true);
    const a = clone.querySelector("a");
    const img = clone.querySelector("img");
    const productTitle = clone.querySelector("h2");
    const productDescription = clone.querySelector("p");
    const productRating = clone.querySelector("h5");
    const productPrice = clone.querySelector("span");
    const button = clone.querySelector("button");

    a.href = `./product.html?id=${id}`;
    img.src = thumbnail;
    productTitle.textContent = title;
    productDescription.innerHTML = `<i>${description.slice(0, 90)}...</i>`;
    productRating.innerHTML = `Rating: ★${rating}`;
    productPrice.textContent = `Price: $${price}`;

    productsContainer.appendChild(clone);
    button.setAttribute("data-id", id);
    button.addEventListener("click", stopNavigation);
  });
};
const titleEl = document.getElementById("title");
const categoryEl = document.getElementById("category");
const priceEl = document.getElementById("price");
const descriptionEl = document.getElementById("description");
const discountPercentageEl = document.getElementById("discountPercentage");
const thumbnailEl = document.getElementById("thumbnail");
const carousel = document.getElementById("carousel");
const carouselItemTemp = document.getElementById("carousel-item");
const ratingEl = document.getElementById("rating");
const brandEl = document.getElementById("brand");

export const updateProductUI = (product) => {
  const {
    title,
    description,
    thumbnail,
    images,
    category,
    price,
    discountPercentage,
    rating,
    brand,
  } = product;
  titleEl.textContent = title;
  descriptionEl.textContent = description;
  priceEl.textContent = price;
  ratingEl.textContent = rating;
  discountPercentageEl.textContent = discountPercentage;
  priceEl.textContent = price;
  categoryEl.textContent = category;
  brandEl.textContent = brand;

  if (images.length > 1) {
    images.forEach((imgSrc) => {
      const clone = carouselItemTemp.content.cloneNode(true);
      const image = clone.querySelector("img");
      image.src = imgSrc;
      carousel.appendChild(clone);
    });
  } else {
    thumbnailEl.src = thumbnail;
  }
};

import { formatNumber } from "./formatNumber.js";
import { toast } from "./toast.js";
export const updateTbodyUI = (products) => {
  tbody.innerHTML = "";
  products.forEach((product) => {
    const { id, thumbnail, price, amount, brand, title } = product;
    const clone = trTemplate.content.cloneNode(true);
    const image = clone.querySelector("img");
    const brandEl = clone.querySelector(".brand");
    const titleEl = clone.querySelector(".title");
    const priceEl = clone.querySelector(".price");
    const amountEl = clone.querySelector(".amount");
    const deleteBtn = clone.querySelector(".delete-btn");
    const incrementItemEl = clone.querySelector(".incrementItem");
    const decrementItemEl = clone.querySelector(".decrementItem ");

    image.src = thumbnail;
    brandEl.textContent = `Brand: ${brand}`;
    titleEl.textContent = `${title}`;
    priceEl.textContent = `${formatNumber(price)}`;
    amountEl.value = amount;
    deleteBtn.setAttribute("data-id", id);
    incrementItemEl.setAttribute("data-id", id);
    decrementItemEl.setAttribute("data-id", id);

    deleteBtn.addEventListener("click", (e) => {
      deleteElement(e);
    });
    let currentAmount = product.amount;

    incrementItemEl.addEventListener("click", (e) => {
      currentAmount++;
      if (currentAmount > 9) {
        alert("Mahsulot soni cheklangan");
        return;
      }
      amountEl.textContent = currentAmount;
      updateAmount(e, currentAmount);
    });
    decrementItemEl.addEventListener("click", (e) => {
      currentAmount--;
      amountEl.textContent = currentAmount;
      updateAmount(e, currentAmount);
    });

    // appendchild
    tbody.appendChild(clone);
  });
};
