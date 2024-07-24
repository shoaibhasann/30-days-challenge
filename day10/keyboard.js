// a3:t5
// Keyboard Events
const input = document.querySelector("#key-input");
input.addEventListener("keydown", (e) => {
  if (e.key == " ") {
    console.log("Backspace");
  } else {
    console.log(e.key);
  }
});

// a3:t6
input.addEventListener("keyup", () => {
  document.querySelector("#input-value").textContent = input.value;
});
