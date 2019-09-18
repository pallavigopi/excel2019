import React from 'react'
import Particles from 'react-particles-js'
import asyncComponent from '../../utils/asyncComponent';
import styles from './style.module.css'
import './temp.css'
import ibetoLogo from '../../img/ibetologo.png'
import hackfortomorrow from '../../img/hftlogo.png'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [
                {
                    name: "IBeTo 2019",
                    imgsrc: ibetoLogo,
                    link: "http://ibeto.excelmec.org/",
                    description: "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions."
                },
                {
                    name: "HackForTomorrow 2019",
                    imgsrc: hackfortomorrow,
                    link: "https://hackfortomorrow.excelmec.org/",
                    description: "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!"
                }
            ]
        }
    }

    render() {

        return (
          <div>
            <div id="h1">Excel 2019<br /><span style={{color:"grey",fontSize:"3vh"}}>Inspire Innovate Engineer</span></div> 


<div className="card">

<svg id="c1" className="circle" version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
  <circle cx="250" cy="250" r="50" stroke="rgba(250,250,250,1)" fill="none" strokeWidth="3" strokeWidth="7" />
</svg>
<svg id ="c2" className="circle" version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
  <circle cx="250" cy="250" r="100" stroke="rgba(250,250,250,0.5)" fill="none" strokeWidth="5" />
</svg>

<svg id ="c3" className="circle" version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
  <circle cx="250" cy="250" r="140" stroke="rgba(250,250,250,0.3)" fill="none" strokeWidth="15" strokeDasharray="5" />
</svg>
<svg id ="c4" className="circle" version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
  <circle cx="250" cy="250" r="170" stroke="rgba(250,250,250,0.7)" fill="none" strokeWidth="10" strokeDasharray="5" />
</svg>
<svg id ="c5" className="circle" version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
  <circle cx="250" cy="250" r="200" stroke="rgba(250,250,250,1)" fill="none" strokeWidth="5" />
</svg>
<svg id ="c6" className="circle" version="1.1" viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
  <circle cx="250" cy="250" r="220" stroke="rgba(250,250,250,1)" fill="none" strokeWidth="3" strokeDasharray="2,30" />
</svg>

<img id="logo" src={require('../../img/e.svg')} />

</div>

<div id="h1">Our Sponsors<br /><span style={{color:"grey",fontSize:"3vh"}}>MEC Excel 2019 Sponsors</span></div>


<div id="grid">
  <div id="sp1" className="sponsor">
    <div className="t1">spnsor1</div>
  </div>
  <div id="sp2" className="sponsor">
      <div className="t1">spnsor1</div>
  </div>
  <div id="sp3" className="sponsor">
      <div className="t1">spnsor1</div>
  </div>
  <div id="sp4" className="sponsor">
      <div className="t1">spnsor1</div>
  </div>
</div>

</div>


        );
    }
}