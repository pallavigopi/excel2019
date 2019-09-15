import React from "react";
import asyncComponent from "../../utils/asyncComponent";

import styles from "./style.module.css";
//testing
import event1 from "../../img/algorithm.png";
import event2 from "../../img/cloud.png";
import event3 from "../../img/someevent.png"
import event4 from "../../img/someevent2.png"


const CompetitionEntryImport = () => import("components/competition-entry");
const CompetitionEntry = asyncComponent(CompetitionEntryImport);


export default class Competitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          name: "IBeTo 2019",
          imgsrc: event1,
          format: "Format of Ibeto",
          rules: "Rules for Ibeto",
          contact: "Contact for Ibeto",
          description:"Robitics"        },
        {
          name: "HackForTomorrow 2019",
          imgsrc: event2,
          format: "Format of HackForTomorrow",
          rules: "Rules for HackForTomorrow",
          contact: "Contact for HackForTomorrow",
          description:"Computer Science"        },
        {
          name: "IBeTo 2019",
          imgsrc: event3,
          format: "Format of Ibeto",
          rules: "Rules for Ibeto",
          contact: "Contact for Ibeto",
          description: "Non-Tech"        },
        {
            name: "IBeTo 2019",
            imgsrc: event4,
            format: "Format of Ibeto",
            rules: "Rules for Ibeto",
            contact: "Contact for Ibeto",
            description:"Robitics"        },
        {
            name: "HackForTomorrow 2019",
            imgsrc: event2,
            format: "Format of HackForTomorrow",
            rules: "Rules for HackForTomorrow",
            contact: "Contact for HackForTomorrow",
            description:"Computer Science"        },
            {
              name: "IBeTo 2019",
              imgsrc: event3,
              format: "Format of Ibeto",
              rules: "Rules for Ibeto",
              contact: "Contact for Ibeto",
              description: "Non-Tech"        },
            {
                name: "IBeTo 2019",
                imgsrc: event4,
                format: "Format of Ibeto",
                rules: "Rules for Ibeto",
                contact: "Contact for Ibeto",
                description:"Robitics"        },
            {
                name: "HackForTomorrow 2019",
                imgsrc: event2,
                format: "Format of HackForTomorrow",
                rules: "Rules for HackForTomorrow",
                contact: "Contact for HackForTomorrow",
                description:"Computer Science"        },
        {
            name: "IBeTo 2019",
            imgsrc: event1,
            format: "Format of Ibeto",
            rules: "Rules for Ibeto",
            contact: "Contact for Ibeto",
            description: "Non-Tech"        }

      ],

      scrollPos: window.scrollY
    };
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   this.setState({
  //     scrollPos: window.scrollY
  //   });
  //   var currentPos = this.state.scrollPos;
  //   if (currentPos < 200) {
  //     document.body.style.backgroundColor = colors[0];
  //   } else if (currentPos > 200 && currentPos < 800) {
  //     document.body.style.backgroundColor = colors[1];
  //   } else if (currentPos > 800 && currentPos < 1200) {
  //     document.body.style.backgroundColor = colors[2];
  //   } else if (currentPos > 1200 && currentPos < 2000) {
  //     document.body.style.backgroundColor = colors[3];
  //   } else if (currentPos > 2000 && currentPos < 3000) {
  //     document.body.style.backgroundColor = colors[4];
  //   } else if (currentPos > 3000 && currentPos < 4000) {
  //     document.body.style.backgroundColor = colors[5];
  //   } else if (currentPos > 4000 && currentPos < 5000) {
  //     document.body.style.backgroundColor = colors[6];
  //   }
  // };

  render() {
    var grid = [];
    var events = this.state.events;
    for (var i in events) {
      var gridItem = (
        <a
          target="_blank"
          key={i}
          className={styles["events"]}
          href={events[i].link}
        >
          <CompetitionEntry details={events[i]} />
        </a>
      );
      grid.push(gridItem);
    }

    return (
      <div>
        <div className={styles["header"]}>
          <a className={styles["title"]}>Excel 2019 Competitions!</a>
        </div>
        <div id={styles["comp-grid"]}>{grid}</div>
      </div>
    );
  }
}
