import React from 'react'
import asyncComponent from '../../utils/asyncComponent'
import styles from './style.module.css'
import axios from 'axios'

const EventEntryImport = () => import('components/event-entry')
const EventEntry = asyncComponent(EventEntryImport)

// var colors = ["#000000", "#0065F9", "#6D589D", "#3B4257", "#e84a5f", "#07689f", "590d82"];

export default class Talks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],

            scrollPos: window.scrollY
        }
    }

    async componentWillMount() {
      let response = await axios.get('https://api.excelmec.org/api/events')
      this.setState({events: response.data.filter(a => a.type === "Talk")})
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        var grid = []
        var events = this.state.events
        var cardOdd = true;
        for (var i in events) {
            var gridItem = (
                <a key={i} className={styles["events"]}><Link to={`events/${events[i].codename}`} style={{textDecoration:'none'}}><EventEntry details={events[i]} direction={cardOdd} /></Link></a>
            )
            cardOdd = !cardOdd;
            grid.push(gridItem)
        }

        return (
            <div>
                <div className={styles["header"]}>
                    <div className={styles["title"]}>Talks</div><div className={styles["subtitle"]}>Excel 2019</div>
                </div>
                <div className={styles["underline"]}></div>
                <div id={styles["event-grid"]}>
                    {grid}
                </div>
            </div>
        )
    }
}