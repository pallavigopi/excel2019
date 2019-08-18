import React from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

import facebookLogo from '../../img/facebook-logo.png'
import youtubeLogo from '../../img/youtube-logo.png'
import playstoreLogo from '../../img/playstore-logo.png'
import instagramLogo from '../../img/instagram-logo.png'

export default class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            toggle: true
        }
    }

    handleChange = (e) => {
        // document.getElementById("navLine1").classList.toggle("one")
        // document.getElementById("navLine2").classList.toggle("two")
        // document.getElementById("navContent").classList.toggle("three")
        let one = document.getElementById("navLine1")
        let two = document.getElementById("navLine2")
        let three = document.getElementById("navContent")

        if(this.state.toggle) {
            one.style.transform = "translatey(2.5px) rotateZ(45deg)"
            one.style.transition = "0.2s"
            two.style.transform = "translatey(-2.5px) rotateZ(-45deg)"
            two.style.transition = "0.2s"
            three.style.transform = "translatex(100%)"
            three.style.transitionTimingFunction = "ease"
            three.style.transition = "0.5s"
            document.body.style.overflow = 'hidden'

            this.setState({
                toggle : false
            })
        }

        else {
            one.style.transform = "translatey(-10px) rotateZ(0deg)"
            one.style.transition = "0.2s"
            two.style.transform = "translatey(0px) rotateZ(0deg)"
            two.style.transition = "0.2s"
            three.style.transform = "translatex(-100%)"
            three.style.transitionTimingFunction = "ease"
            three.style.transition = "0.5s"
            document.body.style.overflow = 'auto'

            this.setState({
                toggle: true
            })
        }

    }

    render() {

        return (
            <div className={styles["nav-container"]}>
                <div className={styles["nav-cross"]} onClick={this.handleChange} >
                    <div id="navLine1" className={styles["navLine1"]}></div>
                    <div id="navLine2" className={styles["navLine2"]}></div>
                </div>
                <div id="navContent" className={styles["nav-content--container"]}>
                    <ul>
                        <li className={styles["nav-link--gap"]}></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]} onClick={this.handleChange}>Home</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/schedule"><span className={styles["nav-link--text"]} onClick={this.handleChange}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]} onClick={this.handleChange}>Home</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]} onClick={this.handleChange}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]} onClick={this.handleChange}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]} onClick={this.handleChange}>Schedule</span></Link></li>
                    </ul>
                    <div className className={styles["nav-icons--container"]}>
                        <span className={styles["nav-icon"]}><img className={styles["nav-icon-img"]} src={facebookLogo} /></span>
                        <span className={styles["nav-icon"]}><img className={styles["nav-icon-img"]} src={instagramLogo} /></span>
                        <span className={styles["nav-icon"]}><img className={styles["nav-icon-img"]} src={youtubeLogo} /></span>
                        <span className={styles["nav-icon"]}><img className={styles["nav-icon-img"]} src={playstoreLogo} /></span>
                    </div>
                </div>
            </div>
        )
    }
}