import React, { useState } from 'react';
import styles from '../styles/StartingForm.module.css';
import Field from './Field.jsx';
import GameOverModal from './GameOverModal.jsx';
import MovementButtons from './MovementButtons.jsx';
import { generateField } from '../generateFieldLogic/generateField.js';
import { hat, hole, pathCharacter, player } from '../characters/characters.js';

export default function StaringForm() {
    const [width, setWidth] = useState(3);
    const [height, setHeight] = useState(3);
    const [percentage, setPercentage] = useState(10);
    const [fieldData, setFieldData] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [gameOverMessage, setGameOverMessage] = useState();

    function handleWidthInput(e) {
        setWidth(e.target.value);
    }

    function handleHeightInput(e) {
        setHeight(e.target.value);
    }

    function handlePercentageInput(e) {
        setPercentage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newFieldData = generateField(width, height, percentage);
        setFieldData(newFieldData);
    }

    function moveUp() {
        if (fieldData[y][x] !== hole || fieldData[y][x] !== hat) {
            fieldData[y][x] = pathCharacter;
        }
        const newY = y - 1;
        setY(newY);
        setFieldData(prevFieldData => updateField(prevFieldData, x, newY));
    }

    function moveLeft() {
        if (fieldData[y][x] !== hole || fieldData[y][x] !== hat) {
            fieldData[y][x] = pathCharacter;
        }
        const newX = x - 1;
        setX(newX);
        setFieldData(prevFieldData => updateField(prevFieldData, newX, y));
    }
    
    function moveRight() {
        if (fieldData[y][x] !== hole || fieldData[y][x] !== hat) {
            fieldData[y][x] = pathCharacter;
        }
        const newX = x + 1;
        setX(newX);
        setFieldData(prevFieldData => updateField(prevFieldData, newX, y));
    }

    function moveDown() {
        if (fieldData[y][x] !== hole || fieldData[y][x] !== hat) {
            fieldData[y][x] = pathCharacter;
        }
        const newY = y + 1;
        setY(newY);
        setFieldData(prevFieldData => updateField(prevFieldData, x, newY));
    }

    // Helper function to update the fieldData array
    function updateField(fieldData, x, y) {
        const newFieldData = fieldData.map(row => [...row]);

        if (y < 0 || y >= height || x < 0 || x >= width) {
            setIsGameOver(true);
            setGameOverMessage('You moved out of bounds. Sorry, you lose!');
            return newFieldData;
        } else if (newFieldData[y][x] === hole) {
            setIsGameOver(true);
            setGameOverMessage('You fell in a hole. Sorry, you lose!');            
            return newFieldData;
        } else if (newFieldData[y][x] === hat) {
            setIsGameOver(true);
            setGameOverMessage('You found your hat. Congratulations, you win!');            
            return newFieldData;
        } else if (newFieldData[y][x] === pathCharacter) {
            setIsGameOver(true);
            setGameOverMessage('You backtracked. Sorry, you lose!');            
            return newFieldData;
        } else {
            if (newFieldData[y][x] !== pathCharacter) {
                newFieldData[y][x] = player;
            }
            return newFieldData;
        }
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div>
            <div className={styles.Instructions}>
                <p>To begin the game, enter in the desired width and height of the playing field and a percentage for the number of holes on the playing field.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.StartingForm}>
                    <div>
                        <label htmlFor='width'>Width (3-15): </label>
                        <input
                            type='number'
                            name='width'
                            id='width'
                            required
                            min='3'
                            max='15'
                            value={width}
                            onChange={handleWidthInput}    
                        />
                    </div>
                    <div>
                        <label htmlFor='height'>Height (3-15): </label>
                        <input
                            type='number'
                            name='height'
                            id='height'
                            required
                            min='3'
                            max='15'
                            value={height}
                            onChange={handleHeightInput}
                        />
                    </div>
                    <div>
                        <label htmlFor='percentage'>Percentage: </label>
                        <input
                            type='number'
                            name='percentage'
                            id='percentage'
                            required
                            min='0'
                            max='50'
                            step='10'
                            value={percentage}
                            onChange={handlePercentageInput}
                        />
                    </div>
                    <div>
                        <input type='submit' value="Let's Get Started!"></input>
                    </div>    
                </div>
            </form>
            <Field fieldData={fieldData}/>
            <MovementButtons 
                moveUp={moveUp}
                moveLeft={moveLeft}
                moveRight={moveRight}
                moveDown={moveDown}
            />
            {isGameOver && <GameOverModal isGameOver={isGameOver} gameOverMessage={gameOverMessage} refreshPage={refreshPage}/>}
        </div>
    )
}
