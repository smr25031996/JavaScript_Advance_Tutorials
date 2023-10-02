



const myButton=document.querySelector('button');
let section=document.querySelector('section');

myButton.addEventListener('click',()=>{
    let title='New Note';
let detail='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est delectus minima ducimus eligendi iure, exercitationem autem perferendis molestias esse inventore deleniti optio quo nemo earum adipisci placeat fuga! Praesentium.';

let heading=document.createElement('h1');
let para=document.createElement('p');
heading.textContent=title;
para.textContent=detail;

let newNote=document.createElement('article');

newNote.appendChild(heading);
newNote.appendChild(para);

let section=document.querySelector('section');
    section.append(newNote);


});


let remove_button=document.getElementById('remove');
 remove_button.addEventListener('click',()=>{
    const count =section.childElementCount;
    console.log(count);
    if(count>1){
        section.removeChild(section.newNote[count-1])
    }
 })
