const fieldCharacter = '░';
const hat = '^';
const hole = 'O';
const pathCharacter = '*';

// Takes 3 parameters (width, height, percentage) to generate a randomized two-dimentional array representing the field --> has one hat and one or more holes
function generateField(width, height, percentage) {
    let result = [];
    for (let i = 0; i < height; i++) {
        result[i] = [];
        for (let j = 0; j < width; j++) {
            const randomNumber = (Math.floor(Math.random() * 100));
            console.log(randomNumber);
            if (randomNumber < percentage) {
                result[i][j] = hole;
            } else {
                result[i][j] = fieldCharacter;
            }
        }           
    }

    result[0][0] = pathCharacter;
    result[(Math.floor(Math.random() * height))][(Math.floor(Math.random() * width))] = hat;
    return result;
}

// Run the main game loop until the game is won or lost
/* function runGameLoop() {
    let gameOver = false;
    while (!gameOver) {
        print();
        move();
        gameOver = result();
    }
} */

export { generateField };
