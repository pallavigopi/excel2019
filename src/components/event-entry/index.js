import React from 'react'
import SkyLight from 'react-skylight';
import { Route, Link } from 'react-router-dom'
import styles from './style.module.css';

export default class EventEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        var buttons = []
        for( var i in this.props.details.buttons){
            var con = this.props.details.buttons[i]
            var button = (
                <a href={con.link} target="_blank" className={styles["button-container"]}>{con.name}</a>
            )
            buttons.push(button)
        }

        var dialogStyles = {
            padding: '2rem',
            backgroundColor: '#000000',
            color: '#ffffff',
            position: 'fixed',
            top: '0px',
            left: '0px',
            margin: '0px',
            width: 'calc(100vw - 4rem)',
            height: 'calc(100vh - 4rem)',
            overflowY: 'scroll'
        };

        var closeButtonStyle = {
            cursor: 'pointer',
            position: 'absolute',
            fontSize: '3em',
            marginRight: '2rem',
            marginTop: '1.25rem'
        }

        return (
            <div>
                <div onClick={() => this.simpleDialog.show()}>
                    <div style={{zIndex:3}} className={styles["event-card-left"]} >
                        {/* <div className={styles["event-card-" + (this.props.direction == true ? "left" : "right")]} > */}
                        <div className={styles["event-logo-name-container-left"]}>
                            <div className={styles["event-logo"]}>
                                <div target="_blank" className={styles["logo-container"]}><img className={styles["logos"]} src={this.props.details.imgsrc} /></div>
                            </div>
                            <div className={styles["event-name"]}>
                                <b>{this.props.details.name}</b>
                            </div>
                        </div>
                        <div className={styles["event"]}>
                            <div className={styles["event-description"]}>
                                {this.props.details.description}
                            </div>
                        </div>
                        <div className={styles["learnmore-container"]}>
                            <button className={styles["learn-more"]}>Learn More!</button>
                        </div>
                    </div>
                </div>
                
                <SkyLight
                    hideOnOverlayClicked
                    ref={ref => this.simpleDialog = ref}
                    dialogStyles={dialogStyles}
                    closeButtonStyle={closeButtonStyle}
                    transitionDuration={450}
                >
                    <div className={styles["modal-container"]}>
                        {/*<div className={styles["modal-title"]}>{this.props.details.name}</div>*/}
                        <div className={styles["modal-image"]}>
                            <img className={styles["modal-image-logo"]} src={this.props.details.imgsrc} />
                        </div>
                        {buttons}
                        <div className={styles["modal-event-body"]} dangerouslySetInnerHTML={{__html: this.props.details.info}}>
            
                        </div>
                        
                    </div>
                </SkyLight>
            </div>
        )
    }
}
