import React from 'react'
import axios from 'axios'
import SkyLight from 'react-skylight'
import styles from './style.module.css'
import AboutMiniGrid from "../about-mini-grid";


export default class CompetitionCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          competitionData : {
            about: '',
            format: '',
            rules: '',
            contact: ''
          },  
          currentSubSection: "About",
          content: '',
        }
        //this.handleExtraSectionContent= this.handleExtraSectionContent.bind(this);
      }
    
      handleAbout = () => {
        this.setState({
          currentSubSection: "About",
          content: this.state.competitionData.about
        });
      }
    
      handleFormat = () => {
        this.setState({
          currentSubSection: "Format",
          content: this.state.competitionData.format
        });
      }
    
      handleRules = () => {
        this.setState({
          currentSubSection: "Rules",
          content: this.state.competitionData.rules
        });
      }
    
      handleContact = () => {
        this.setState({
          currentSubSection: "Contact",
          content: this.state.competitionData.contact
        });
      }

      async componentWillMount() {
        var comp = this
        let response = await axios.get('https://api.excelmec.org/api/competitions')
        console.log('RESPONSE',response.data)
        response.data.forEach(async (val) => {
            if(val.codename === comp.props.match.params['competition']) {
                // let data = await axios.get(`http://34.93.246.77/api/competitions/${val.id}`);
                await comp.setState({
                    competitionData: val,
                    content: val.about
                })
            }
        })
      }

      componentDidMount() {
        setTimeout(() => {
            this.simpleDialog.show()
        }, 50)
      }

      handleClose() {
        setTimeout( () => {
            window.history.back();
        }, 450)
      }

      componentWillUnmount() {
          this.props.history.push('/competitions')
      }
    
      handleExtraSectionContent = (name) =>{
        if(name==="About")
        return (
          <AboutMiniGrid details={this.state.competitionData} />
        );
        if(name==="Contact")
        return(
          <h1> Contact </h1>
        );
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
            height: "calc(100vh - 4rem)",
            overflowY: "scroll"
        
          };
      
          var closeButtonStyle = {
            cursor: 'pointer',
            position: 'absolute',
            fontSize: '3em',
            marginRight: '2rem',
            marginTop: '1.25rem'
        };

        return(
        <SkyLight 
          hideOnOverlayClicked
          ref={ref => (this.simpleDialog = ref)}
          dialogStyles={dialogStyles}
          afterClose={this.handleClose}
          closeButtonStyle={closeButtonStyle}
          transitionDuration={450}
        >
          <div  className={styles["modal-container"]}>
            <div className={styles["modal-image"]}>
              <img
                className={styles["modal-image-logo"]}
                src={this.state.competitionData.img}
                alt="logo"
              />
            </div>
            <div className={styles["modal-title"]}>
              {this.state.competitionData.name}
            </div>
            <div className={styles["modal-prize-pool"]}>
            Prize Pool - {this.state.competitionData.prize}
            </div>
            <div className={styles["modal-event-body"]}>
              <ul className={styles["popup-navbar"]}>
                <li><a className={styles[this.state.currentSubSection === "About" ? "li-active" : ""]} onClick={this.handleAbout} id="About">About</a></li>
                <li><a className={styles[this.state.currentSubSection === "Format" ? "li-active" : ""]} onClick={this.handleFormat} id="Format">Format</a></li>
                <li><a className={styles[this.state.currentSubSection === "Rules" ? "li-active" : ""]} onClick={this.handleRules} id="Rules">Rules</a></li>
                <li><a className={styles[this.state.currentSubSection === "Contact" ? "li-active" : ""]} onClick={this.handleContact} id="Contacts">Contact</a></li>
              </ul>
              <div className={styles["modal-subsection-container"]}>
                {/* {this.state.content} */}
                <span dangerouslySetInnerHTML={{__html: this.state.content}}>
                  
                </span>
                {this.handleExtraSectionContent(this.state.currentSubSection)}
              </div>
            </div>
          </div>
        </SkyLight>
        )
    }
}