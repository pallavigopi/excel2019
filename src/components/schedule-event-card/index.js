import React from 'react'
import styles from './style.module.css'


/*
this component displays each event card
the props.data will have your event

so for example.

props.data.name will be your event name
props.data.venue will be the venue etc...


DONT USE STATE IN THIS COMPONENT


*/


const ScheduleEventCard = (props) => {

    return(
        <div className={styles["schedule-event--container"]}>
            
            <div className={styles["event-image"]}><img src={props.data.img} /></div>
            <div className={styles["event-desc"]}>
                <span>{props.data.name}</span>
                <div className={styles["event-detail"]}>
                  <span>{props.data.venue}</span>
                  <span>{props.data.time}</span>
                </div>
            </div>
            <div className={styles["event-date"]}><span>{props.data.date}</span></div>              
        </div>
    )
}


export default ScheduleEventCard