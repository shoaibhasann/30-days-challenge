import { getData, getFirstChar, getUserName, saveData } from "./utils.js";

// function to create notification element card
export const createNotificationCard = (type, username, post) => {
  const notificationCard = document.createElement("li");

  notificationCard.innerHTML = `
        <li>
          <div class="profile-icon">${getFirstChar(username)}</div>
            <div class="content">
              <p>${
                type === "like"
                  ? `${
                      username === post.postedBy
                        ? "You liked your post"
                        : `${username} liked ${post.postedBy}'s post.`
                    }`
                  : `${
                      username === post.postedBy
                        ? "You commented on your post"
                        : `${username} commented on ${post.postedBy}'s post.`
                    }`
              }</p>
            </div>
         ${post.imageSrc !== "" ? ` <div class="image-wrapper"><img src="${post.imageSrc}" alt="${
    post.content
  }"></div>` : ''}
        </li>`;

  return notificationCard;
};

// function to add notification in the notification lists
export const addNotification = (type, post) => {
  const notifications = getData("notifications") || [];
  const currentUser = getUserName();

  const notificationList = document.querySelector(".notification-list");
  const notificationElement = createNotificationCard(type, currentUser, post);

  notificationList.appendChild(notificationElement);

  // hide no new notification element
  document.querySelector(".no-notifications").style.display = "none";

  // add notification in the notifications array
  notifications.push({ type, performedBy: currentUser, post });

  saveData("notifications", notifications);
};

// function to render notifications
export const renderNotifications = () => {
  // hide no new notification element
  document.querySelector(".no-notifications").style.display = "none";

  let notifications = getData("notifications") || [];

  if (notifications?.length === 0) {
    // hide no new notification element
    document.querySelector(".no-notifications").style.display = "block";
  }

  if (notifications?.length > 15) {
    notifications = []; // reset notifications array
    saveData("notifications", notifications);
  }

  const notificationList = document.querySelector(".notification-list");

  if (notifications.length > 0) {
    notifications.forEach((notification) => {
      const notificationElement = createNotificationCard(
        notification.type,
        notification.performedBy,
        notification.post
      );
      notificationList.appendChild(notificationElement);
    });
  }
};
