// Select the relevant elements from page
const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');

// Initalise the variables needed for game setup
const totalCells = 100
const totalbombs = 90;
const maxscore = 5
const bombslist = []

let score = 0;


const cell = document.createElement('div');
cell.classList.add('cell');

for (let i = 1; i <= 100; i++) {
    // Create a cell
    const cell = document.createElement('div');
    cell.classList.add('cell');
    // Manage the "click" event on the cell
    cell.addEventListener('click', function (){
        // Don't do anything if the cell is already clicked
        console.log(`You clicked on cell number ${i}`);
    });

    grid.appendChild(cell);
}

// Generate a unique list of bombs
while (bombslist) {
    // Genreate a random number between 1 and 100, 
    const randomNumber = (Math.random() * totalCells) + 1;

    // Add the random number to the bombslist if it is not already in the list
    bombslist.push('Hello'); 

}

console.log(bombslist);


 