import React from 'react';
import styles from "./style.module.css";

export default class AboutMiniGrid extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){
        return(
            <div className={styles["about-mini-grid"]}>
                <div className={styles["about-mini-grid-item"]}>
                    <div className={styles["mini-grid-heading"]}>Venue</div>
                    <div className={styles["mini-grid-description"]}>
                        {this.props.details.venue}
                    </div>
                </div>
                <div className={styles["about-mini-grid-item"]}>
                    <div className={styles["mini-grid-heading"]}>Date</div>
                    <div className={styles["mini-grid-description"]}>
                        {this.props.details.date}
                    </div>
                </div>
                <div className={styles["about-mini-grid-item"]}>
                    <div className={styles["mini-grid-heading"]}>Time</div>
                    <div className={styles["mini-grid-description"]}>
                        {this.props.details.time}
                    </div>
                </div>   
            </div>
        );
    }
}