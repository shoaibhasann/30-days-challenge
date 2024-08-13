import { displayShoppingCart } from "./cart.js";


const landingPage = document.querySelector("#landing");
const shoppingCartPage = document.querySelector("#shopping-cart-section");
const checkoutPage = document.querySelector(".checkout-container");
const confirmationCard = document.querySelector(".confirmation-card");

export const renderHomePage = () => {
  shoppingCartPage.style.display = "none";
  checkoutPage.style.display = "none";
  confirmationCard.style.display = "none";
  landingPage.style.display = "block";
};

export const renderCartPage = () => {
  landingPage.style.display = "none";
  checkoutPage.style.display = "none";
  confirmationCard.style.display = "none";
  shoppingCartPage.style.display = "block";
  displayShoppingCart();
};

export const renderCheckoutForm = () => {
  shoppingCartPage.style.display = "none";
  landingPage.style.display = "none";
  confirmationCard.style.display = "none";
  checkoutPage.style.display = "block";
};

export const showOrderConfirmation = () => {
  landingPage.style.display = "none";
  shoppingCartPage.style.display = "none";
  checkoutPage.style.display = "none";
  confirmationCard.style.display = "block";

  document.getElementById("go-shop").addEventListener("click", () => {
    renderHomePage();
  });
};
