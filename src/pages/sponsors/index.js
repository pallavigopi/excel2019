import React, { Component } from 'react';
import styles from './style.module.css';

import townScript from '../../img/townscript.png'
import litmus7 from '../../img/litmus7.png'
import EventOz from '../../img/EVENTOZ-logo.png'
import IndianExp from '../../img/TheNewIndianExp.png'
import Nest from '../../img/nest.png'
import Kimball from '../../img/kimbal.jpg'
import Mirchi from '../../img/mirchi.jpg'
import Cyrix from '../../img/cyrix.png'
import CSL from '../../img/cochinshipyard.JPG'
import Visualiq from '../../img/visualiq.png'
import Bp from '../../img/bp.png'
import Brawny from '../../img/brawny.png'
import ThinkPalm from '../../img/thinkpalm.png'
import Decalogo from '../../img/decalogo.jpg'
import Escape from '../../img/escape.png'
import Punnya from '../../img/punnya.png'
import Winspire from '../../img/winspire.jpeg'
import Onetv from '../../img/onetv.jpeg'

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
                        <div className={styles["sponsor-title"]}>LITMUS7<br />CS-Tech Sponsor</div>
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
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Nest} />
                        <div className={styles["sponsor-title"]}>Refreshment Partner</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Kimball} />
                        <div className={styles["sponsor-title"]}>General Tech Partner</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Mirchi} />
                        <div className={styles["sponsor-title"]}>Radio Partner</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img-alt"]} src={Cyrix} />
                        <div className={styles["sponsor-title"]}>Lifeline Sponsor</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={CSL} />
                        <div className={styles["sponsor-title"]}>Excel Associate</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Visualiq} />
                        <div className={styles["sponsor-title"]}>Visual IQ</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Bp} />
                        <div className={styles["sponsor-title"]}>Bharath Petrolium</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Brawny} />
                        <div className={styles["sponsor-title"]}>Brawny Brute</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={ThinkPalm} />
                        <div className={styles["sponsor-title"]}>Think Palm</div>
                    </a>
                    
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Decalogo} />
                        <div className={styles["sponsor-title"]}>DECATHLON</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Escape} />
                        <div className={styles["sponsor-title"]}>Escape The Room, Kochi</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Punnya} />
                        <div className={styles["sponsor-title"]}>Punnya</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Winspire} />
                        <div className={styles["sponsor-title"]}>Winspire Academy</div>
                    </a>
                    <a href="http://www.nest.com/" target="_blank" className="sponsor-div">
                        <img className={styles["sponsor-img"]} src={Onetv} />
                        <div className={styles["sponsor-title"]}>ONE TV</div>
                    </a>
                </div>

            </div>
        )

    }

}