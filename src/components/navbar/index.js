import React from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

import facebookLogo from '../../img/facebook-logo.png'
import youtubeLogo from '../../img/youtube-logo.png'
import playstoreLogo from '../../img/playstore-logo.png'
import instagramLogo from '../../img/instagram-logo.png'
import { NONAME } from 'dns';

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
                        <li className={styles["nav-link"]}><Link to="/home" style={{textDecoration:'none'}}><span className={styles["nav-link--text"]} onClick={this.handleChange}>Home</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/schedule" style={{textDecoration:'none'}}><span className={styles["nav-link--text"]} onClick={this.handleChange}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/contacts" style={{textDecoration:'none'}}><span className={styles["nav-link--text"]} onClick={this.handleChange}>Contacts</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home" style={{textDecoration:'none'}}><span className={styles["nav-link--text"]} onClick={this.handleChange}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home" style={{textDecoration:'none'}}><span className={styles["nav-link--text"]} onClick={this.handleChange}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home" style={{textDecoration:'none'}}><span className={styles["nav-link--text"]} onClick={this.handleChange}>Schedule</span></Link></li>
                    </ul>
                    <div className className={styles["nav-icons--container"]}>
                        <a href="https://www.facebook.com/excelmec/" className={styles["nav-icon"]}><img className={styles["nav-icon-img"]} src={facebookLogo} /></a>
                        <a href="https://www.instagram.com/excelmec/?hl=en" className={styles["nav-icon"]}><img className={styles["nav-icon-img"]} src={instagramLogo} /></a>
                        <a href="https://www.youtube.com/channel/UCLP9HOgPekLpFzv2xIVwoFg" className={styles["nav-icon"]}><img className={styles["nav-icon-img"]} src={youtubeLogo} /></a>
                        <span className={styles["nav-icon"]}><img className={styles["nav-icon-img"]} src={playstoreLogo} /></span>
                    </div>
                </div>
            </div>
        )
    }
}