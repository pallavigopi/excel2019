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
            {props.data}
        </div>
    )
}


export default ScheduleEventCard