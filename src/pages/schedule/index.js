import React from 'react'
import asyncComponent from '../../utils/asyncComponent'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import styles from './style.module.css'
import { read } from 'fs';

const ScheduleFilterImport = () => import('components/schedule-filter-popup')
const ScheduleFilter = asyncComponent(ScheduleFilterImport)

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

class Schedule extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
            events: [],
            filter: {
                types: ["computer-science", "electronics", "all", "electrical","exhinitions", "robotics","workshops", "talks"],
                time: ["morning", "afternoon", "evening"],
                default : {
                    type: "computer-science",
                    time: ["morning", "afternoon", "evening"]
                }
            },
            showFilterPopup: false,
            days: [1,2,3],
            currentDay: 1,
            currentCategory: 'computer-science',
            currentTime: ["morning", "afternoon", "evening"]

        }

        this.changeDay = this.changeDay.bind(this)
        this.totalEvents = [
            {
                name: "Event One Name",
                venue: "Event One Venue",
                date: "1st Oct",
                time: "10:00am - 12:00am",
                img: "../../img/ibetologo.png",
                day: 1,
                category: "computer-science",
                daytime: "morning",
            },
            {
                name: "Event One Name",
                venue: "Event One Venue",
                date: "1st Oct",
                time: "10:00am - 12:00am",
                img: "../../img/ibetologo.png",
                category: "electrical",
                day: 2,
                daytime: "evening"
                
            }
        ]
    }

    componentWillMount() {
        // get data from cms and update the state
        this.setState({
            events: this.totalEvents.filter(event => event.day === this.state.currentDay)
        })
    }

    showFilterPopup = () => {
        this.setState({showFilterPopup: true})
    }

    closeFilterPopup = () => {
        this.setState({showFilterPopup: false})
    }

    resetFilter = () => {
        this.setState({
            currentCategory: this.state.filter.default.type,
            currentTime: this.state.filter.default.time
        })
    }

    modifyFilters = (e, filter) => {


        if(filter === "type") {
            console.log('method called')
            this.setState({
                currentCategory: e.target.value
            })
        }
        else {
            if(!e.target.checked) {
                this.setState({
                    currentTime: this.state.currentTime.filter(a => a !== e.target.value)
                })
            }
            else {
                this.setState({
                    currentTime: [...this.state.currentTime, e.target.value]
                })
            }
        }
    }

    changeDay = (e, val) => {
        if(val>=1 && val<=3)
            this.setState({
                currentDay: val,
                events: this.totalEvents.filter(event => event.day === val)
            })
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
                        <Tabs value={this.state.currentDay} variant="fullWidth" onChange={this.changeDay} aria-label="schedule page tabs">
                            {
                                this.state.days.map((val) => {
                                    return (
                                        <Tab style={{fontSize: 16, fontWeight: 600}} value={val} label={`Day ${val}`} {...{id:`simple-tab-${val}`, 'aria-controls': `simple-tabpanel-${val}`}} />
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
                                console.log(data)
                                if(this.state.currentCategory === "all") 
                                    return <ScheduleEventCard data={data} id={idx} />   

                                if(data.category === this.state.currentCategory && this.state.currentTime.includes(data.daytime)) 
                                    return <ScheduleEventCard data={data} id={idx} />  

                                return (
                                    <div className={styles["schedule-noevent--container"]}>
                                        {/* IF THERE ARE NO EVENTS TO DISPLAY */}
                                        No Events To Display
                                    </div>
                                )
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
            <ScheduleFilter 
                isOpen={this.state.showFilterPopup} 
                data={this.state.filter} 
                handleClose={this.closeFilterPopup}
                handleReset={this.resetFilter}
                updateFilter={this.modifyFilters}
                currentCategory={this.state.currentCategory}
                currentTime={this.state.currentTime}    
            />
        </div>    
        )
    }
}

export default Schedule