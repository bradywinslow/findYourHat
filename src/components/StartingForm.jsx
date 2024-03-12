import React, { useState } from 'react';
import styles from '../styles/StartingForm.module.css';
import Field from './Field.jsx';
import MovementButtons from './MovementButtons.jsx';

export default function StaringForm() {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [percentage, setPercentage] = useState();

    function handleWidthInput(e) {
        setWidth(e.target.value);
    }

    function handleHeightInput(e) {
        setHeight(e.target.value);
    }

    function handlePercentageInput(e) {
        setPercentage(e.target.value);
    }

    return (
        <div>
            <p>To begin the game, enter in the desired width and height of the playing field and a percentage for the number of holes on the playing field.</p>
            <form>
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
                            max='65'
                            value={percentage}
                            onChange={handlePercentageInput}
                        />
                    </div>
                    <div>
                        <input type='submit' value="Let's Get Started!"></input>
                    </div>    
                </div>
            </form>
            <Field width={width} height={height} percentage={percentage} />
            <MovementButtons />
        </div>
    )
}
