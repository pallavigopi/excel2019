import React from "react";
import asyncComponent from "../../utils/asyncComponent";

import styles from "./style.module.css";
//testing
import event1 from "../../img/space-robot.png";
import event2 from "../../img/spaceship.png";
import event3 from "../../img/moon-rover.png"
import event4 from "../../img/cloud-computing.png"


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
          venue: "Model Engg College",
          date : "Nov 8",
          time : "10:30 AM",
          format: "Pie bonbon liquorice. Tart cotton candy bear claw fruitcake muffin sugar plum cheesecake. Ice cream halvah jelly beans. Pastry pie jelly sweet roll. Bear claw sesame snaps topping donut candy sugar plum chocolate bar sweet chocolate bar. Candy canes biscuit gummies carrot cake liquorice candy gummi bears dragée. Powder toffee caramels. Candy canes sugar plum lollipop caramels apple pie cupcake pastry danish fruitcake. Toffee dragée tiramisu wafer halvah candy canes lemon drops oat cake. Jelly beans topping chocolate cake chocolate bar tart. Dessert chupa chups lemon drops bear claw pudding gummi bears jelly beans dragée pudding. Tiramisu croissant brownie candy canes muffin candy canes jelly-o cake cupcake.Croissant jelly jelly ice cream apple pie croissant tootsie roll. Toffee pie icing toffee chocolate bar bonbon oat cake. Chocolate bar chocolate cake gummies toffee icing fruitcake. Bear claw cotton candy chocolate cake oat cake macaroon marzipan apple pie croissant chocolate. Bonbon gummi bears sugar plum toffee wafer gummies tootsie roll tart wafer. Powder sesame snaps gummies fruitcake sweet roll. Jelly tart oat cake icing pie lemon drops sweet jelly beans. Sweet cupcake jujubes bear claw danish jelly beans powder jelly danish. Lollipop dessert bonbon pudding chupa chups jujubes wafer. Croissant icing tootsie roll caramels pastry. Pudding cupcake cookie. Tiramisu sugar plum cake sweet.Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream.",
          rules: "Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream.",
          contact: "Croissant jelly jelly ice cream apple pie croissant tootsie roll. Toffee pie icing toffee chocolate bar bonbon oat cake. Chocolate bar chocolate cake gummies toffee icing fruitcake. Bear claw cotton candy chocolate cake oat cake macaroon marzipan apple pie croissant chocolate. Bonbon gummi bears sugar plum toffee wafer gummies tootsie roll tart wafer. Powder sesame snaps gummies fruitcake sweet roll. Jelly tart oat cake icing pie lemon drops sweet jelly beans. Sweet cupcake jujubes bear claw danish jelly beans powder jelly danish. Lollipop dessert bonbon pudding chupa chups jujubes wafer. Croissant icing tootsie roll caramels pastry. Pudding cupcake cookie. Tiramisu sugar plum cake sweet.",
          category:"Robitics",
          description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."       },
        {
          name: "HackForTomorrow 2019",
          imgsrc: event2,
          venue: "Model Engg College",
          date : "Nov 8",
          time : "10:30 AM",
          format: "Format of HackForTomorrow",
          rules: "Rules for HackForTomorrow",
          contact: "Contact for HackForTomorrow",
          category:"Computer Science",
          description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."        },
        {
          name: "IBeTo 2019",
          imgsrc: event3,
          venue: "Model Engg College",
          date : "Nov 8",
          time : "10:30 AM",
          format: "Format of Ibeto",
          rules: "Rules for Ibeto",
          contact: "Contact for Ibeto",
          category: "Non-Tech",
          description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."        },
        {
            name: "IBeTo 2019",
            imgsrc: event4,
            venue: "Model Engg College",
            date : "Nov 8",
            time : "10:30 AM",
            format: "Format of Ibeto",
            rules: "Rules for Ibeto",
            contact: "Contact for Ibeto",
            category:"Robitics",
            description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."        },
        {
            name: "HackForTomorrow 2019",
            imgsrc: event2,
            venue: "Model Engg College",
            date : "Nov 8",
            time : "10:30 AM",
            format: "Format of HackForTomorrow",
            rules: "Rules for HackForTomorrow",
            contact: "Contact for HackForTomorrow",
            category:"Computer Science",
            description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."         },
            {
              name: "IBeTo 2019",
              imgsrc: event3,
              venue: "Model Engg College",
              date : "Nov 8",
              time : "10:30 AM",
              format: "Format of Ibeto",
              rules: "Rules for Ibeto",
              contact: "Contact for Ibeto",
              category: "Non-Tech",
              description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."        },
            {
                name: "IBeTo 2019",
                imgsrc: event4,
                venue: "Model Engg College",
                date : "Nov 8",
                time : "10:30 AM",
                format: "Format of Ibeto",
                rules: "Rules for Ibeto",
                contact: "Contact for Ibeto",
                category:"Robitics",
                description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."         },
            {
                name: "HackForTomorrow 2019",
                imgsrc: event2,
                venue: "Model Engg College",
                date : "Nov 8",
                time : "10:30 AM",
                format: "Format of HackForTomorrow",
                rules: "Rules for HackForTomorrow",
                contact: "Contact for HackForTomorrow",
                category:"Computer Science",
                description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."         },
        {
            name: "IBeTo 2019",
            imgsrc: event1,
            venue: "Model Engg College",
            date : "Nov 8",
            time : "10:30 AM",
            format: "Format of Ibeto",
            rules: "Rules for Ibeto",
            contact: "Contact for Ibeto",
            category: "Non-Tech",
            description:"Gingerbread jelly tart chocolate bar soufflé jujubes. Donut liquorice sweet roll. Pie bear claw chocolate powder lemon drops ice cream soufflé jujubes gingerbread. Tart sweet roll brownie pie gummi bears caramels soufflé. Cupcake cheesecake croissant biscuit oat cake topping ice cream cookie. Tart topping tootsie roll macaroon sesame snaps jelly jelly-o. Chocolate jelly sesame snaps lemon drops cotton candy croissant jelly. Cupcake ice cream sweet lollipop. Lemon drops pie bonbon apple pie toffee chocolate croissant. Tootsie roll cheesecake carrot cake jelly. Lemon drops chocolate sesame snaps dessert brownie icing marzipan pudding. Topping macaroon cupcake gummies jelly ice cream tart danish cotton candy. Sugar plum sweet cake. Croissant jelly beans tart marzipan chupa chups biscuit dessert ice cream ice cream."        }

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
          <a style={{zIndex:3}} className={styles["title"]}>Excel 2019 Competitions!</a>
        </div>
        <div id={styles["comp-grid"]}>{grid}</div>
      </div>
    );
  }
}
