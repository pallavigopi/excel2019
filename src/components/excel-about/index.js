import React from 'react'
import styles from './style.module.css';


export default class ExcelAbout extends React.Component {
    
    render() {
        return(
            <div className={styles["excel-details"]}>
                <p className={styles["about-text"]}>EXCEL is the country's second oldest techno-managerial fest. MEC's flagship symposium is a place for students to display their technical talent. The country's best gather and compete among themselves to prove their skill not only industrial knowledge but their talent as well rounded engineers. </p>
            </div>
        );
    }
}