import React from 'react';
import styles from "./style.module.css";

export default class AboutContactGrid extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){
        return(
                <div className={styles["contact-mini-grid-item"]}>
                    <div className={styles["contact-grid-name"]}>
                        <img  alt="" src={require('../../img/user.png')}/>
                        {this.props.details.name}
                    </div>
                    <div className={styles["contact-grid-designation"]}>
                        {this.props.details.designation}
                    </div>
                    <div className={styles["contact-grid-phone"]}>
                        <img  alt="" src={require('../../img/phone-receiver.png')}/>
                        {this.props.details.phone_number}
                    </div>
                </div>   
        );
    }
}