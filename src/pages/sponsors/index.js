import React, { Component } from 'react';
import styles from './style.module.css';

import townScript from '../../img/townscript.png'
import litmus7 from '../../img/litmus7.png'
import EventOz from '../../img/EVENTOZ-logo.png'
import IndianExp from '../../img/TheNewIndianExp.png'

export default class Sponsors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            /* loading: true*/
        }
    }

    render() {
        return (
            <div>
                <div className={styles["header"]}>
                    <div className={styles["title"]}>Sponsors</div><div className={styles["subtitle"]}>Excel 2019</div>
                </div>
                <div className={styles["underline"]}></div>
                <div className={styles["sponsors-grid-container"]}>
                    <a href="https://litmus7.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={litmus7} />
                        <div className={styles["sponsor-title"]}>CS-Tech Sponsor</div>
                    </a>
                    <a href="https://www.townscript.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={townScript} />
                        <div className={styles["sponsor-title"]}>Ticketing Partner</div>
                    </a>
                    <a href="https://www.eventoz.co.in/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={EventOz} />
                        <div className={styles["sponsor-title"]}>Media Partner</div>
                    </a>
                    <a href="http://www.newindianexpress.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img-alt"]} src={IndianExp} />
                        <div className={styles["sponsor-title"]}>Media Partner</div>
                    </a>
                </div>

            </div>
        )

    }

}