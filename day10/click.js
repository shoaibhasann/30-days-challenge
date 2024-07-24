// a1:t1
const paragraph = document.querySelector("#paragraph");
const textBtn = document.querySelector("#txt-btn");

textBtn.addEventListener("click", () => {
  paragraph.textContent = "Paragraph content changed successfully!";
});

// a1:t2
const sectionImage = document.querySelector("img");
sectionImage.addEventListener("dblclick", () => {
  // Toggle visibility class
  sectionImage.classList.toggle("hidden");
  sectionImage.classList.toggle("visible");
});
