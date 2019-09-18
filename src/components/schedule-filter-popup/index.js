import React from 'react'

import styles from './style.module.css'
import Slide from '@material-ui/core/Slide'
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    Checkbox, 
    DialogActions,
    Radio,
    Button
} 
from '@material-ui/core'

// modify the transition for the popup here
const Transition = (props) => {
    return <Slide direction="down" {...props} />
}

const formatWord = (input) => {
    let words = input.split('-')

    words.forEach((val, i) => {
        words[i] = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
    })
    return words.join(' ')
}

const ScheduleFilter = (props) => { 

    return (
            <Dialog
                open={props.isOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                maxWidth='100vw'
                // className={styles["filter-container"]}
            >
                <DialogContent style={{padding: 0}} id="scheduleFilterContent">
                    <div className={styles["filter-title--container"]}>
                        <div className={styles["filter-close-btn"]} onClick={props.handleClose}>X</div>
                        <div className={styles["filter-title"]}>Filters</div>
                    </div>
                    <div className={styles["filter-content--container"]}>
                        <h4 className={styles["filter-content--title"]}>Categories</h4>
                        <div className={styles["filter-type--container"]}>
                            {
                                props.data.types.map((val, i) => {
                                    return(
                                        <label value={val} className={styles["filter-type-checkbox"]} onClick={e => props.updateFilter(e, "type")}>
                                            {/* <input
                                                type="radio"
                                                value={val}
                                                checked={props.currentCategory === val}
                                            /> */}
                                            <Radio
                                                color="secondary"
                                                value={val}
                                                checked={props.currentCategory === val}
                                                // For custom icons add the component below
                                                // icon={}
                                                // checkedIcon={}
                                            />
                                            {formatWord(val)}
                                        </label>
                                    )
                                })
                            }
                        </div>
                        <h4 className={styles["filter-time--title"]}>Time</h4>
                        <div className={styles["filter-time--container"]}>
                            {
                                props.data.time.map(val => {
                                    return(
                                        <label value={val} className={styles["filter-time-checkbox"]}>
                                            <Checkbox 
                                                checked={props.currentTime.includes(val)}
                                                value={val}
                                                color="primary"
                                                onClick={e => props.updateFilter(e, "time")}
                                            />
                                            {formatWord(val)}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleReset} style={{color: "#ff4500"}}>RESET</Button>
                </DialogActions>
            </Dialog>
    )
}

export default ScheduleFilter