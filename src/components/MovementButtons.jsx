import React, { useState } from 'react';
import styles from '../styles/MovementButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function MovementButtons() {
    const [movementInput, setMovementInput] = useState();

    const moveUp = (e) => {
        setMovementInput(e.input.change);
    };

    const moveLeft = (e) => {

    };
    
    const moveRight = (e) => {

    };

    const moveDown = (e) => {

    };
    
    // Handles asking and accepting user input, and updating the current location
    /* function move() {
        let movementInput = prompt('Which way? u = up; d = down; l = left; r = right: ');
        
        if (movementInput === 'u') {
            setY(y - 1);
        } else if (movementInput === 'd') {
            setY(y + 1);
        } else if (movementInput === 'l') {
            setX(x - 1);
        } else if (movementInput === 'r') {
            setX(x + 1);
        } else {
            console.log('Wrong input. Please try again.');
        }

        if (y < 0 || y > field.length - 1) {
            setY(undefined);
        } else if (x < 0 || x > field.length - 1) {
            setX(undefined);
        } else if (field[y][x] === Hat) {
            field[y][x] = Hat;
        } else if (field[y][x] !== Hole) {
            field[y][x] = PathCharacter;
        }
    } */

    return (
        <>
            <div className={styles.moveUpButtonDiv}>
                <div className={styles.moveUpButtonContainer}>
                    <button className={styles.moveUpButton} type='button' onClick={moveUp}>
                        Move Up<FontAwesomeIcon icon={faArrowUp} className={styles.faArrowUp} />
                    </button>
                </div>
            </div>
            <div className={styles.moveSidewaysButtonDiv}>
                <div className={styles.moveLeftButtonContainer}>
                    <button className={styles.moveLeftButton} type='button' onClick={moveLeft}>
                        Move Left<FontAwesomeIcon icon={faArrowLeft} className={styles.faArrowLeft} />
                    </button>
                </div>
                <div className={styles.moveRightButtonContainer}>
                    <button className={styles.moveRightButton} type='button' onClick={moveRight}>
                        Move Right<FontAwesomeIcon icon={faArrowRight} className={styles.faArrowRight} />
                    </button>
                </div>
            </div>
            <div className={styles.moveDownButtonDiv}>
                <div className={styles.moveDownButtonContainer}>
                    <button className={styles.moveDownButton} type='button' onClick={moveDown}>
                        Move Down<FontAwesomeIcon icon={faArrowDown} className={styles.faArrowDown} />
                    </button>
                </div>
            </div>
        </>
    )
}
