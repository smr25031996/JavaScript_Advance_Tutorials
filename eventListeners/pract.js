let newElement = document.createElement("h1");
newElement.textContent = "This is created using JS";

let newEl = document.createElement("article");
let para = document.createElement("p");
let heading = document.createElement("h2");
heading.textContent = "First Paragraph";
para.textContent =
  "bdkjsgfusrrhiwxcvjbnlmftyuiordnxcnkvjkbdkxvbkjbvdjbsuigeuisjn,jsn,";

newEl.appendChild(heading);
newEl.appendChild(para);

const main = document.querySelector("main");
main.append(newEl);
newEl.classList.add("para");

const body = document.querySelector("header");
body.append(newElement);
newElement.style.textAlign = "center";

const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const brown = document.getElementById("brown");
const none = document.getElementById("none");

red.addEventListener("click", () => {
  newEl.classList.remove( "blue", "green", "brown");
  newEl.classList.add("red");
});

blue.addEventListener("click", () => {
  newEl.classList.remove("green", "red",  "brown");
  newEl.classList.add("blue");
});
green.addEventListener("click", () => {
  newEl.classList.remove("blue", "red", "brown");
  newEl.classList.add("green");
});

brown.addEventListener('click',()=>{
    newEl.classList.remove('green','red','green');
    newEl.classList.add('brown')
});

none.addEventListener('click',()=>{
  newEl.classList.remove('green','red','green','brown');
});
