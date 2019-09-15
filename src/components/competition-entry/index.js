import React from "react";
import SkyLight from "react-skylight";
import styles from "./style.module.css";

export default class CompetitionEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubSection: "About",
      content: this.props.details.description
    }
  }

  handleAbout = () => {
    this.setState({
      currentSubSection: "About",
      content: this.props.details.description
    });
  }

  handleFormat = () => {
    this.setState({
      currentSubSection: "Format",
      content: this.props.details.format
    });
  }

  handleRules = () => {
    this.setState({
      currentSubSection: "Rules",
      content: this.props.details.rules
    });
  }

  handleContact = () => {
    this.setState({
      currentSubSection: "Contact",
      content: this.props.details.contact
    });
  }

  render() {
    var dialogStyles = {
      padding: "2rem",
      backgroundColor: "#000000",
      color: "#ffffff",
      position: "fixed",
      top: "0px",
      left: "0px",
      margin: "0px",
      width: "calc(100vw - 4rem)",
      height: "calc(100vh - 4rem)"
  
    };

    var closeButtonStyle = {
      cursor: "pointer",
      position: "absolute",
      fontSize: "1.8em",
      marginRight: "1rem",
      marginTop: "0.4rem"
    };

    return (
      <div>
        <div onClick={() => this.simpleDialog.show()}>
          <div style={{zIndex:3}} className={styles["comp-card"]}>
            <div className={styles["comp-logo"]}>
              <div target="_blank" className={styles["logo-container"]}>
                <img
                  className={styles["logos"]}
                  src={this.props.details.imgsrc}
                />
              </div>
            </div>
            <div className={styles["comp"]}>
              <div className={styles["comp-name"]}>
                <b>{this.props.details.name}</b>
              </div>
              <div className={styles["comp-description"]}>
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
          ref={ref => (this.simpleDialog = ref)}
          dialogStyles={dialogStyles}
          closeButtonStyle={closeButtonStyle}
          transitionDuration={450}
        >
          <div  className={styles["modal-container"]}>
            <div className={styles["modal-title"]}>
              {this.props.details.name}
            </div>
            <div className={styles["modal-image"]}>
              <img
                className={styles["modal-image-logo"]}
                src={this.props.details.imgsrc}
              />
            </div>
            <div className={styles["modal-event-body"]}>
              <ul className={styles["popup-navbar"]}>
                <li><a className={styles[this.state.currentSubSection == "About" ? "li-active" : ""]} onClick={this.handleAbout} id="About">About</a></li>
                <li><a className={styles[this.state.currentSubSection == "Format" ? "li-active" : ""]} onClick={this.handleFormat} id="Format">Format</a></li>
                <li><a className={styles[this.state.currentSubSection == "Rules" ? "li-active" : ""]} onClick={this.handleRules} id="Rules">Rules</a></li>
                <li><a className={styles[this.state.currentSubSection == "Contact" ? "li-active" : ""]} onClick={this.handleContact} id="Contacts">Contact</a></li>
              </ul>
              <div className={styles["modal-subsection-container"]}>
                {this.state.content}
              </div>
            </div>
          </div>
        </SkyLight>
      </div>
    );
  }
}
