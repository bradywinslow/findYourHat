import React from 'react';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPiedPiperHat } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <h1 className={styles.HeaderTitle}>Find Your Hat</h1>
            <FontAwesomeIcon icon={faPiedPiperHat} className={styles.HeaderHat}/>
        </div>
    )
}
