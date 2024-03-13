import React, { useState } from 'react';
import styles from '../styles/StartingForm.module.css';
import Field from './Field.jsx';
import MovementButtons from './MovementButtons.jsx';
import { generateField } from '../generateFieldLogic/generateField.js';

export default function StaringForm() {
    const [width, setWidth] = useState(3);
    const [height, setHeight] = useState(3);
    const [percentage, setPercentage] = useState(10);
    const [fieldData, setFieldData] = useState([]);

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
        const newFieldData = generateField(width, height, percentage);
        setFieldData(newFieldData);
    }

    return (
        <div>
            <div className={styles.Instructions}>
                <p>To begin the game, enter in the desired width and height of the playing field and a percentage for the number of holes on the playing field.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.StartingForm}>
                    <div>
                        <label for='width'>Width (3-100): </label>
                        <input
                            type='number'
                            name='width'
                            id='width'
                            required
                            min='3'
                            max='100'
                            value={width}
                            onChange={handleWidthInput}    
                        />
                    </div>
                    <div>
                        <label for='height'>Height (3-100): </label>
                        <input
                            type='number'
                            name='height'
                            id='height'
                            required
                            min='3'
                            max='100'
                            value={height}
                            onChange={handleHeightInput}
                        />
                    </div>
                    <div>
                        <label for='percentage'>Percentage: </label>
                        <input
                            type='number'
                            name='percentage'
                            id='percentage'
                            required
                            min='0'
                            max='50'
                            step='10'
                            value={percentage}
                            onChange={handlePercentageInput}
                        />
                    </div>
                    <div>
                        <input type='submit' value="Let's Get Started!"></input>
                    </div>    
                </div>
            </form>
            <Field fieldData={fieldData} />
            <MovementButtons />
        </div>
    )
}
