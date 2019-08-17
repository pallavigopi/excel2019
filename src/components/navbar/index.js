import React from 'react'
import styles from './style.module.css'
import { Link } from 'react-router-dom'


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
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]}>Home</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/schedule"><span className={styles["nav-link--text"]}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]}>Home</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]}>Schedule</span></Link></li>
                        <li className={styles["nav-link"]}><Link to="/home"><span className={styles["nav-link--text"]}>Schedule</span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}