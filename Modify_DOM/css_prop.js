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
header.style.padding='1em';
header.classList.remove('bg-dark');
header.style.backgroundColor="brown";
sidebar.classList.remove('bg-info');

sidebar.classList.add('bg-primary');