import "./mode.js";
import { toast } from "./toast.js";

const localProducts = JSON.parse(localStorage.getItem("products"));

import { updateTbodyUI } from "./updateUI.js";
if (!localProducts) {
  toast("warning", "OOOPS, Cart is empty for now!", ["bottom", "center"]);
} else {
  updateTbodyUI(localProducts);
}
