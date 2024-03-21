import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiperHat } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.HeaderTitle}>
                <h1 className={styles.Title}>Find Your Hat</h1>
                <FontAwesomeIcon icon={faPiedPiperHat} className={styles.HeaderHat}/>
            </div>
            <div className={styles.GameInstructions}>
                <p>Navigate the field while avoiding the holes to find your hat!</p>
            </div>
        </div>
    )
}
