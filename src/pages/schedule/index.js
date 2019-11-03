import React from 'react'
import asyncComponent from '../../utils/asyncComponent'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import axios from 'axios'


import styles from './style.module.css'
import { read } from 'fs';
import testImage from '../../img/ibetologo.png'

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
                types: [ "All", "Computer-Science", "Gen-Tech", "Non-Tech","Event", "Robotics","Workshops", "Talks"],
                time: ["Morning", "Afternoon", "Evening"],
                default : {
                    type: "All",
                    time: ["Morning", "Afternoon", "Evening"]
                }
            },
            showFilterPopup: false,
            days: [1,2,3],
            currentDay: 1,
            currentCategory: 'All',
            currentTime: ["Morning", "Afternoon", "Evening"],
            nextCategory: 'All',
            nextTime: ["Morning", "Afternoon", "Evening"],
            loading: true,

        }   

        this.changeDay = this.changeDay.bind(this)
        this.totalEvents = []
    }

    async componentWillMount() {
        // get data from cms and update the state
        let response = await axios.get('https://api.excelmec.org/api/schedule')
        this.totalEvents= response.data;

        this.setState({
            totalEvents: response.data,
            loading:false,
            events: response.data.filter(event => event.day === this.state.currentDay)
        })
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }

    showFilterPopup = () => {
        this.setState({showFilterPopup: true})
    }

    closeFilterPopup = () => {
        this.setState({showFilterPopup: false})
        document.getElementById("scheduleFilterContent").scrollTop = 0;
    }

    resetFilter = (e) => {
        this.setState({
            currentCategory: this.state.filter.default.type,
            currentTime: this.state.filter.default.time
        })
    }

    modifyFilters = (e, filter) => {

        if(filter === "type") {
            this.setState({
                nextCategory: e.target.value
            })
        }
        else {
            if(!e.target.checked) {
                this.setState({
                    nextTime: this.state.nextTime.filter(a => a !== e.target.value)
                })
            }
            else {
                this.setState({
                    nextTime: [...this.state.nextTime, e.target.value]
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

    applyFilter = () => {
        this.setState({
            // events: this.state.nextEvents,
            currentCategory: this.state.nextCategory,
            currentTime: this.state.nextTime,
        }, () => {
            this.closeFilterPopup()
        })
    }



    render() {

        let noEventFlag = 0

        return(
            <div className={styles["schedule"]}>
            <div className={styles["schedule-container"]}>
                <div style={{zIndex:3}} className={styles["schedule-filter--btn"]} onClick={this.showFilterPopup}>
                    Filter
                </div>
                <div className={styles["schedule-header--container"]}>
                    <div style={{zIndex:3}} className={styles["schedule-title"]}>
                        Schedule
                    </div>
                    <div className={styles["schedule-tabs--container"]}>
                        <Tabs value={this.state.currentDay} variant="fullWidth" onChange={this.changeDay} aria-label="schedule page tabs">
                            {
                                this.state.days.map((val) => {
                                    return (
                                        <Tab style={{fontSize: 16, fontWeight: 600, zIndex:3}} value={val} label={`Day ${val}`} {...{id:`simple-tab-${val}`, 'aria-controls': `simple-tabpanel-${val}`}} />
                                    )
                                })
                            }
                        </Tabs>
                     </div>
                </div>
                {this.state.loading && 
                 <div className="schedule-content--container">
                     <img className={styles["loader"]} src={require('../../img/loader.gif')} alt=""/>
                 </div>
                }
                { !this.state.loading &&
                <div className="schedule-content--container">
                    { this.totalEvents.length ? (
                        this.state.events.length ? (
                            this.state.events.map((data, idx) => {
                                if(this.state.currentCategory === "All") 
                                    return <ScheduleEventCard data={data} id={idx} />   

                                if(data.category === this.state.currentCategory && this.state.currentTime.includes(data.daytime)) 
                                    return <ScheduleEventCard data={data} id={idx} />  

                                noEventFlag++
                                if(noEventFlag === 1)
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
                    ) : (
                        <div className={styles["schedule-noevent--container"]}>
                                {/* IF THERE ARE NO EVENTS TO DISPLAY */}
                                Coming soon
                            </div>
                    )
                    }
                </div>
                }
                
            </div>
            <ScheduleFilter 
                isOpen={this.state.showFilterPopup} 
                data={this.state.filter} 
                handleClose={this.closeFilterPopup}
                handleReset={this.resetFilter}
                handleApply={this.applyFilter}
                updateFilter={this.modifyFilters}
                currentCategory={this.state.nextCategory}
                currentTime={this.state.nextTime}    
            />
        </div>    
        )
    }
}

export default Schedule