import React from 'react'
import Popup from 'reactjs-popup';
import styles from './style.module.css';

export default class EventEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }

    render() {
        return (
            <React.Fragment>
                <div className="button" onClick={this.openModal}>
                    <div className={styles["event-card"]}>
                        <div className={styles["event-logo"]}>
                            <div target="_blank" className={styles["logo-container"]}><img className={styles["logos"]} src={this.props.details.imgsrc} /></div>
                        </div>
                        <div className={styles["event"]}>
                            <div className={styles["event-name"]}>
                                <b>{this.props.details.name}</b>
                            </div>
                            <div className={styles["event-description"]}>
                                {this.props.details.description}
                            </div>
                        </div>
                        <div className={styles["learnmore-container"]}>
                            <button className={styles["learn-more"]}>Learn More!</button>
                        </div>
                    </div>
                </div>

                <Popup className={styles["popup-overlay"]}
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                    <div className={styles["modal"]}>
                        < div className={styles["close"]} onClick={this.closeModal}>
                            X
                        </div>
                    </div>
                </Popup>
            </React.Fragment >
        );
    }
}