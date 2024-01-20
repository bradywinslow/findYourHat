const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
    this.x = 0;
    this.y = 0;
  }

  // Method that prints the current state of the field
  print() {
    const fieldArrayToString = this.field.join('\n').replace(/,/g, '');
    console.log(fieldArrayToString);
  }

  // Method to handle asking and accepting user input, and updating the current location
  move() {
    let movementInput = prompt('Which way? u = up; d = down; l = left; r = right: ');

    if (movementInput === 'u') {
      this.y -= 1;
    } else if (movementInput === 'd') {
      this.y += 1;
    } else if (movementInput === 'l') {
      this.x -= 1;
    } else if (movementInput === 'r') {
      this.x += 1;
    } else {
      console.log('Wrong input. Please try again.');
    }

    if (this.y < 0 || this.y > this.field.length - 1) {
     this.y = undefined;
    } else if (this.x < 0 || this.x > this.field.length - 1) {
      this.x = undefined;
    } else if (this.field[this.y][this.x] === hat) {
      this.field[this.y][this.x] = hat;
    } else if (this.field[this.y][this.x] !== hole) {
      this.field[this.y][this.x] = pathCharacter;
    }
  }

  // Method to test whether the current location results in win or loss
  result() {
    if (this.y === undefined || this.x === undefined) {
      console.log('You stepped out of bounds. Sorry, you lose!');
      return true;
    } else if (this.field[this.y][this.x] === hole) {
      console.log('You fell in a hole. Sorry, you lose!');
      return true;
    } else if (this.field[this.y][this.x] === hat) {
      console.log('You found the hat. Congratulations, you win!');
      return true;
    } else {
        return false;
    }
  }

  // Method that takes 3 parameters (width, height, percentage) to generate a randomized two-dimentional array representing the field --> has one hat and one or more holes
  static generateField(height, width, percentage) {
    let result = [];
    for (let i = 0; i < height; i++) {
      result[i] = [];
      for (let j = 0; j < width; j++) {
        const randomNumber = (Math.floor(Math.random() * 11));
        
        if (randomNumber <= percentage / 10) {
          result[i][j] = hole;
        } else if (randomNumber > percentage / 10) {
          result[i][j] = fieldCharacter;
        }
      }
    }
    
    result[0][0] = pathCharacter;
    result[(Math.floor(Math.random() * height))][(Math.floor(Math.random() * width))] = hat; 
    return result;
  }

}


// Method to run the main game loop until the game is won or lost
function run() {
  const playingField = Field.generateField(10, 10, 30);
  const myField = new Field(playingField);

  let gameOver = false;
  while (!gameOver) {
      myField.print();
      myField.move();
      gameOver = myField.result();
  }
}

run();
