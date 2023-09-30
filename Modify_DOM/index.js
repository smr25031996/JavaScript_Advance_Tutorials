// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

// Modify the DOM
// const mainHeading=document.getElementById('main-heading');
// console.log(mainHeading);
// mainHeading.textContent="Modify Dom Element";

const editedArticleHeading=document.querySelector('h3');
editedArticleHeading.textContent=" modified heading by query selector";

const editElement=document.getElementById(sidebar);
sidebar.innerHTML='<h1>This is modified side bar</h1><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptate qui quisquam nobis pariatur fugiat, veritatis laboriosam, recusandae atque praesentium a, est consectetur aspernatur corrupti dolorum aperiam sint nam! Qui.</p>';


secondParagraph.innerHTML='<p>L orem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem in dolores aperiam tempore debitis minus magnam quia quisquam labore temporibus, earum iure at unde repellat? Cum id dolorum et tempore.</p>'


whiteTextElements[1].innerHTML="<h1>Modified</h1>";

const header=document.getElementById('main-heading')

header.innerHTML="<h2>Modified header</h2>";

const par=document.getElementById('para3');
par.innerHTML="<p>L orem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem in dolores aperiam tempore debitis minus magnam quia quisquam labore temporibus, earum iure at unde repellat? Cum id dolorum et tempore.</p>"