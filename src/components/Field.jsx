import React, { useState } from 'react';

import Hat from './Hat.jsx';
import Hole from './Hole.jsx';
import FieldCharacter from './FieldCharacter.jsx';
import PathCharacter from './PathCharacter.jsx';

export default function Field({ height, width, percentage }) {
    // const [field, setField] = useState(generateField(height, width, percentage));
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // Takes 3 parameters (width, height, percentage) to generate a randomized two-dimentional array representing the field --> has one hat and one or more holes
    function generateField(height, width, percentage) {
        let result = [];
        for (let i = 0; i < height; i++) {
            result[i] = [];
            for (let j = 0; j < width; j++) {
                const randomNumber = (Math.floor(Math.random() * 11));
                
                if (randomNumber <= percentage / 10) {
                    result[i][j] = Hole;
                } else if (randomNumber > percentage / 10) {
                    result[i][j] = FieldCharacter;
                }
            }           
        }

        result[0][0] = PathCharacter;
        result[(Math.floor(Math.random() * height))][(Math.floor(Math.random() * width))] = Hat;
        return result;
    }

    return (
        <div className='field'>
            <h1>Establish the dimensions of the playing field: </h1>
            <input type='text'></input>
            <input type='text'></input>
        </div>
    )
}
