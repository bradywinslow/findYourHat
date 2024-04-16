import React, { useState, useEffect } from 'react';
import Field from './Field.jsx';
import MovementButtons from './MovementButtons.jsx';
import GameOverModal from './GameOverModal.jsx';
import hat from '../characters/hat.png';
import hole from '../characters/hole.png';
import pathCharacter from '../characters/pathCharacter.png';
import player from '../characters/player.png';
import { generateField } from '../generateFieldLogic/generateField.js';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Game() {
    const [fieldData, setFieldData] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [gameOverMessage, setGameOverMessage] = useState('');
    
    const location = useLocation();
    const data = location.state || { width: 0, height: 0, percentage: 0 };

    const navigate = useNavigate();

    useEffect(() => {
        const generatedFieldData = generateField(data.width, data.height, data.percentage);
        setFieldData(generatedFieldData);
    }, [data.width, data.height, data.percentage]);
    
    function moveLeft() {
        if (fieldData[y][x] !== hole || fieldData[y][x] !== hat) {
            fieldData[y][x] = pathCharacter;
        }
        const newX = x - 1;
        setX(newX);
        setFieldData(prevFieldData => updateField(prevFieldData, newX, y));
    }
    
    function moveUp() {
        if (fieldData[y][x] !== hole || fieldData[y][x] !== hat) {
            fieldData[y][x] = pathCharacter;
        }
        const newY = y - 1;
        setY(newY);
        setFieldData(prevFieldData => updateField(prevFieldData, x, newY));
    }

    function moveDown() {
        if (fieldData[y][x] !== hole || fieldData[y][x] !== hat) {
            fieldData[y][x] = pathCharacter;
        }
        const newY = y + 1;
        setY(newY);
        setFieldData(prevFieldData => updateField(prevFieldData, x, newY));
    }
    
    function moveRight() {
        if (fieldData[y][x] !== hole || fieldData[y][x] !== hat) {
            fieldData[y][x] = pathCharacter;
        }
        const newX = x + 1;
        setX(newX);
        setFieldData(prevFieldData => updateField(prevFieldData, newX, y));
    }

    // Helper function to update the fieldData array
    function updateField(fieldData, x, y) {
        const newFieldData = fieldData.map(row => [...row]);

        if (y < 0 || y >= data.height || x < 0 || x >= data.width) {
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
        navigate('/');
    }
    
    return (
        <>
            <Field fieldData={fieldData}/>
            <MovementButtons 
                moveLeft={moveLeft}
                moveUp={moveUp}
                moveDown={moveDown}
                moveRight={moveRight}
            />
            {isGameOver && <GameOverModal isGameOver={isGameOver} gameOverMessage={gameOverMessage} refreshPage={refreshPage}/>}
        </>
    )
}
