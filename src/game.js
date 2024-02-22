// Runs the main game loop until the game is won or lost
function run() {
    const playingField = generateField(10, 10, 30);
    const myField = new Field(playingField);

    let gameOver = false;
    while (!gameOver) {
        myField.print();
        myField.move();
        gameOver = myField.result();
    }
}
