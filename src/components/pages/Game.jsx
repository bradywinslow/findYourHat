import React, { useState, useEffect, useRef } from 'react';
import Field from '../Field.jsx';
import MovementButtons from '../MovementButtons.jsx';
import MobileMovementButtons from '../MobileMovementButtons.jsx';
import GameOverModal from '../GameOverModal.jsx';
import hat from '../../characters/hat.png';
import hole from '../../characters/hole.png';
import pathCharacter from '../../characters/pathCharacter.png';
import player from '../../characters/player.png';
import { generateField } from '../../generateFieldLogic/generateField.js';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../../styles/Game.module.css';

export default function Game() {
    const [fieldData, setFieldData] = useState([]);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [gameOverMessage, setGameOverMessage] = useState('');
    const playerPosition = useRef(null);
    
    const location = useLocation();
    const data = location.state || { width: 0, height: 0, percentage: 0 };

    const navigate = useNavigate();

    useEffect(() => {
        const generatedFieldData = generateField(data.width, data.height, data.percentage);
        setFieldData(generatedFieldData);
    }, [data.width, data.height, data.percentage]);

    useEffect(() => {
        function handleKeyDown(e) {
            if (!isGameOver) {
                switch (e.code) {
                    case 'ArrowLeft':
                        moveLeft();
                        break;
                    case 'ArrowUp':
                        moveUp();
                        break;
                    case 'ArrowDown':
                        moveDown();
                        break;
                    case 'ArrowRight':
                        moveRight();
                        break;
                    default:
                        break;
                }
            }
        }
        // Add event listener for keyboard input
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    useEffect(() => {
        if (isGameOver) {
            document.body.style.overflow= 'hidden';
        }
    });

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

    useEffect(() => {
        // Focus on the player as it moves across the field
        if (playerPosition.current) {
            playerPosition.current.scrollIntoView({
                behavior: 'smooth', // smooth scrolling
                block: 'center', // vertical center
                inline: 'center' // horizontal center
            });
        }
    }, [fieldData]);

    function restartGame() {
        navigate('/');
        window.location.reload();
    }

    return (
        <div className={styles.gameContainer}>
            <div className={styles.movementButtonsContainer}>
                <MovementButtons 
                    moveLeft={moveLeft}
                    moveUp={moveUp}
                    moveDown={moveDown}
                    moveRight={moveRight}
                />
                <MobileMovementButtons 
                    moveLeft={moveLeft}
                    moveUp={moveUp}
                    moveDown={moveDown}
                    moveRight={moveRight}
                />
            </div>
            <div className={styles.fieldContainer}>
                <Field
                    fieldData={fieldData}
                    x={x}
                    y={y}
                    playerPosition={playerPosition}
                />
            </div>
            {isGameOver && <GameOverModal isGameOver={isGameOver} gameOverMessage={gameOverMessage} restartGame={restartGame}/>}
        </div>
    )
}
