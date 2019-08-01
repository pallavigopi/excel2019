import React from 'react'
import asyncComponent from '../../utils/asyncComponent'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import styles from './style.module.css'

const ScheduleEventCardImport = () => import('components/schedule-event-card')
const ScheduleEventCard = asyncComponent(ScheduleEventCardImport)

/*
all the events are stored and filtered from the events state 

the event can be of any format. for example : 

events[
    {
        name: "Event One Name",
        venue: "Event One Venue",
        time: {
            from : "Event One from time",
            to: "Event Two time"
        },
        img: "you can add the image link/object here"
    },
    {   .
        .
        similarly for event 2
    },
    .
    .
    .
    .
    .
    {
        ...
        last event n
    }
]

dont add data anywhere inside the component everything will be provided dynamically

*/


export default class Schedule extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            events: [
                {
                    name: "Event One Name",
                    venue: "Event One Venue",
                    date: "1st Oct ",
                    time: "10:00am - 12:00am",
                    img: "../../img/ibetologo.png"
                },
                {
                    name: "Event One Name",
                    venue: "Event One Venue",
                    date: "1st Oct ",
                    time: "10:00am - 12:00am",
                    img: "../../img/ibetologo.png"
                }
            ],
            showFilterPopup: false,
            days: [1,2,3],
            day: 1,
        }

        this.changeDay = this.changeDay.bind(this)
    }

    showFilterPopup = () => {
        this.setState({showFilterPopup: true})
    }

    closeFilterPopup = () => {
        this.setState({showFilterPopup: false})
    }

    changeDay(e, val) {
        console.log(val)
        if(val>=1 && val<=3)
            this.setState({day: val})
    }

    render() {
        return(
            <div className={styles["schedule"]}>
            <div className={styles["schedule-container"]}>
                <div className={styles["schedule-filter--btn"]} onClick={this.showFilterPopup}>
                    Filter
                </div>
                <div className={styles["schedule-header--container"]}>
                    <div className={styles["schedule-title"]}>
                        Schedule
                    </div>
                    <div className={styles["schedule-tabs--container"]}>
                        <Tabs value={this.state.day} variant="fullWidth" onChange={this.changeDay} aria-label="schedule page tabs">
                            {
                                this.state.days.map((val) => {
                                    return (
                                        <Tab value={val} label={`Day ${val}`} {...{id:`simple-tab-${val}`, 'aria-controls': `simple-tabpanel-${val}`}} />
                                    )
                                })
                            }
                        </Tabs>
                     </div>
                </div>
                <div className="schedule-content--container">
                    {
                        this.state.events.length ? (
                            this.state.events.map((data, idx) => {
                                console.log('data', data)
                                return <ScheduleEventCard data={data} id={idx} />
                            })
                        ) : (
                            <div className={styles["schedule-noevent--container"]}>
                                {/* IF THERE ARE NO EVENTS TO DISPLAY */}
                                No Events To Display
                            </div>
                        )
                    }
                </div>
            </div>
        </div>    
        )
    }
}