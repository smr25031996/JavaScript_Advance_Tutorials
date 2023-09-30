// Get access to the DOM
const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');
const firstArticle = articles[0];
const secondParagraph = paragraphs[1];
const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

const header = document.getElementById('page-header');
header.innerHTML = '<h2>Modify the DOM</h2>';
header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = 'red';
 
articles.remove(articles[0]);
// creating elements
let newArticle=document.createElement('article');

let title=document.createElement('h3');

let para=document.createElement('p');


// addding text to it
title.textContent='Article 004';
para.textContent='Ask to be pet then attack owners hand jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water or meowzer,'

// appending the child

newArticle.appendChild(title);
newArticle.appendChild(para);


newArticle.classList.add('m-2','p-2','border','border-secondary');
newArticle.style.backgroundColor='red';

newArticle.setAttribute('id','art-004');

const main=document.querySelector('main');

main.append(newArticle);


let title2=document.createElement('h1');
let content=document.createElement('p');
title2.innerHTML="I am in the aside"
content.textContent="Try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard stares at human while pushing stuff off a table chase dog then run away. Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food,";

const myElement=document.getElementById("sidebar");
myElement.appendChild(title2);
myElement.appendChild(content);







