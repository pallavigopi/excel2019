import React from 'react'
import $ from 'jquery'
import Particles from 'react-particles-js'
import asyncComponent from '../../utils/asyncComponent';
import styles from './style.module.css'
import './temp.css'
import ibetoLogo from '../../img/ibetologo.png'
import excellogo from '../../img/e.svg'
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
          <div id="parent">
            <div id="h1">Excel 2019<br /><span style={{color:"grey",fontSize:"3vh"}}>Inspire Innovate Engineer</span></div> 



<div id="god">
<div className="card">
  <div id="t1" className="text">290,00,0000 participants</div>
  <img id="logo" src={require('../../img/newlogo.png')} />
  <div id="t2" className="text">290 states</div>

  <div id="c2" className="circle"></div>
  <div id="c2a" className="circle"></div>

  <div id="t3" className="text">290,000 partpants</div>

  <div id="c5" className="circle"></div>
  <div id="c6" className="circle"></div>
  <div id="c7" className="circle"></div>
  <div id="c8" className="circle"></div>

  <div id="t4" className="text">180,0000 particats</div>

</div>
</div>
<div id="h2">20th Edition<br /><span style={{color:"grey",fontSize:"3vh"}}>Govt. Model Engineering College</span></div>

<div id="h3">Our Sponsors<br /><span style={{color:"grey",fontSize:"3vh"}}>MEC Excel 2019 Sponsors</span></div>


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