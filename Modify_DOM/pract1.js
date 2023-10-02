const title = document.querySelector("h1");
title.textContent = "modified";

title.innerHTML = "Modified via innerHtml";

const header = document.querySelector("header");

header.innerHTML = "<h2>Hi</h2>";
header.classList.add("text-center");

// creating new aricle;

let newArticle = document.createElement("article");
let head = document.createElement("h3");
let para = document.createElement("p");
head.textContent = "Article 004";
para.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quaerat adipisci possimus nesciunt aperiam, pariatur aliquid nam modi dolorem quidem repellat tenetur eaque expedita soluta maiores vero laborum nostrum odit!";
newArticle.appendChild(head);
newArticle.appendChild(para);

newArticle.classList.add("m-2", "p-2", "border", "border-secondary");
let main = document.querySelector("main");
main.appendChild(newArticle);


const parentElement = document.querySelector("main");
const childNode = document.getElementById("art-003");

parentElement.removeChild(childNode);
