import { getData, saveData, removeData, getFirstChar, getUserName } from "./utils.js";

document.addEventListener("DOMContentLoaded", function () {
  
  const formContainer = document.querySelector(".form-container");

  // acessing login form elements
  const loginForm = document.getElementById("login-form");
  const loginUsername = document.getElementById("login-username");
  const loginPassword = document.getElementById("login-password");

  // acessing signup form elements
  const signupForm = document.getElementById("signup-form");
  const signupEmail = document.getElementById("signup-email");
  const signupUsername = document.getElementById("signup-username");
  const signupPassword = document.getElementById("signup-password");
  const toSignup = document.getElementById("to-signup");
  const toLogin = document.getElementById("to-login");

  // acessing home page
  const homePage = document.querySelector("main");

  function showFormContent() {
    formContainer.style.display = "flex";
    homePage.style.display = "none";
  }

  function closeFormContent() {
    formContainer.style.display = "none";
  }

  function showLoginForm() {
    showFormContent();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  }

  function showSignupForm() {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  }

  toSignup.addEventListener("click", showSignupForm);
  toLogin.addEventListener("click", showLoginForm);

  // form handling
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
      username: loginUsername.value,
      password: loginPassword.value,
    };

    saveData("user-profile", user);
    saveData("isLoggedIn", true);
    renderHomePage();
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
      email: signupEmail.value,
      username: signupUsername.value,
      password: signupPassword.value,
    };

    saveData("user-profile", user);
    saveData("isLoggedIn", true);
    renderHomePage();
  });

  let isLoggedIn = getData("isLoggedIn");

  // check if user already loggedin or not
  if (isLoggedIn) {
    renderHomePage();
  } else {
    showLoginForm();
  }

  // handling logout functionality
  const logoutBtn = document.getElementById("logout-btn");

  logoutBtn.addEventListener("click", () => {
    saveData("isLoggedIn", false);
    removeData("user-profile"); // remove user data from localStorage
    showLoginForm();
  });

  function renderHomePage() {
    closeFormContent();
    homePage.style.display = "block";
    const name = getUserName();
    const firstChar = getFirstChar(name);

    document.getElementById("user-profile").innerHTML = `${firstChar} <span class="status-indicator"></span>`;
  }
  
});


