import { generateField } from './generateField';
import hole from '../characters/hole.png';
import player from '../characters/player.png';
import hat from '../characters/hat.png';

describe('generateField', () => {
    const width = 5;
    const height = 5;
    const percentage = 20;
    const field = generateField(width, height, percentage);
  
    test('should generate a field with the correct dimensions', () => {
        expect(field.length).toBe(height);
        field.forEach(row => {
            expect(row.length).toBe(width);
        });
    });

    test('should place the player at the top-left corner', () => {
        expect(field[0][0]).toBe(player);
    });

    test('should place the hat in a position other than the top-left corner', () => {
        const field = generateField(5, 5, 20);
        let hatFound = false;

        for (let i = 0; i < field.length; i++) {
            for (let j = 0; j < field[i].length; j++) {
                if (field[i][j] === hat && !(i === 0 && j === 0)) {
                    hatFound = true;
                }
            }
        }

        expect(hatFound).toBe(true);
    });

    test('should generate the correct percentage of holes', () => {
        const totalTiles = width * height;
        const holeCount = field.flat().filter(tile => tile === hole).length;
        const holePercentage = (holeCount / totalTiles) * 100;

        expect(holePercentage).toBeCloseTo(percentage, 1);
    });
});
