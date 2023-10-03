// DOM ELEMENT REFERENCES
const hobbiesResult = document.getElementById("hobbies-result");
const transportResult = document.getElementById("transport-result");
const musicResult = document.getElementById("music-result");

const sports_checkBox = document.getElementById("sports-checkbox");
const video_games = document.getElementById("games-checkbox");
const music = document.getElementById("music-checkbox");

sports_checkBox.addEventListener("change", ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[0].classList.remove("text-secondary");
  }
});

video_games.addEventListener("change", ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[1].classList.remove("text-secondary");
  }
});

music.addEventListener("change", ($event) => {
  if ($event.target.checked) {
    hobbiesResult.children[2].classList.remove("text-secondary");
  }
});

// radio buttons
const radio_buttons = document.getElementsByName("transport-method");

// radio button event listners
for (i = 0; i < radio_buttons.length; i++) {
  radio_buttons[i].addEventListener("change", ($event) => {
    transportResult.textContent = $event.target.value;
  });
}


// dropdown  menu listner

const music_drop=document.getElementById('music-preference');

music_drop.addEventListener('change',($event)=>{
  musicResult.textContent=$event.target.value;
});