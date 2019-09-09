import React from "react";
import asyncComponent from "../../utils/asyncComponent";

import styles from "./style.module.css";
//testing
import ibetoLogo from "../../img/ibetologo.png";
import hackfortomorrow from "../../img/hftlogo.png";

const CompetitionEntryImport = () => import("components/competition-entry");
const CompetitionEntry = asyncComponent(CompetitionEntryImport);

var colors = [
  "#1b1d1e",
  "#3d84a8",
  "#6D589D",
  "#3B4257",
  "#e84a5f",
  "#07689f",
  "590d82"
];

export default class Competitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          name: "IBeTo 2019",
          imgsrc: ibetoLogo,
          description:
            "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions."
        },
        {
          name: "HackForTomorrow 2019",
          imgsrc: hackfortomorrow,
          description:
            "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!"
        },
        {
          name: "IBeTo 2019",
          imgsrc: ibetoLogo,
          description:
            "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions."
        },
        {
          name: "HackForTomorrow 2019",
          imgsrc: hackfortomorrow,
          description:
            "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!"
        },
        {
          name: "IBeTo 2019",
          imgsrc: ibetoLogo,
          description:
            "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions."
        },
        {
          name: "HackForTomorrow 2019",
          imgsrc: hackfortomorrow,
          description:
            "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!"
        },
        {
          name: "IBeTo 2019",
          imgsrc: ibetoLogo,
          description:
            "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions."
        },
        {
          name: "HackForTomorrow 2019",
          imgsrc: hackfortomorrow,
          description:
            "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!"
        },
        {
          name: "IBeTo 2019",
          imgsrc: ibetoLogo,
          description:
            "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions."
        },
        {
          name: "HackForTomorrow 2019",
          imgsrc: hackfortomorrow,
          description:
            "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!"
        },
        {
          name: "IBeTo 2019",
          imgsrc: ibetoLogo,
          description:
            "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions."
        },
        {
          name: "HackForTomorrow 2019",
          imgsrc: hackfortomorrow,
          description:
            "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!"
        }
      ],

      scrollPos: window.scrollY
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollPos: window.scrollY
    });
    var currentPos = this.state.scrollPos;
    if (currentPos < 200) {
      document.body.style.backgroundColor = colors[0];
    } else if (currentPos > 200 && currentPos < 800) {
      document.body.style.backgroundColor = colors[1];
    } else if (currentPos > 800 && currentPos < 1200) {
      document.body.style.backgroundColor = colors[2];
    } else if (currentPos > 1200 && currentPos < 2000) {
      document.body.style.backgroundColor = colors[3];
    } else if (currentPos > 2000 && currentPos < 3000) {
      document.body.style.backgroundColor = colors[4];
    } else if (currentPos > 3000 && currentPos < 4000) {
      document.body.style.backgroundColor = colors[5];
    } else if (currentPos > 4000 && currentPos < 5000) {
      document.body.style.backgroundColor = colors[6];
    }
  };

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
