import io from "socket.io-client";

const serverUrl = import.meta.env.VITE_SERVER_URL;

if (!serverUrl) {
  console.error("Server URL is not defined in environment variables.");
  throw new Error("Server URL is not defined.");
}

const userColors = {};

function getRandomColor() {
  const usedColors = new Map();
  const colors = [
    "#3c0852",
    "#ff9800",
    "#592851",
    "#0385c4",
    "#9575cd",
    "#4db6ac",
    "#ba68c8",
    "#f06292",
    "#a1887f",
    "#e57373",
    "#fac100",
    "#009976",
    "#ff5722",
    "#ff1493",
  ];

  let color = colors[Math.floor(Math.random() * colors.length)];
  // checking color is already used
  if (usedColors.has(color)) {
    color = colors[Math.floor(Math.random() * colors.length)];
  } else {
    usedColors.set(color, true);
  }

  // if all colors are used
  if (!color) {
    color = "#888888";
  }

  return color;
}

document.addEventListener("DOMContentLoaded", () => {
  const joinContainer = document.getElementById("joinContainer");
  const chatContainer = document.getElementById("chatContainer");
  const usernameInput = document.getElementById("usernameInput");
  const joinBtn = document.getElementById("joinBtn");

  // initially, chatContainer is hidden and joinContainer is visible
  joinContainer.style.display = "block";
  chatContainer.style.display = "none";

  let chatInitialized = false;

  joinBtn.addEventListener("click", () => {
    let username = usernameInput.value.trim();

    if (!username) {
      alert("Please enter a username");
      return;
    }

    // username is entered, then show chat room
    joinContainer.style.display = "none";
    chatContainer.style.display = "block";

    // initialize chat functionality only once
    if (!chatInitialized) {
      initializeChat(username);
      chatInitialized = true;
    }
  });
});

// function to initialize chat
function initializeChat(username) {
  // create a new socket and establish connection with WS
  const socket = io(`${serverUrl}`);
  socket.emit("new-user-joined", username);

  // accessing DOM elements
  const chatBox = document.getElementById("chatBox");
  const sendBtn = document.getElementById("sendBtn");
  const messageInput = document.getElementById("messageInput");

  // initially, sendBtn is disabled
  sendBtn.disabled = true;

  // checking input
  function checkInput() {
    sendBtn.disabled = messageInput.value.trim() === "" ? true : false;
  }

  // event listener for input changes
  messageInput.addEventListener("input", checkInput);

  // handle keydown event to detect "Enter" key press
  messageInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.keyCode === 113) {
      e.preventDefault();
      // Check if input field is not empty
      if (messageInput.value.trim() !== "") {
        sendMessage();
      }
    }
  });

  // function to append message
  function appendMessage(message, className, username) {
    const messageElement = document.createElement("div");

    if (className === "received" && username) {
      if (!userColors[username]) {
        userColors[username] = getRandomColor();
      }

      const userColor = userColors[username];

      messageElement.className = `message`;

      // adding inline css style
      messageElement.style.backgroundColor = userColor;
      messageElement.style.alignSelf = "flex-start";
      messageElement.style.marginTop = "10px";
      messageElement.style.marginBottom = "10px";
    } else {
      messageElement.className = `message ${className}`;
    }

    // set the message content and append to chat box
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    // play sound if received message
    if (className === "received") {
      playSound();
    }
  }

  // function to send message
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== "") {
      appendMessage(`<span class="message-body">${message}</span>`, "sent");
      socket.emit("send", message);
      messageInput.value = "";
      checkInput(); // disable the button
    }
  }

  // on new user joined chat
  socket.on("user-joined", (username) => {
    appendMessage(
      `<span class="sender">${username}</span><span class="message-body"> joined the chat</span>`,
      "received",
      username
    );
    playSound();
  });

  // on message received from server
  socket.on("receive", ({ message, username }) => {
    appendMessage(
      `<span class="sender">${username}</span><span class="message-body"> ${message}</span>`,
      "received",
      username
    );
  });

  // send messages
  sendBtn.addEventListener("click", sendMessage);

  // someone left the chat room
  socket.on("left-chat", (username) => {
    appendMessage(
      `<span class="sender">${username}</span><span class="message-body"> left the chat</span>`,
      "received",
      username
    );
  });
}

// function to play message sound
function playSound() {
  const messageSound = new Audio("./public/facebook_messenger.mp3");
  messageSound.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
}
