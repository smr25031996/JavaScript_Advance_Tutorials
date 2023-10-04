// Accessing DOM elements
const title = document.getElementById("note-title");
const description = document.getElementById("note-content");
const submitButton = document.getElementById("add-post");
const section = document.querySelector("section");
let newPost;
remove_button = document.createElement("button");


// Enable or disable the submit button based on input length
function checkInputLength() {
  const titleValue = title.value.trim();
  const descriptionValue = description.value.trim();

  if (titleValue.length > 5 && descriptionValue.length > 5) {
    submitButton.removeAttribute("disabled");
    
  } else {
    submitButton.setAttribute("disabled", "true");
  }
}

// Event listener for input fields
title.addEventListener("input", checkInputLength);
description.addEventListener("input", checkInputLength);

// Event listener for submitting a new post
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const titleValue = title.value.trim();
  const descriptionValue = description.value.trim();

  if (titleValue.length < 5 || descriptionValue.length < 5) {
    return;
  }

  newPost = document.createElement("article");
  newPost.classList.add("list-group-item");

  const noteTitle = document.createElement("h5");
  noteTitle.textContent = titleValue;

  const noteContent = document.createElement("p");
  noteContent.textContent = descriptionValue;

  remove_button.textContent = "Remove Post";
  remove_button.classList.add("btn", "btn-secondary", "float-right");

  newPost.appendChild(noteTitle);
  newPost.appendChild(noteContent);
  newPost.appendChild(remove_button);

  section.appendChild(newPost);

  // Reset the form and disable the submit button
  title.value = "";
  description.value = "";
  submitButton.setAttribute("disabled", "true");
});



// remove post
remove_button.addEventListener("click", () => {
  section.removeChild(newPost); // Remove the clicked note
});
