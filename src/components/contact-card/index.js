import React, {Component} from 'react';
import styles from './style.module.css';


export default class ContactCard extends Component{

    render(){
        return(
            <div>
            <div style={{zIndex:3}} className={styles["card"]}>
                <img src={this.props.details.img}/>
                <div className={styles["contact-overlay"]}>
                    <div className={styles["card-info"]}>
                    <div>Thinking longingly about tuna brine get scared by doggo also cucumerro fight own tail for bleghbleghvomit my furball really tie the room together.</div>
                    <div><img  alt='' src={require('../../img/message-closed-envelope.png')}/> <a href={"mailto:" + this.props.details.email}>{this.props.details.email}</a><br/>
                    <img  alt='' src={require('../../img/phone-receiver.png')}/> {this.props.details.phno}  <br />
                    <img  className={styles["contact-social"]} alt='' src={require('../../img/linkedin.png')}/> <a href={this.props.details.linkln}></a><br/>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles["below-card"]}>
            <div>NAME</div>
            <div>Designation</div>
            </div>

            </div>
        )
    }
}

/*
                <div className={styles["gradient-overlay"]}>
                    <div className={styles["card-info"]}>
                        <div className={styles["descp"]}>
                            {this.props.details.descp} <br />
                        </div>
                        {this.props.details.name}  <br />
                        <div className={styles["contact-info"]}>
                        <img  alt='' src={require('../../img/message-closed-envelope.png')}/> <a href={"mailto:" + this.props.details.email}>{this.props.details.email}</a> <br />
                        <img  alt='' src={require('../../img/phone-receiver.png')}/> {this.props.details.phno}  <br />
                        </div>
                       { <div className={styles["bottom-right"]}>
                            <img  alt='' src={require('../../img/github-logo.png')}/>
                            &nbsp;
                            <img  alt='' src={require('../../img/linkedin-logo.png')}/>
                        </div>}
                        </div>
                        </div>
*/