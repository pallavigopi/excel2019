import React from 'react'
import asyncComponent from '../../utils/asyncComponent'
import {Route, Link} from 'react-router-dom'
import styles from './style.module.css'
import axios from 'axios'

const EventEntryImport = () => import('components/event-entry')
const EventEntry = asyncComponent(EventEntryImport)

// var colors = ["#000000", "#0065F9", "#6D589D", "#3B4257", "#e84a5f", "#07689f", "590d82"];

export default class Workshops extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],

            scrollPos: window.scrollY
        }
    }
    async componentWillMount() {
      console.log('working')
      let response = await axios.get('https://api.excelmec.org/api/events')
      this.setState({events: response.data.filter(a => a.type === "Workshop")})
      
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
   /* componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scrollPos: window.scrollY
        });
        var currentPos = this.state.scrollPos;
        if (currentPos < 200) {
            document.body.style.backgroundColor = colors[0];
        }
        else if (currentPos > 200 && currentPos < 800) {
            document.body.style.backgroundColor = colors[1];
        }
        else if (currentPos > 800 && currentPos < 1200) {
            document.body.style.backgroundColor = colors[2];
        }
        else if (currentPos > 1200 && currentPos < 2000) {
            document.body.style.backgroundColor = colors[3];
        }
        else if (currentPos > 2000 && currentPos < 3000) {
            document.body.style.backgroundColor = colors[4];
        }
        else if (currentPos > 3000 && currentPos < 4000) {
            document.body.style.backgroundColor = colors[5];
        }
        else if (currentPos > 4000 && currentPos < 5000) {
            document.body.style.backgroundColor = colors[6];
        }
    };*/

    render() {
        var grid = []
        var events = this.state.events
        var cardOdd = true;
        for (var i in events) {
            var gridItem = (
                <a target="_blank"  rel="noopener noreferrer" key={i} className={styles["events"]} ><Link to={`events/${events[i].codename}`} style={{textDecoration:'none'}}><EventEntry details={events[i]} direction={cardOdd} /></Link></a>
            )
            cardOdd = !cardOdd;
            grid.push(gridItem)
        }

        return (
            <div>
                <div className={styles["header"]}>
                    <div className={styles["title"]}>Workshops</div><div className={styles["subtitle"]}>Excel 2019</div>
                </div>
                <div className={styles["underline"]}></div>
                <div id={styles["event-grid"]}>
                    {grid}
                </div>
            </div>
        )
    }
}