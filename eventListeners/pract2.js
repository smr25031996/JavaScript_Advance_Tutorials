const section=document.querySelector('section');
const title=document.querySelector('h1');
const button_text=document.querySelector('button');
const image=document.querySelector('img');
var isClicked=false;
button_text.addEventListener('click',()=>{
if(!isClicked){
    title.textContent='Delecious! have one More';
    image.src='emptyCOne.jpeg';
    button_text.textContent="Refill It"
    isClicked=true;

}else{
    title.textContent="Have One!"
    image.src='iceCream.jpeg';

    button_text.textContent="Eat Me"
    isClicked=false;
}
    
    
})