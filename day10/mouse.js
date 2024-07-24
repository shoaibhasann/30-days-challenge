// a2:t3
// Mouse Events
const bgChangeContainer = document.querySelector("#change-bg");
bgChangeContainer.addEventListener("mouseover", () => {
  bgChangeContainer.style.backgroundColor = "red";
});

// a2:t4
bgChangeContainer.addEventListener("mouseout", () => {
  bgChangeContainer.style.backgroundColor = "transparent";
});
