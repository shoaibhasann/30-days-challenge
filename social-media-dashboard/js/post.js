import { displayComments, openCommentModal } from "./comment.js";
import { addNotification } from "./notification.js";
import {
  saveData,
  getData,
  compressImage,
  showModal,
  closeModal,
  getFirstChar,
  getUserName,
} from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  // accessing post modal elements
  const postOpenModalBtn = document.getElementById("create-post-btn");
  const postModal = document.getElementById("post-modal");
  const postCloseModalBtn = document.querySelector(".close-post-modal-btn");
  const postContent = document.getElementById("post-content");
  const postImageFile = document.getElementById("post-image-file");
  const imagePreview = document.getElementById("image-preview");
  const addPostBtn = document.getElementById("add-post-btn");

  // Open Modal
  postOpenModalBtn.addEventListener("click", () => {
    showModal(postModal);
  });

  // Close Modal
  postCloseModalBtn.addEventListener("click", () => {
    closeModal(postModal);
  });

  // Image preview
  postImageFile.addEventListener("change", async (e) => {
    const file = e.target.files[0];

    if (file) {
      try {
        const compressedImg = await compressImage(file);
        imagePreview.src = compressedImg;
        imagePreview.style.display = "block";
      } catch (error) {
        console.error("Error compressing image: ", error);
      }
    } else {
      imagePreview.src = "";
    }
  });

  // Add Post Button Click
  addPostBtn.addEventListener("click", () => {
    const content = postContent.value;
    const imageSrc = imagePreview.src;
    const likes = [];
    const comments = [];
    const postedBy = getUserName();

    // Save post to localStorage
    const posts = getData("posts") || [];
    posts.push({ content, imageSrc, likes, comments, postedBy });
    saveData("posts", posts);

    // Render the post
    renderPosts();

    // Clear modal content and close
    postContent.value = "";
    postImageFile.value = "";
    imagePreview.src = "";
    imagePreview.style.display = "none";
    postModal.style.display = "none";
  });

  // implementing comment functionality

  // close comment modal
  const closeCommentModalBtn = document.querySelector(
    ".close-comment-modal-btn"
  );
  closeCommentModalBtn.addEventListener("click", () => {
    document.getElementById("comment-modal").style.display = "none";
  });

  // add event listener to add btn in the comment modal
  const addCommentBtn = document.getElementById("add-comment-btn");

  addCommentBtn.addEventListener("click", () => {
    const commentModal = document.getElementById("comment-modal");
    const postIndex = commentModal.getAttribute("data-post-index");
    const commentContent = document.getElementById("comment-content");

    // add the comment to the given post index
    addCommentToPost(postIndex, commentContent.value);

    commentContent.value = "";

    // close the comment modal
    commentModal.style.display = "none";

    renderPosts();
  });

  // Initialize posts on page load
  renderPosts();

      const postOptionsContainers = document.querySelectorAll(
        ".post-options-container"
      );

      postOptionsContainers.forEach((container) => {
        container.addEventListener("click", (event) => {
          event.stopPropagation(); // Prevent event from bubbling up
          container.classList.toggle("active");
        });
      });

      // Close dropdowns when clicking outside
      document.addEventListener("click", (event) => {
        postOptionsContainers.forEach((container) => {
          if (!container.contains(event.target)) {
            container.classList.remove("active");
          }
        });
      });
  
});

// function to create post card
const createPostCard = (post, index) => {
  const card = document.createElement("div");
  card.classList.add("post");
  card.setAttribute("data-post-index", index);

  const username = getUserName();
  const isLiked = post.likes.find((like) => like.likedBy === username);

  const postImageHtml = post.imageSrc
    ? `<div class="post-image"><img src="${post.imageSrc}" alt="post-image"></div>`
    : "";

  const contentHtml = `
    <div class="content" style="display: block;">
      <p>${post.content}</p>
    </div>
  `;

  const mainContentHtml = post.imageSrc
    ? contentHtml + postImageHtml
    : contentHtml;

  card.innerHTML = `
    <div class="post-header">
      <div class="user-info">
        <div class="profile-icon">
          ${getFirstChar(post.postedBy)} 
          ${
            post.postedBy === username
              ? '<span class="status-indicator"></span>'
              : ""
          }
        </div>
        <span>${post.postedBy}</span>
      </div>
      <div style="${
        post.postedBy === username ? "display: inline-block;" : "display: none;"
      }" class="post-options-container">
        <i class="fa-solid fa-ellipsis"></i>
        <div class="post-options-dropdown">
          <div class="post-option edit-option">Edit Post</div>
          <div class="post-option delete-option">Delete Post</div>
        </div>
      </div>
    </div>

    ${mainContentHtml}
    
    <div class="post-interaction">
      <div class="user-interaction">
        <i style="${isLiked ? "color: red" : "color: white"}" class="${
    isLiked ? "fa-solid" : "fa-regular"
  } fa-heart like-icon" data-post-index="${index}"></i>
        <i class="fa-regular fa-comment fa-flip-horizontal comment-icon" data-post-index="${index}"></i>
        <i class="fa-regular fa-paper-plane"></i>
      </div>
      <div>
        <i class="fa-regular fa-bookmark"></i>
      </div>
    </div>
    
    <div class="likes-count">
      ${
        post.likes.length === 0
          ? "No likes yet"
          : post.likes.length === 1
          ? "1 like"
          : `${post.likes.length} likes`
      }
    </div>
    
    <div class="comments-count" data-post-index=${index}>
      ${
        post.comments.length === 0
          ? "Add a comment..."
          : post.comments.length === 1
          ? "View 1 comment"
          : `View all ${post.comments.length} comments`
      }
    </div>
    
    <div class="comments-container"></div>
  `;


  const commentsContainer = card.querySelector(".comments-container");

  // Show first two comments of the post in the post card
  if (post.comments.length > 0) {
    post.comments.forEach((cmt, idx) => {
      if (idx < 2) {
        const commentElement = document.createElement("div");
        commentElement.className = "content";
        commentElement.innerHTML = `
                    <strong>${cmt.commentedBy}</strong>
                    <p>${cmt.comment}</p>
        `;
        commentsContainer.appendChild(commentElement);
      }
    });
  } else {
    commentsContainer.innerHTML = "";
  }

  card.appendChild(commentsContainer);

  // Add event listener on comment icon
  const commentIcon = card.querySelector(".comment-icon");
  commentIcon.addEventListener("click", () => openCommentModal(index));

  // Add event listener on heart icon
  const likeIcon = card.querySelector(".like-icon");
  likeIcon.addEventListener("click", () => addLikeToPost(index));

  // Add event listener on comment count to show comments of post
  const commentsCount = card.querySelector(".comments-count");
  commentsCount.addEventListener("click", () => displayComments(index));

  // Add event listener on edit option to update or edit post
  const editOption = card.querySelector(".edit-option");
  editOption.addEventListener("click", () => editPost(index));

  // Add event listener on delete option to delete post
  const deleteOption = card.querySelector(".delete-option");
  deleteOption.addEventListener("click", () => deletePost(index));

  return card;
};

const updatePostInDOM = (index) => {
  const posts = getData("posts") || [];
  const post = posts[index];

  // acess element of post class having data-post-index atr value is equal to index
  const postElement = document.querySelector(
    `.post[data-post-index="${index}"]`
  );

  const updatedElement = createPostCard(post, index);

  // replace old post with the updated one
  postElement?.replaceWith?.(updatedElement);
};

const addLikeToPost = (index) => {
  const posts = getData("posts") || [];
  const username = getUserName();

  // check user already liked it
  const post = posts[index];

  const alreadyLikedIndex = post.likes.findIndex(
    (like) => like.likedBy === username
  );

  if (alreadyLikedIndex === -1) {
    post.likes.push({ likedBy: username });
    // add notification someone liked your post
    addNotification("like", post);
  } else {
    // remove the like
    post.likes.splice(alreadyLikedIndex, 1);
  }

  saveData("posts", posts);
  updatePostInDOM(index);
};

const addCommentToPost = (index, content) => {
  const posts = getData("posts") || [];
  // get current name of user
  const username = getUserName();

  const newComment = {
    comment: content,
    commentedBy: username,
  };

  posts[index].comments.push(newComment);
  saveData("posts", posts);
  addNotification("comment", posts[index]);
  updatePostInDOM(index);
};

const editPost = (index) => {
  const posts = getData("posts") || [];

  if(index < 0 || index >= posts.length){
    console.error("Error: post index is invalid");
    return null;
  } else {

    // acessing edit post modal elements
    const editOpenModal = document.getElementById("edit-modal");
    const editCloseModalBtn = document.querySelector(".close-edit-modal-btn");
    const editPostContent = document.getElementById("edit-content");
    const editPostImageFile = document.getElementById("edit-image-file");
    const editPostImagePreview = document.getElementById("edit-image-preview");
    const editPostBtn = document.getElementById("edit-post-btn");

    // open modal
    showModal(editOpenModal);

    editPostContent.value = posts[index].content;
    editPostImagePreview.src = posts[index].imageSrc;

    editPostImageFile.addEventListener("change", async (event) => {
      const file = event.target.files[0];

      if(file){
        try {
          const compressedImg = await compressImage(file);
          editPostImagePreview.src = compressedImg;
        } catch (error) {
          console.error("Error: while compressing image");
        }
      }
    });

    editPostBtn.addEventListener("click", () => {
      posts[index].content = editPostContent.value;
      posts[index].imageSrc = editPostImagePreview.src;

      saveData("posts", posts);
      closeModal(editOpenModal);
      updatePostInDOM(index);
    });

    // close modal if click on close btn
    editCloseModalBtn.addEventListener("click", () =>
      closeModal(editOpenModal)
    );

  }
}

const deletePost = (index) => {
  const posts = getData("posts") || [];

  if (index < 0 || index >= posts.length) {
    console.error("Error: post index is invalid");
    return null;
  } else {
    posts.splice(index, 1);
    saveData("posts", posts);
    renderPosts();
  }
};

// Render Posts
const renderPosts = () => {
  const postsContainer = document.getElementById("posts-container");

  postsContainer.innerHTML = "";
  const posts = getData("posts") || [];

  if (posts.length === 0) {
    const heading = document.createElement("h1");
    heading.innerHTML = "No posts found!";
    postsContainer.appendChild(heading);
    return;
  }

  posts.length > 0 &&
    posts.forEach((post, index) => {
      const postElement = createPostCard(post, index);
      postsContainer.appendChild(postElement);
    });
};
