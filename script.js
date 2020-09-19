// Possible updates to app
// Fetch words from api
// add at a later day
// have 3 sets of words depending on the difficulty


const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");


// Words to cycle through to type
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];
// Init word
let randomWord;
// Init score
let score = 0;
//Init time
let time = 10;
// Set difficulty to value in local storage
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// Set difficulty select value
difficultySelect.value = difficulty;

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate a random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to dom
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time;
  if (time === 0) {
    clearInterval(timeInterval);
    // End Game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
  <h1> Time ran out </h1>
  <p> Your final score is ${score}</p>
  <button onclick='location.reload()'>Reload</button>
  `;
  endgameEl.style.display = "flex";
}

addWordToDom();

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Events

//Typing

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDom();
    updateScore();
    e.target.value = "";
    if (difficulty === "hard") {
      time += 1;
    } else if (difficulty === "medium") {
      time += 2;
    } else {
      time += 4;
    }
  }
});

//settings btn click
settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});

// Settings select

settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});






// get from api
// https://random-word-api.herokuapp.com/word?number=10000
// This gets 10000 random words