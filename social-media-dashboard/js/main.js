import { renderNotifications } from "./notification.js";

document.addEventListener("DOMContentLoaded", () => {
  // render notifications
  renderNotifications();

  // Get the sidebar elements
  const sideBar = document.getElementById("sidebar");
  const openButton = document.querySelector(".menu-bar");
  const closeButton = document.querySelector(".close-btn");

  function closeNav() {
    sideBar.style.width = "0px";
  }

  function openNav() {
    sideBar.style.width = "250px";
  }

  // add event listeners to open and close navigation sidebar
  openButton.addEventListener("click", () => {
    openNav();
  });
  closeButton.addEventListener("click", closeNav);

  // Get notifications sidebar elements
  const notificationSideBar = document.getElementById("noti-sidebar");
  const openNotificationBtn = document.getElementById("open-notifications");
  const notificationIcon = openNotificationBtn.querySelector("i");
  const logo = document.querySelector(".logo");

  // Function to open notification sidebar
  const openNotificationSideBar = () => {
    logo.innerHTML = `<i class="fa-brands fa-instagram"></i>`;
    notificationSideBar.style.display = "block";
    notificationSideBar.style.width = "330px";
    notificationSideBar.style.left = "50px";
    notificationSideBar.style.opacity = "1";
    notificationSideBar.classList.remove("closed");
    notificationIcon.classList.replace("fa-regular", "fa-solid");
  };

  // Function to close notification sidebar
  const closeNotificationSideBar = () => {
    logo.innerHTML = `<img src="./public/logo.png" alt="logo">`;
    notificationSideBar.style.display = "none";
    notificationSideBar.style.width = "0px";
    notificationSideBar.style.left = "-100%";
    notificationSideBar.style.opacity = "0";
    notificationSideBar.classList.add("closed");
    notificationIcon.classList.replace("fa-solid", "fa-regular");
  };

  // Toggle sidebar open/close
  openNotificationBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    if (notificationSideBar.classList.contains("closed")) {
      openNotificationSideBar();
    } else {
      closeNotificationSideBar();
    }
  });

  // Close sidebar if user clicks outside of it
  document.addEventListener("click", (event) => {
    const isClickInsideSidebar = notificationSideBar.contains(event.target);
    const isClickOnOpenButton = openNotificationBtn.contains(event.target);

    // If the click is outside the sidebar and the sidebar is open, close it
    if (
      !isClickInsideSidebar &&
      !isClickOnOpenButton &&
      !notificationSideBar.classList.contains("closed")
    ) {
      closeNotificationSideBar();
    }
  });

});
