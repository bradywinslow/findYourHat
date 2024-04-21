import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons';
import styles from '../styles/NotFound.module.css';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    
    const navigate = useNavigate();

    function navigateToHomePage() {
        navigate('/');
    }
    
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundText}>
                <p>Whoops! Won't find your hat here.</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faFaceFrown} className={styles.faFaceFrown}/>
            </div>
            <div>
                <button onClick={navigateToHomePage} className={styles.homeButton}>Home Page</button>
            </div>
        </div>
    ) 
};
