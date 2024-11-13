export let localProducts = JSON.parse(localStorage.getItem("products")) || [];

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
};
// update amount
export const updateAmount = (e, currentAmount) => {
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
};

// // increment
// export const incrementItem = (e) => {
//   const id = e.target.dataset.id;
//   localProducts = localProducts.map((product) => {
//     if (product.id == id) {
//       return {
//         ...product,
//         amount: product.amount + 1,
//       };
//     } else {
//       return product;
//     }
//   });
//   localStorage.setItem("products", JSON.stringify(localProducts));
//   updateTbodyUI(localProducts);
// };

// decrement
