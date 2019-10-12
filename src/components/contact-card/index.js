import React, {Component} from 'react';
import styles from './style.module.css';


export default class ContactCard extends Component{

    render(){
        return(
            <div>
            <div style={{zIndex:3}} className={styles["card"]}>
                <img src={this.props.details.img} alt=""/>
                <div className={styles["contact-overlay"]}>
                    <div className={styles["card-info"]}>
                    <div>{this.props.details.descp}</div>
                    <div><img  alt="" src={require('../../img/message-closed-envelope.png')}/> <a href={"mailto:" + this.props.details.email}>{this.props.details.email}</a><br/>
                    <img  alt="" src={require('../../img/phone-receiver.png')}/> <a href={"tel:"+this.props.details.phno}>{this.props.details.phno}</a>  <br />
                    <a target="_blank"  href={this.props.details.linkln}><img  className={styles["contact-social"]} alt="" src={require('../../img/linkedin.png')}/></a><br/>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles["below-card"]}>
            <div>{this.props.details.name}</div>
            <div>{this.props.details.desig}</div>
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