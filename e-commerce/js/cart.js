import { cartItems } from "./main.js";
import { formatToRupees } from "./hooks.js";
import { renderCartPage } from "./navigation.js";
import { initiateCheckout } from "./main.js";
import { products } from "./constant.js";



const cartLink = document.getElementById("cart");

// Update cart count on web page
export const updateCartCount = () => {
  cartLink.innerHTML = `Cart(${cartItems.length})`;
};

// Function to add product to cart
export const addProductInCart = (btn) => {
  const product = products[btn.getAttribute("data-id")];

  const isProductExistsIndex = cartItems.findIndex(
    (item) => item.name === product.name
  );

  if (isProductExistsIndex === -1) {
    cartItems.push(product);
    updateCartCount();
  } else {
    // Update product quantity
    cartItems[isProductExistsIndex].quantity++;
  }

  // Update local storage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const displayShoppingCart = () => {
  const shoppingItems = document.getElementById("shopping-items");
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.innerHTML = "";

  const cartHeader = document.createElement("div");
  cartHeader.className = "cart-header";
  cartHeader.innerHTML = `
    <div class="cart-header-item">Product</div>
    <div class="cart-header-item">Price</div>
    <div class="cart-header-item">Quantity</div>
    <div class="cart-header-item">Total Price</div>
  `;
  cartContainer.appendChild(cartHeader);

  shoppingItems.innerHTML =
    `${cartItems.length} item` + `${cartItems.length > 1 ? "s" : ""}`;

  let totalBill = 0;

  cartItems.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    const totalPrice = item.price * item.quantity;
    totalBill += totalPrice;

    cartItem.innerHTML = `
      <div class="cart-item-product">
        <img src=${item.image} alt=${item.name}>
        <p>${item.name}</p>
      </div>
      <div class="cart-item-price">${formatToRupees(item.price)}</div>
      <div class="cart-item-quantity">
        <button class="decrease-quantity" data-index=${index}><i class="fa-solid fa-minus"></i></button>
        <p>${item.quantity}</p>
        <button class="increase-quantity" data-index=${index}><i class="fa-solid fa-plus"></i></button>
      </div>
      <div class="cart-item-total">${formatToRupees(totalPrice)}</div>
    `;

    cartContainer.appendChild(cartItem);
  });

  // Calculate totals
  const discount = totalBill * 0.1; // 10% discount
  const shipping = 100;
  const finalAmount = Math.floor(totalBill - discount + shipping);

  // setting bill details to local storage
  localStorage.setItem(
    "orderBill",
    JSON.stringify({ discount, finalAmount, totalBill })
  );

  const totals = document.createElement("div");
  totals.className = "cart-totals";
  totals.innerHTML = `
    <div class="cart-total-item">
      <p>Cart Subtotal:</p>
      <p>${formatToRupees(totalBill)}</p>
    </div>
    <div class="cart-total-item">
      <p>Discount (10%):</p>
      <p style="color: #8c8c8c">${"-" + formatToRupees(discount)}</p>
    </div>
    <div class="cart-total-item">
      <p>Shipping Charges:</p>
      <p>${formatToRupees(shipping)}</p>
    </div>
    <div class="cart-total-item">
      <p>Cart Total:</p>
      <p>${formatToRupees(finalAmount)}</p>
    </div>
    <div class="cart-checkout">
      <button id="checkout-btn">Checkout</button>
    </div>
  `;

  cartContainer.appendChild(totals);

  // Event listeners for increase & decrease quantity buttons
  const increaseBtns = document.querySelectorAll(".increase-quantity");
  const decreaseBtns = document.querySelectorAll(".decrease-quantity");

  increaseBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(
        e.target.closest("button").getAttribute("data-index")
      );
      handleChangeQuantity(index, 1);
    });
  });

  decreaseBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = parseInt(
        e.target.closest("button").getAttribute("data-index")
      );
      handleChangeQuantity(index, -1);
    });
  });

  // Event listener for the Checkout button
  document.getElementById("checkout-btn").addEventListener("click", () => {
    initiateCheckout();
  });
};

// Function to handle quantity change
const handleChangeQuantity = (index, delta) => {
  if (cartItems[index].quantity + delta > 0) {
    cartItems[index].quantity += delta;
  } else {
    const isRemove = confirm("Are you sure to remove this item from cart?");
    if(isRemove){
      cartItems.splice(index, 1);
    }
  }

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  renderCartPage();
};
