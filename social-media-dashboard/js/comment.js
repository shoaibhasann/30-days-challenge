import { closeModal, getData, getFirstChar, showModal } from "./utils.js";

export const openCommentModal = (index) => {
  const commentModal = document.getElementById("comment-modal");
  commentModal.setAttribute("data-post-index", index);

  // open comment modal
  showModal(commentModal);
};

export const initiateDisplayComments = (post) => {
  const commentsSection = document.getElementById("comments-section");

  commentsSection.innerHTML = "";

  const commentsHeader = document.createElement("div");
  commentsHeader.className = "comments-header";

  commentsHeader.innerHTML = `<div>
          <div class="profile-icon">${getFirstChar(post?.postedBy)}</div>
           <span>${post?.postedBy}</span>
          </div>
          <div>
          <i class="fa-solid fa-ellipsis"></i>
          </div>`;

  commentsSection.appendChild(commentsHeader);

  const commentList = document.createElement("ul");
  commentList.classList.add("comment-list");

  // get post comments
  const comments = post?.comments;

  if(comments.length === 0){
    const heading = document.createElement("h5");
    heading.classList.add("no-comment");
    heading.innerHTML = `No comments yet`;
    commentList.appendChild(heading);
  } else {
    comments.forEach((cmt) => {
      const list = document.createElement("li");

      list.innerHTML = `<div class="profile-icon">${getFirstChar(
        cmt.commentedBy
      )}</div>
                    <div class="comment-content">
            <strong>${cmt.commentedBy}</strong>
            <p>
              ${cmt.comment}
            </p>
          </div>`;
      commentList.appendChild(list);
    });
  }

  // append whole list into comments section
  commentsSection.appendChild(commentList);
}

export const displayComments = (index) => {
  const commentsModal = document.getElementById("display-comments-modal");
  const commentsCloseModalBtn = document.querySelector(
    ".close-display-comments-btn"
  );

  commentsCloseModalBtn.addEventListener("click", () => {
    closeModal(commentsModal);
  });

  const posts = getData("posts") || [];
  const post = posts[index];

  // intialize to display comments
  initiateDisplayComments(post);

  // open modal
  showModal(commentsModal);
};


