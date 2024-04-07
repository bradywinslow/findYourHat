import React, { useState } from 'react';
import styles from '../styles/StartingForm.module.css';
import Field from './Field.jsx';
import GameOverModal from './GameOverModal.jsx';
import MovementButtons from './MovementButtons.jsx';
import { generateField } from '../generateFieldLogic/generateField.js';
import hat from '../characters/hat.png';
import hole from '../characters/hole.png';
import pathCharacter from '../characters/pathCharacter.png';
import player from '../characters/player.png';


export default function StaringForm() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [percentage, setPercentage] = useState();
    const [isPlayClicked, setIsPlayClicked] = useState(false);
    const [isFieldNotDisplayed, setIsFieldNotDisplayed] = useState(true);
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
        setIsPlayClicked(true);
        setIsFieldNotDisplayed(false);
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
        <>
            {isFieldNotDisplayed && <div className={styles.startingContainer}>
                <div className={styles.startingInstructionsContainer}>
                    <p className={styles.startingInstructionsText}>To begin the game, enter in the desired width and height of the playing field and a percentage to determine what percent of the field should be covered in holes.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.startingForm}>
                        <div>
                            <div className={styles.width}>
                                <label htmlFor='width'>Width</label>
                                <input
                                    className={styles.inputField}
                                    type='number'
                                    name='width'
                                    id='width'
                                    required
                                    min='3'
                                    max='10'
                                    value={width}
                                    placeholder='3-10'
                                    onChange={handleWidthInput}    
                                />
                            </div>
                            <div className={styles.height}>
                                <label htmlFor='height'>Height</label>
                                <input
                                    className={styles.inputField}
                                    type='number'
                                    name='height'
                                    id='height'
                                    required
                                    min='3'
                                    max='10'
                                    value={height}
                                    placeholder='3-10'
                                    onChange={handleHeightInput}
                                />
                            </div>
                            <div className={styles.percentage}>
                                <label htmlFor='percentage'>Percentage</label>
                                <input
                                    className={styles.inputField}
                                    type='number'
                                    name='percentage'
                                    id='percentage'
                                    required
                                    min='10'
                                    max='50'
                                    step='1'
                                    value={percentage}
                                    placeholder='10-50'
                                    onChange={handlePercentageInput}
                                />
                            </div>
                        </div>
                        <div className={styles.submitButtonContainer}>
                            <button className={styles.submitButton}>Play</button>
                        </div>    
                    </div>
                </form>
            </div>}
            <Field fieldData={fieldData}/>
            {isPlayClicked && <MovementButtons 
                moveUp={moveUp}
                moveLeft={moveLeft}
                moveRight={moveRight}
                moveDown={moveDown}
            />}
            {isGameOver && <GameOverModal isGameOver={isGameOver} gameOverMessage={gameOverMessage} refreshPage={refreshPage}/>}
        </>
    )
}
