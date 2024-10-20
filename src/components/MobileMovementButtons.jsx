import React from 'react';
import styles from '../styles/MobileMovementButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function MovementButtons({ moveUp, moveLeft, moveRight, moveDown, isGameOver }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.movementButtonsDiv}>
                <div className={styles.moveLeftButtonContainer}>
                    <button className={styles.moveLeftButton} type='button' onClick={moveLeft} disabled={isGameOver}>
                        <FontAwesomeIcon icon={faArrowLeft} className={styles.faArrowLeft} />
                    </button>
                </div>
                <div className={styles.moveUpButtonContainer}>
                    <button className={styles.moveUpButton} type='button' onClick={moveUp} disabled={isGameOver}>
                        <FontAwesomeIcon icon={faArrowUp} className={styles.faArrowUp} />
                    </button>
                </div>
                <div className={styles.moveDownButtonContainer}>
                    <button className={styles.moveDownButton} type='button' onClick={moveDown} disabled={isGameOver}>
                        <FontAwesomeIcon icon={faArrowDown} className={styles.faArrowDown} />
                    </button>
                </div>
                <div className={styles.moveRightButtonContainer}>
                    <button className={styles.moveRightButton} type='button' onClick={moveRight} disabled={isGameOver}>
                        <FontAwesomeIcon icon={faArrowRight} className={styles.faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
    )
}
