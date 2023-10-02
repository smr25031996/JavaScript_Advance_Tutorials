//access the DOM elemnt
const header = document.querySelector("header");
console.log(header);

const blueButton = document.getElementById("color-button-blue");
const brownButton = document.getElementById("color-button-brown");
const greenButton = document.getElementById("color-button-green");
const noneButton = document.getElementById("color-button-none");

// click event listener

blueButton.addEventListener("click", () => {
  header.classList.remove("brown-background", "green-background");
  header.classList.add("blue-background", "text-white");
});

brownButton.addEventListener("click", () => {
  header.classList.remove("blue-background", "green-background");

  header.classList.add("brown-background", "text-white");
});
greenButton.addEventListener("click", () => {
  header.classList.remove("brown-background", "blue-background");

  header.classList.add("green-background", "text-white");
});

noneButton.addEventListener("click", () => {
  header.classList.remove(
    "brown-background",
    "blue-background",
    "green-background"
  );
});
header.classList.add("text-black");






// for adding post
const newPost = document.querySelector("section");
console.log(newPost)

function createPost() {
  //  two elemnets
  let newArticle=document.querySelector('article');
  let title = document.createElement("h5");
  let content = document.createElement("p");
  newArticle.classList.add('list-group-item');

  // adding content to elements
  title.textContent = "Another Post";
  content.textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis dicta nihil alias, deleniti impedit deserunt. Vitae est quod reprehenderit assumenda necessitatibus vel facilis nulla eveniet magni tempore. Nobis, possimus officia?";

  // access the DOM element
  const newPost = document.querySelector("section");

  //appending child to parent
  newArticle.appendChild(title);
  newArticle.appendChild(content);


  newPost.append(newArticle);

}

// adding event listner
const add_button=document.getElementById('add-post');
add_button.addEventListener('click',createPost);


//remove Posts

const remove_button=document.getElementById('remove');



// remove_button.addEventListener('click', () => {
//     const count = newPost.childElementCount;
//     if (count > 1) {
//         newPost.removeChild(newPost.children[count - 1]);
//     }
// });

remove_button.addEventListener('click', () => {
    console.log('Remove button clicked'); // Add this line for debugging
    const count = newPost.childElementCount;
    if (count > 1) {
        newPost.removeChild(newPost.lastElementChild);
    }
});
