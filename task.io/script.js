// acessing modal element for create new task
const modal = document.getElementById("task-modal");
const closeBtn = document.getElementById("close-modal");

// modal to edit task
const editModal = document.getElementById("edit-task-modal");
const closeEditBtn = document.getElementById("edit-close-modal");

// accesing modal form element
const taskTitle = document.getElementById("new-task-title");
const taskDescription = document.getElementById("new-task-description");
const taskForm = document.getElementById("task-form");

document.addEventListener("DOMContentLoaded", () => {

   // rendered tasks after DOM loaded
   renderTasks();

  // open modal on "Add New Task" click
  document.querySelector("#open-modal").addEventListener("click", () => {
    openModal(modal);
  });

  // close modal of new task
  closeBtn.addEventListener("click", () => {
    closeModal(modal);
  });

  // close modal of edit task
  closeEditBtn.addEventListener("click", () => {
    closeModal(editModal);
  });

  // close edit modal if user clicks outside of it
  window.addEventListener("click", (event) => {
    if(event.target === editModal){
      closeModal(editModal);
    }
  })

  // close modal if user clicks outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });

  // add new task on form submit
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

      // create new task
      const newTask = {
        title: taskTitle.value,
        description: taskDescription.value,
        date: new Date().toLocaleDateString(),
        isCompleted: false,
      };

      // save task to local storage
      addTask(newTask);

    // close the modal
    closeModal(modal);

    // clear Input Fields
    taskTitle.value = "";
    taskDescription.value = "";

    // update task list
    renderTasks();
  });
});

function openModal(modal){
  modal.style.display = "flex";
}

function closeModal(modal){
  modal.style.display = "none";
}

// function to add task to localStorage
function addTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function to render tasks
function renderTasks() {
  const taskContainer = document.querySelector(".task-container");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // clear all task cards, but keep the .empty div
  taskContainer.innerHTML = `
        <div class="empty" id="open-modal">
            <h2> <i style="margin-right: 8px;" class="fa-solid fa-plus"></i>Add New Task</h2>
        </div>
    `;

  tasks.forEach((task, index) => {
    const taskCard = createTaskCard(task, index);
    taskContainer.appendChild(taskCard);

    // reassinging event listener
    document.querySelector("#open-modal").addEventListener("click", () => {
      modal.style.display = "flex";
    });

  });
}

// function to create task card
function createTaskCard(task, index) {
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.innerHTML = `
    <h2 class="task-title">${task.title}</h2>
    <p class="task-description">${task.description}</p>
    <p class="task-date">${task.date}</p>
    <div class="task-interaction">
      <button onClick="updateTaskStatus(${index})" class="${
    task.isCompleted ? "completed" : "incomplete"
  }">
        ${task.isCompleted ? "Completed" : "Incomplete"}
      </button>
      <div class="task-icon">
        <i onClick="editTask(${index})" class="fa-solid fa-pen-to-square"></i>
        <i onClick="deleteTask(${index})" class="fa-solid fa-trash"></i>
      </div>
    </div>
  `;

  return taskCard;
}

// function to delete task
function deleteTask(taskIndex){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task, index) => taskIndex !== index);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    renderTasks();
}

// function to update task status from incomplete to complete
function updateTaskStatus(taskIndex){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    // acessing task which have to update status
    tasks[taskIndex].isCompleted = !tasks[taskIndex].isCompleted;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    // re-render tasks
    renderTasks();
}

// function to edit task
function editTask(index){

    // open modal to edit task
    openModal(editModal);

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const editTitle = document.getElementById("edit-task-title");
    const editDescription = document.getElementById("edit-task-description");
    const editTaskForm = document.getElementById("edit-task-form");

    const task = tasks[index];

    // updating modal form values
    editTitle.value = task.title;
    editDescription.value = task.description;

    editTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // get new task values
      const newTitle = editTitle.value;
      const newDescription = editDescription.value;

      // updating values of task
      task.title = newTitle;
      task.description = newDescription;
      task.date = new Date().toLocaleDateString();

      localStorage.setItem("tasks", JSON.stringify(tasks));

      // close the modal
      closeModal(editModal);

      // clear input fields
      editTitle.value = "";
      editDescription.value = ""

      // re-render tasks
      renderTasks();

    });
}

