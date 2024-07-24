// a4:t7
const email = document.getElementById("emailInput");
const password = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitButton");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({
        email: email.value,
        password: password.value
    });
});

// a4:t8
const carSelector = document.querySelector("select");
carSelector.addEventListener("change", (e) => {
    document.querySelector("#selected-para").textContent = e.target.value;
});
