import React from "react";
import styles from "./style.module.css";

export default class CompetitionCard extends React.Component {
  render() {
    return (
      <div className={styles["comp-card"]}>
        <div className={styles["comp-logo"]}>
          <a target="_blank">
            <img className={styles["logos"]} src={this.props.details.imgsrc} />
          </a>
        </div>
        <div className={styles["comp"]}>
          <div className={styles["comp-name"]}>
            <b>{this.props.details.name}</b>
          </div>
          <div className={styles["comp-description"]}>
            {this.props.details.description}
          </div>
        </div>
      </div>
    );
  }
}
