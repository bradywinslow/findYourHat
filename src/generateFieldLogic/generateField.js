import fieldCharacter from '../characters/fieldCharacter.png'
import hole from '../characters/hole.png';
import player from '../characters/player.png';
import hat from '../characters/hat.png';

// Takes 3 parameters (width, height, percentage) to generate a randomized two-dimentional array representing the field --> has one hat and one or more holes
function generateField(width, height, percentage) {
    let result = [];
    for (let i = 0; i < height; i++) {
        result[i] = [];
        for (let j = 0; j < width; j++) {
            const randomNumber = (Math.floor(Math.random() * 100));
            if (randomNumber < percentage) {
                result[i][j] = hole;
            } else {
                result[i][j] = fieldCharacter;
            }
        }           
    }

    result[0][0] = player;

    // Generate random coordinates for hat that do not place it in the top left corner (0, 0)
    let hatX = 0;
    let hatY = 0;

    do {
        hatX = Math.floor(Math.random() * width);
        hatY = Math.floor(Math.random() * height);
    } while (hatX === 0 && hatY === 0);

    result[hatY][hatX] = hat;

    return result;
}

export { generateField };
