const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// Fetch words from api
// add at a later day

// Words to cycle through to type
const words = [
    'sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad', 'north', 'dependent', 'steer', 'silver', 'highfalutin', 'superficial', 'quince', 'eight', 'feeble', 'admit', 'drag', 'loving'
]

// Init word
let randomWord;

// Init score
let score = 0;

//Init time
let time = 10;

// Get a random word
function getRandomWord(){
    return words[Math.floor(Math.random() * words.length)]
}

word.innerText = getRandomWord()














































