const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// Fetch words from api
// add at a later day

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

// Generate a random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to dom
function addWordToDom() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDom();

function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Events
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  console.log(insertedText);
  if (insertedText === randomWord) {
    addWordToDom();
    updateScore();
    e.target.value = "";
  }
});
