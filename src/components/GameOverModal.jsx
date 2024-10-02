import React, { useEffect } from 'react';
import styles from '../styles/GameOverModal.module.css';

export default function GameOverModal({ isGameOver, gameOverMessage, restartGame }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                restartGame();
            }
        };

        if (isGameOver) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isGameOver, restartGame]);
    
    if (!isGameOver) return null;
    
    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <p className={styles.modalText}>{gameOverMessage}</p>
                    <button onClick={restartGame} onSubmit={restartGame} className={styles.modalButton}>Play Again</button>
                </div>
            </div>
        </>
    )
}
