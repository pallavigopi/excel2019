import React from 'react';
import styles from './style.module.css';
import axios from 'axios';
import SkyLight from 'react-skylight'

export default class EventCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            eventData: {

            }
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.simpleDialog.show()
        }, 50)
    }

    async componentWillMount() {
        var comp = this
        let response = await axios.get('http://34.93.246.77/api/events')
        console.log('RESPONSE',response.data)
        response.data.forEach(async (val) => {
            if(val.codename === comp.props.match.params['event']) {
                // let data = await axios.get(`http://34.93.246.77/api/competitions/${val.id}`);
                await comp.setState({
                    eventData: val,
                })
            }
        })
      }

      handleClose() {
        setTimeout( () => {
            window.history.back();
        }, 450)
      }

      componentWillUnmount() {
          this.props.history.push('/events')
      }
    
    render() {

        var buttons = []
        for (var i in this.state.eventData.buttons) {
            var con = this.state.eventData.buttons[i]
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

        return(
            <SkyLight
                    hideOnOverlayClicked
                    ref={ref => this.simpleDialog = ref}
                    dialogStyles={dialogStyles}
                    closeButtonStyle={closeButtonStyle}
                    afterClose={this.handleClose}
                    transitionDuration={450}
                >
                    <div className={styles["modal-container"]}>
                        <div className={styles["modal-title"]}>{this.state.eventData.name}</div>
                        <div className={styles["modal-image"]}>
                            <img className={styles["modal-image-logo"]} src={this.state.eventData.img} />
                        </div>
                        {buttons}
                        <div className={styles["modal-event-body"]} dangerouslySetInnerHTML={{ __html: this.state.eventData.info }}>

                        </div>

                    </div>
            </SkyLight>
        );
    }
}