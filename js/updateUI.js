const homeCartTemplate = document.getElementById("home-cart-template");
const productsContainer = document.getElementById("products-container");

export const updateHomeUI = ({ products }) => {
  products.forEach((product) => {
    const { thumbnail, title, price, description, rating } = product;
    const clone = homeCartTemplate.content.cloneNode(true);
    const img = clone.querySelector("img");
    const productTitle = clone.querySelector("h2");
    const productDescription = clone.querySelector("p");
    const productRating = clone.querySelector("h5");

    const productPrice = clone.querySelector("span");

    img.src = thumbnail;
    productTitle.textContent = title;
    productDescription.innerHTML = `<i>${description.slice(0, 90)}...</i>`;
    productRating.innerHTML = `Rating: ★${rating}`;
    productPrice.innerHTML = `Price: $<strong>${price}</strong>`;

    productsContainer.appendChild(clone);
  });
};
