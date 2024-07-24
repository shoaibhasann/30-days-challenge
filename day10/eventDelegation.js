// a5:t9
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
    console.log(e.target.textContent);
});

// a5:t10
const orderedList = document.querySelector("ol");
const courses = ["Master React", "MERN Stack", "SQL Batch"];

courses.forEach((e) => {
    const listItem = document.createElement("li");
    listItem.textContent = e;
    listItem.classList.add("dynamic-child");
    // dynamically adding child element
    orderedList.append(listItem);
});

// parent element <ol> listening event only dynamic added <li> items
orderedList.addEventListener("click", (event) => {
    if (courses.includes(event.target.textContent)) {
      console.log("Clicked on dynamically added child element");
    }
});



