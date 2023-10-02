const header = document.querySelector("header");

const blue = document.getElementById("color-button-blue");
const brown = document.getElementById("color-button-brown");
const green = document.getElementById("color-button-green");
const none = document.getElementById("color-button-none");

blue.addEventListener("click", () => {
  header.classList.remove("brown-background", "brown-background", "text-white");

  header.classList.add("blue-background", "text-white");
});

brown.addEventListener("click", () => {
  header.classList.remove("blue-background", "green-background", "text-white");

  header.classList.add("brown-background", "text-white");
});

green.addEventListener("click", () => {
  header.classList.remove("blue-background", "brown-background", "text-white");

  header.classList.add("green-background", "text-white");
});

none.addEventListener("click", () => {
  header.classList.remove(
    "green-background",
    "blue-background",
    "brown-background",
    "text-white"
  );
});

const section = document.querySelector("section");
const main = document.querySelector("main");


const post_button = document.getElementById("add-post");

post_button.addEventListener("click", () => {
  const newArticle = document.createElement("article");
  const title = document.createElement("h5");
  const content = document.createElement("p");
  title.textContent = "New Post";
  content.textContent =
    "Hide at bottom of staircase to trip human. Ask for petting. Roll on the floor purring your whiskers off. Trip on catnip nap all day, eat too much then proceed to regurgitate all over living room carpet while humans eat dinner nya nya nyan. Attack the child groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked playing with balls of wool.";
  newArticle.appendChild(title);
  newArticle.appendChild(content);
  newArticle.classList.add("list-group-item");
  section.appendChild(newArticle);
});

const remove_Note=document.getElementById('remove-post');

remove_Note.addEventListener('click',()=>{
section.lastChild.remove();

})
