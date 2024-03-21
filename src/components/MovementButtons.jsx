import React from 'react';
import styles from '../styles/MovementButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function MovementButtons({ moveUp, moveLeft, moveRight, moveDown, isGameOver }) {
    return (
        <>
            <div className={styles.moveUpButtonDiv}>
                <div className={styles.moveUpButtonContainer}>
                    <button className={styles.moveUpButton} type='button' onClick={moveUp} disabled={isGameOver}>
                        Move Up<FontAwesomeIcon icon={faArrowUp} className={styles.faArrowUp} />
                    </button>
                </div>
            </div>
            <div className={styles.moveSidewaysButtonDiv}>
                <div className={styles.moveLeftButtonContainer}>
                    <button className={styles.moveLeftButton} type='button' onClick={moveLeft} disabled={isGameOver}>
                        Move Left<FontAwesomeIcon icon={faArrowLeft} className={styles.faArrowLeft} />
                    </button>
                </div>
                <div className={styles.moveRightButtonContainer}>
                    <button className={styles.moveRightButton} type='button' onClick={moveRight} disabled={isGameOver}>
                        Move Right<FontAwesomeIcon icon={faArrowRight} className={styles.faArrowRight} />
                    </button>
                </div>
            </div>
            <div className={styles.moveDownButtonDiv}>
                <div className={styles.moveDownButtonContainer}>
                    <button className={styles.moveDownButton} type='button' onClick={moveDown} disabled={isGameOver}>
                        Move Down<FontAwesomeIcon icon={faArrowDown} className={styles.faArrowDown} />
                    </button>
                </div>
            </div>
        </>
    )
}
