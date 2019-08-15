import React from 'react';
import styles from './style.module.css';


export default class EventCard extends React.Component {
    
    render() {
        return(
            <div className={styles["event-card"]}>
                <div className={styles["event"]}>
                    <div className={styles["event-image"]}>
                        <div className = {styles["event-logo"]}>
                            <a target="_blank"><img className={styles["logos"]} src={this.props.details.imgsrc}/></a>
                        </div>
                    </div>
                    <div className={styles["event-in"]}>
                        <div className = {styles["event"]}>                            
                            <div className = {styles["event-name"]}>
                                <b>{this.props.details.name}</b>
                            </div>
                            <div className={styles["descp"]}>
                                <div className = {styles["event-description"]}>
                                    {this.props.details.description}
                                </div>
                            </div>
                            <div className={styles["contact-info"]}>
                                <div className={styles["blue-square-container"]}>
                                    <div className={styles["blue-square"]}>
                                        <div className = {styles["event-email"]}>
                                            <div className = {styles["event-email-img"]}>
                                                <img  alt='email' src={require('../../img/message-closed-envelope.png')}/>
                                            </div>
                                            <div className = {styles["event-email-id"]}> 
                                                <a href={"mailto:" + this.props.details.emailId}>{this.props.details.emailId}</a>
                                            </div>                    
                                        </div>
                                    </div>
                                </div>
                                <div className={styles["blue-square-container"]}>
                                    <div className={styles["blue-square"]}>
                                        <div className = {styles["event-tele"]}>
                                            <img  alt='phone' src={require('../../img/phone-receiver.png')}/><a href={"tel:" + this.props.details.tele}>{this.props.details.tele}</a>                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        );
    }
}


