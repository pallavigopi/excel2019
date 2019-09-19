import React, {Component} from 'react';
import styles from './style.module.css';
import ContactCard from 'components/contact-card';

export default class Contacts extends Component{

    constructor(props){
        super(props)
        this.state={
            cardInfo:[
               {desig:"Chairman",name:"Name",descp:"Thinking longingly about tuna brine get scared by doggo also cucumerro fight own tail for bleghbleghvomit my furball really tie the room together.",email:"abc@email.com",phno:"+91 0393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {desig:"Secretary",name:"Name",descp:"Thinking longingly about tuna brine get scared by doggo also cucumerro fight own tail for bleghbleghvomit my furball really tie the room together.",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {desig:"Desgination",name:"Name",descp:"Thinking longingly about tuna brine get scared by doggo also cucumerro fight own tail for bleghbleghvomit my furball really tie the room together.",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {desig:"Lorem",name:"Name",descp:"Thinking longingly about tuna brine get scared by doggo also cucumerro fight own tail for bleghbleghvomit my furball really tie the room together.",email:"abc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {desig:"Lorem",name:"Name",descp:"Thinking longingly about tuna brine get scared by doggo also cucumerro fight own tail for bleghbleghvomit my furball really tie the room together.",email:"aabc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {desig:"Lorem",name:"Name",descp:"Thinking longingly about tuna brine get scared by doggo also cucumerro fight own tail for bleghbleghvomit my furball really tie the room together.",email:"aabc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"},
               {desig:"Lorem",name:"Name",descp:"Thinking longingly about tuna brine get scared by doggo also cucumerro fight own tail for bleghbleghvomit my furball really tie the room together.",email:"bc@email.com",phno:"+91 90393843959",img:"https://placeimg.com/640/480/people",linkln:"https://in.linkedin.com/"}
            ]
        }
    }
    render(){
        var grid = []
        for(var i=0 ; i<this.state.cardInfo.length ; i++){
			var gridItem = <ContactCard details={this.state.cardInfo[i]} />
               grid.push(gridItem) 
        }  
        return(
            <div>
               <div>
               <div className={styles["header"]}>
                    <a className={styles["title"]}>Get in Touch With Us</a>
                </div>
                    <div className={styles["container"]}>
                        {grid}
                    </div>
                </div>
            </div>
        )
    }
}