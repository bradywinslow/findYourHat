import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerTitle}>
                <h1 className={styles.title}>Find Your Hat</h1>
                <FontAwesomeIcon icon={faHatWizard} className={styles.headerHat}/>
            </div>
            <div className={styles.gameInstructions}>
                <p>Navigate the field while avoiding the holes to find your hat!</p>
            </div>
        </div>
    )
}
