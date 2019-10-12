import React from "react";
import asyncComponent from "../../utils/asyncComponent";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import styles from "./style.module.css";
//testing
// import event1 from "../../img/space-robot.png";
// import event2 from "../../img/spaceship.png";
// import event3 from "../../img/moon-rover.png"
// import event4 from "../../img/cloud-computing.png"
import axios from "axios";
import { Link, Route } from "react-router-dom";
import CompetitionCard from "../../components/competition-card";


const CompetitionEntryImport = () => import("components/competition-entry");
const CompetitionEntry = asyncComponent(CompetitionEntryImport);

const StyledSelect = withStyles({
  root: {
    color: 'white',
    borderBottom: 'solid 2px white',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '1.1rem',
    fontWeight: '900',
    ['@media (max-width:415px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '0.9rem',
      fontWeight: '800',
    }
  },
  icon: {
    color: 'white'
  },
})(Select);


export default class Competitions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      filterDepts : ['All Departments', 'Computer Science', 'Robotics', 'Gen-Tech', 'Non-Tech'],
      filterTypes : ['Online/Offline', 'Online', 'Offline'],
      currentDept: 'All Departments',
      currentType: 'Online/Offline',
      scrollPos: window.scrollY,
      loading: true
    };
  }

  async componentWillMount() {
    console.log('working')
      let response = await axios.get('https://api.excelmec.org/api/competitions', 
      {
        headers:{
          "Origin" : "https://api.excelmec.org/"
        }
      }
      )
      this.setState({events: response.data, loading: false})
  }

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

  formatWord = (input) => {
    let words = input.split('-')

    words.forEach((val, i) => {
        words[i] = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
    })
    return words.join(' ')
  }

  handleChange = (e, filterType) => {
    if(filterType === "department") {
      this.setState({
        currentDept: e.target.value
      })
    }
    else {
      this.setState({
        currentType: e.target.value
      })
    } 
  }

  render() {
    var grid = [];
    var events = this.state.events;
    for (var i in events) {
      if(this.state.currentDept === "All Departments" && this.state.currentType === "Online/Offline") {
        var gridItem = (
          <a 
            target="_blank"
            key={i}
            className={styles["events"]}
            // href={events[i].link}
          >
            <Link to={`/competitions/${events[i].codename}`} style={{textDecoration:'none'}} ><CompetitionEntry details={events[i]} /></Link>
          </a>
        );
        grid.push(gridItem);
      }
      else if(this.state.currentDept === "All Departments" && this.state.currentType !== "Online/Offline") {
        if(events[i].type === this.state.currentType) {
          var gridItem = (
          <a 
            target="_blank"
            key={i}
            className={styles["events"]}
            // href={events[i].link}
          >
            <Link to={`/competitions/${events[i].codename}`} style={{textDecoration:'none'}} ><CompetitionEntry details={events[i]} /></Link>
          </a>
          );
          grid.push(gridItem);
        }
      }
      else if(this.state.currentDept !== "All Departments" && this.state.currentType === "Online/Offline") {
        if(events[i].category === this.state.currentDept) {
          var gridItem = (
            <a 
            target="_blank"
            key={i}
            className={styles["events"]}
            // href={events[i].link}
          >
            <Link to={`/competitions/${events[i].codename}`} style={{textDecoration:'none'}}><CompetitionEntry details={events[i]} /></Link>
          </a>
          );
          grid.push(gridItem);
        }
      }
      else {
        if(events[i].category === this.state.currentDept && events[i].type === this.state.currentType) {
          var gridItem = (
            <a 
            target="_blank"
            key={i}
            className={styles["events"]}
            // href={events[i].link}
            >
            <Link to={`/competitions/${events[i].codename}`} style={{textDecoration:'none'}}><CompetitionEntry details={events[i]} /></Link>
          </a>
          );
          grid.push(gridItem);
        }
      }
    }

    return (
      <div>
       <div className={styles["header"]}>
                    <div className={styles["title"]}>Competitions</div><div className={styles["subtitle"]}>Excel 2019</div>
                </div>
                <div className={styles["underline"]}></div>
        <div className={styles["comp-filter-dept"]}>
          <FormControl>
            <StyledSelect
              value={this.state.currentDept}
              onChange={e => this.handleChange(e, 'department')}
            >
              {
                this.state.filterDepts.map(val => {
                  return <MenuItem value={val}>{val}</MenuItem>
                })
              }
              </StyledSelect>
          </FormControl>
        </div>
        <div className={styles["comp-filter-type"]}>
          <FormControl>
              <StyledSelect
                value={this.state.currentType}
                onChange={e => this.handleChange(e, 'type')}
              >
                {
                  this.state.filterTypes.map(val => {
                    return <MenuItem value={val}>{val}</MenuItem>
                  })
                }
                </StyledSelect>
            </FormControl>
        </div>
        {this.state.loading && 
          <div id={styles["comp-grid"]}>
          <img className={styles["loader"]} src={require('../../img/loader.gif')} alt=""/>
          </div>
        }
        {
          !this.state.loading &&
        <div id={styles["comp-grid"]}>{grid}</div>}

        <Route path='/competitions/:competition' component={CompetitionCard}/>
        </div>
    );
  }
}
