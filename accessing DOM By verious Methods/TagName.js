const articles = document.getElementsByTagName('article');
// const paragraphs;
const firstArticle=articles[0];
console.log(firstArticle);
console.log(articles[2]);

const paragraphs=document.getElementsByTagName('p');
const firstPara=paragraphs[1];
console.log(firstPara);
console.log(paragraphs[2]);
for(const child of articles.children){
    console.log(child)
}