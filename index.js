const scoreCounter = document.querySelector('.score-counter');
const grid = document.querySelector('.grid');
const endGameScreen = document.querySelector('.end-game-screen');
const endGameText = document.querySelector('.end-game-text');
const playAgainButton = document.querySelector('.play-again');

const totalCells = 100
const totalbombs = 90;
const maxscore = 5
const bombslist = []

let score = 0;

const cell = document.createElement('div');
cell.classList.add('cell');

for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('click', function (){
        console.log(`You clicked on cell number ${i}`);
    });

    grid.appendChild(cell);
}

while (bombslist) {
    bombslist.push('Hello'); 

}

console.log(bombslist);


 