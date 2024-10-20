import React from 'react';
import styles from '../styles/Header.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const navigate = useNavigate();
    
    function navigateToHome() {
        navigate('/');
        window.location.reload();
    }
    
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerTitle}>
                <h1 className={styles.title} onClick={navigateToHome}>Find Your Hat</h1>
                <FontAwesomeIcon icon={faHatWizard} className={styles.headerHat}/>
            </div>
            <div className={styles.gameInstructions}>
                <p className={styles.instructionsText}>Navigate the field while avoiding the holes to locate the hat!</p>
            </div>
        </div>
    )
}
