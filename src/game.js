import Field from '../src/components/Field.jsx';
import { print } from './components/Field.jsx';

// Tests whether the current location results in win or loss
function result() {
    if (y === undefined || x === undefined) {
        console.log('You stepped out of bounds. Sorry, you lose!');
        return true;
    } else if (field[y][x] === Hole) {
        console.log('You fell in a hole. Sorry, you lose!');
        return true;
    } else if (field[y][x] === Hat) {
        console.log('You found the hat. Congratulations, you win!');
        return true;
    } else {
        return false;
    }
}

// Runs the main game loop until the game is won or lost
function run() {
    const playingField = generateField(10, 10, 30);
    const myField = new Field(playingField);

    let gameOver = false;
    while (!gameOver) {
        print();
        move();
        gameOver = result();
    }
}

run();
