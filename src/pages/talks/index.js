import React from 'react'
import asyncComponent from '../../utils/asyncComponent'
import styles from './style.module.css'
import {Route, Link} from 'react-router-dom'
import axios from 'axios'

const EventEntryImport = () => import('components/event-entry')
const EventEntry = asyncComponent(EventEntryImport)

const EventCardImport = () => import('components/event-card')
const EventCard = asyncComponent(EventCardImport)

// var colors = ["#000000", "#0065F9", "#6D589D", "#3B4257", "#e84a5f", "#07689f", "590d82"];

export default class Talks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            loading: true,
            scrollPos: window.scrollY
        }
    }

    async componentWillMount() {
      let response = await axios.get('https://api.excelmec.org/api/events')
      this.setState({events: response.data.filter(a => a.type === "Talk"),loading: false})
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
                {this.state.loading && 
                    <div id={styles["event-grid"]}>
                        <img className={styles["loader"]} src={require('../../img/loader.gif')} alt=""/>
                    </div>
                }
                { !this.state.loading &&
                <div id={styles["event-grid"]}>
                    {grid}
                </div>
                }
                <Route path='/talks/:event' component={EventCard}/>
            </div>
        )
    }
}