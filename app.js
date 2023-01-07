const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

const questionInput = document.getElementById('question-input');
const submitButton = document.getElementById('submit-button');
const inputResults = document.getElementById('input-results');
const resetButton = document.getElementById('reset-button');
const frontImg = document.getElementById('front-img');
const backImg = document.getElementById('back-img');
const phase1 = document.getElementById('phase1');
const phase2 = document.getElementById('phase2');

// \*event listener for click for submit button

// hide prompt

// display img

// pick random number of array using array.length

// set <p> to display value of random answer of array
submitButton.addEventListener('click', () => {
    togglePhases();
    const randomi = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomi];
    inputResults.textContent = randomAnswer;
});

function togglePhases() {
    phase1.classList.toggle('hide');
    phase2.classList.toggle('hide');
}

resetButton.addEventListener('click', () => {
    togglePhases();
});

// \*reset button

// hides answer of array, img

// shows input, button
