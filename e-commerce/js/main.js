import { products } from "./constant.js";
import { formatToRupees } from "./hooks.js";
import { updateCartCount } from "./cart.js";
import { addProductInCart } from "./cart.js";
import { scrollToNewArrivals } from "./hooks.js";
import { renderHomePage, renderCartPage, renderCheckoutForm, showOrderConfirmation } from "./navigation.js";



// Setting cart products to localStorage
export const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// Accessing nav links
const homeLink = document.getElementById("home");
const productsLink = document.getElementById("products");
const cartLink = document.getElementById("cart");

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  // Event listener on nav links
  homeLink.onclick = () => {
    renderHomePage();
  };

  productsLink.addEventListener("click", () => {
    scrollToNewArrivals();
  });

  cartLink.onclick = () => {
    renderCartPage();
  };

  // Accessing see product button and adding event listener
  const seeBtns = document.querySelectorAll(".see-btn");

  seeBtns.forEach((btn) => {
    btn.addEventListener("click", scrollToNewArrivals);
  });

  // Render products
  renderProducts();

  const cartBtns = document.querySelectorAll(".cart-btn");
  cartBtns.forEach((btn) => {
    btn.addEventListener("click", () => addProductInCart(btn));
  });
});


// Function to render products on Home page
const renderProducts = () => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src=${product.image} alt="Product Image">
      <h2>${product.name}</h2>
      <div class="cart">
        <p>${formatToRupees(product.price)}</p>
        <button class="cart-btn" data-id=${index}>Add<i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    `;

    productContainer.appendChild(card);
  });
};

// function to intiate checkout process
export const initiateCheckout = () => {
  renderCheckoutForm();
  // acess order summary elements and update it
  const subTotal = document.getElementById("sub-total");
  const discount = document.getElementById("discount");
  const total = document.getElementById("total");

  const orderBill = JSON.parse(localStorage.getItem("orderBill"));

  subTotal.innerHTML = formatToRupees(orderBill.totalBill);
  discount.innerHTML = formatToRupees(orderBill.discount);
  total.innerHTML = formatToRupees(orderBill.finalAmount);

  // accessing checkout form and adding event listener on submit
  const checkoutForm = document.getElementById("checkout-form");

  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showOrderConfirmation();
  });

}


