import React from 'react';
import styles from '../styles/Field.module.css';

export default function Field({ fieldData, x, y, playerPosition }) {

    return (
        <div className={styles.fieldContainer}>
            <table className={styles.field}>
                <tbody>
                    {fieldData.map((row, rowIndex) => {
                        return (
                            <tr className={styles.tableRows} key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    const isPlayerHere = rowIndex === y && cellIndex === x; // Check if this is the player's position

                                    return (
                                        <td
                                            className={styles.tableData}
                                            key={cellIndex}
                                            ref={isPlayerHere ? playerPosition : null} // Attach ref to player's position
                                        >
                                            <img alt='' src={cell}></img>
                                        </td>
                                    )
                                })}
                            </tr>    
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
