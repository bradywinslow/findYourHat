import React, { useState } from 'react';
import styles from '../styles/StartingForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function StaringForm() {
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [percentage, setPercentage] = useState('');
    const navigate = useNavigate();
    const data = { width: width, height: height, percentage: percentage };

    function handleWidthInput(e) {
        setWidth(e.target.value);
    }

    function handleHeightInput(e) {
        setHeight(e.target.value);
    }

    function handlePercentageInput(e) {
        setPercentage(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        navigate('/game', { state: data });
    }

    return (
        <>
            <div className={styles.startingContainer}>
                <div className={styles.startingInstructionsContainer}>
                    <p className={styles.startingInstructionsText}>To begin the game, enter in the desired width and height of the playing field. Then, enter in a percentage to determine what percent of the field should be covered in holes (hint: the more holes, the harder the game).</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.startingForm}>
                        <div className={styles.inputFields}>
                            <div className={styles.width}>
                                <label htmlFor='width'>Width</label>
                                <input
                                    className={styles.inputField}
                                    type='number'
                                    name='width'
                                    id='width'
                                    required
                                    min='3'
                                    max='10'
                                    value={width}
                                    placeholder='3-10'
                                    onChange={handleWidthInput}    
                                />
                            </div>
                            <div className={styles.height}>
                                <label htmlFor='height'>Height</label>
                                <input
                                    className={styles.inputField}
                                    type='number'
                                    name='height'
                                    id='height'
                                    required
                                    min='3'
                                    max='10'
                                    value={height}
                                    placeholder='3-10'
                                    onChange={handleHeightInput}
                                />
                            </div>
                            <div className={styles.percentage}>
                                <label htmlFor='percentage'>Percentage</label>
                                <input
                                    className={styles.inputField}
                                    type='number'
                                    name='percentage'
                                    id='percentage'
                                    required
                                    min='10'
                                    max='50'
                                    step='1'
                                    value={percentage}
                                    placeholder='10-50'
                                    onChange={handlePercentageInput}
                                />
                            </div>
                        </div>
                        <div className={styles.submitButtonContainer}>
                            <button className={styles.submitButton}>Play</button>
                        </div>    
                    </div>
                </form>
            </div>
        </>
    )
}
