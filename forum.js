function showFeedback(title, imgSrc) {
  // Show the feedback section
  const feedbackSection = document.getElementById("feedbackSection");
  feedbackSection.style.display = "block";

  // Set the image and title in the feedback section
  document.getElementById("recipeImage").src = imgSrc;
  document.getElementById("recipeTitle").textContent = title;

  // Move the feedback section above the recipe list section
  const recipeSection = document.querySelector(".section");
  recipeSection.parentNode.insertBefore(feedbackSection, recipeSection);

  // Optional scroll
  feedbackSection.scrollIntoView({ behavior: "smooth" });
}

function submitRating() {
  const rating = document.getElementById("rating").value;
  const ratingMsg = document.getElementById("ratingMsg");
  ratingMsg.textContent = `Thank you for rating this recipe ${rating} star(s)!`;
}

function submitComment() {
  const commentInput = document.getElementById("commentInput");
  const commentList = document.getElementById("commentList");

  const commentText = commentInput.value.trim();
  if (commentText !== "") {
    const newComment = document.createElement("li");
    newComment.textContent = commentText;
    commentList.appendChild(newComment);
    commentInput.value = ""; // clear input
  }
}
