import React from 'react';
import styles from '../styles/Field.module.css';

export default function Field({ fieldData }) {

    return (
        <div className={styles.field}>
            <table>
                <tbody>
                    {fieldData.map((row, rowIndex) => {
                        return (
                            <tr className={styles.tableRows} key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    return (
                                        <td key={cellIndex}>
                                            {cell}
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
