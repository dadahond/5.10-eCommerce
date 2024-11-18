export let localProducts = JSON.parse(localStorage.getItem("products")) || [];
const basket = document.getElementById("basket");
const priceTotal = document.getElementById("totalAll");

const calculateTotal = () => {
  let totalAmount = 0;
  let totalPrice = 0;
  localProducts = JSON.parse(localStorage.getItem("products")) || [];
  localProducts.forEach((product) => {
    totalAmount += product.amount;
    totalPrice += product.amount * product.price;
  });
  if (basket) basket.textContent = totalAmount;
  if (priceTotal) priceTotal.textContent = `$${totalPrice.toFixed(2)}`;
};
if (localProducts.length) {
  calculateTotal();
}

// toast
import { toast } from "./toast.js";
import { updateTbodyUI } from "./updateUI.js";

// add products
export const addProduct = (product) => {
  let localProducts = JSON.parse(localStorage.getItem("products")) || [];
  const item = localProducts.find((prod) => prod.id == product.id);
  if (!item) {
    localStorage.setItem(
      "products",
      JSON.stringify([...localProducts, product])
    );
    calculateTotal();
    toast("success", "🎉 Nice choise, it's been added to your cart");
  } else {
    toast("warning", "It's been already added to your cart");
  }
};

// remove product
export const deleteElement = (e) => {
  const id = e.target.dataset.id;
  localProducts = localProducts.filter((product) => product.id != id);
  localStorage.setItem("products", JSON.stringify(localProducts));
  updateTbodyUI(localProducts);
  calculateTotal();
};
// update amount
export const updateAmount = (e, currentAmount) => {
  if (currentAmount == 0) {
    deleteElement(e);
    return;
  }
  const id = e.target.dataset.id;
  localProducts = localProducts.map((product) => {
    if (product.id == id) {
      return {
        ...product,
        amount: currentAmount,
      };
    } else {
      return product;
    }
  });
  localStorage.setItem("products", JSON.stringify(localProducts));
  updateTbodyUI(localProducts);
  calculateTotal();
};
