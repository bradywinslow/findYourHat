import React from 'react';
import styles from '../styles/GameOverModal.module.css';

export default function GameOverModal({ isGameOver, gameOverMessage, refreshPage }) {
    if (!isGameOver) return null;
    
    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <p className={styles.modalText}>{gameOverMessage}</p>
                    <button onClick={refreshPage} className={styles.modalButton}>Play Again</button>
                </div>
            </div>
        </>
    )
}
