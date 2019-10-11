import React from 'react'
import $ from 'jquery'
import Particles from 'react-particles-js'
import asyncComponent from '../../utils/asyncComponent';
import styles from './style.module.css'
import './temp.css'
import ibetoLogo from '../../img/ibetologo.png'
import excellogo from './excel_logo.png'
import meclogo from './mec_logo.png'
import mecvector from './mec.png'
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

  <div id="all">

    <div id="t1" className="caption">"An engineer opens a door to a new world . . ."</div>
    <div id="t2" className="caption">". . . scale new heights to beyond . . ."</div>
    <div id="t3" className="caption">". . . and unravel the strange"</div>
    <div id="t4" className="caption">"A single breakthrough can inspire us. . ."</div>
    <div id="t5" className="caption">". . . to innovate solutions . . ."</div>
    <div id="t6" className="caption">". . . to engineer a better today"</div>   

    <svg id="c1" height="1000" width="1000">     
      <circle id="array" cx="500" cy="500" r="400" stroke="rgba(255,255,255,0.4)" stroke-width="40" fill="none" stroke-dasharray="4 40" />
      <circle id="scroll_svg" cx="500" cy="500" r="490" stroke="orange" stroke-width="10" fill="none" stroke-dasharray="3100"/>
    </svg>
    
    <div id="scroll_circle">
      <div id="scroll"></div> 
    </div>

    <div id="code">
      <div id="rest1" className="code_text"> from MEC </div> 
      <div id="helloworld" className="code_text">import Excel </div>  
    </div>

    <div id="timer">
          
    </div>

    <div id="maze">
      <svg id="c2" height="650" width="650">    
        <circle cx="325" cy="325" r="10" stroke="#ace8d4" stroke-width="10" fill="none" stroke-dasharray="800"/> 
        <circle cx="325" cy="325" r="50" stroke="#ace8d4" stroke-width="10" fill="none" stroke-dasharray="100"/>
        <circle cx="325" cy="325" r="100" stroke="#ace8d4" stroke-width="10" fill="none" stroke-dasharray="500"/>
        <circle cx="325" cy="325" r="150" stroke="#ace8d4" stroke-width="10" fill="none" stroke-dasharray="325"/>
        <circle cx="325" cy="325" r="200" stroke="#ace8d4" stroke-width="10" fill="none" stroke-dasharray="600"/>
        <circle cx="325" cy="325" r="250" stroke="#ace8d4" stroke-width="10" fill="none" stroke-dasharray="1500"/>
        <circle cx="325" cy="325" r="300" stroke="#ace8d4" stroke-width="10" fill="none" stroke-dasharray="800" />
      </svg>
    </div>


    <div id="race">
      <div id="p1" className="pilot"></div>
      <div id="p2" className="pilot"></div>
      <div id="p3" className="pilot"></div>
      <div id="r1" className="ray"></div> 
      <div id="r2" className="ray"></div>
      <div id="r3" className="ray"></div>
    </div>

    <div id="construction">

      <div id="jump"></div>
      <div id="jump_glow"></div>
      <div id="color"></div>  

      <svg id="logo" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="600" height="600" viewBox="0 0 600 600" stroke-dasharray="2300">
        <path fill="none" stroke="white" stroke-width="7px" fill-rule="evenodd" d="M467.301,132.188 C468.625,132.188 469.949,132.188 471.273,132.188 C483.936,151.334 495.100,157.478 501.059,185.733 C502.145,190.883 500.030,198.518 499.073,202.590 C497.057,211.167 497.610,217.536 495.102,225.396 C491.252,237.458 482.869,255.529 487.159,273.983 C495.186,308.517 531.091,356.497 512.974,400.905 C508.382,412.160 501.034,419.817 493.116,427.677 C486.309,434.435 476.570,443.763 465.315,445.526 C464.762,443.936 464.521,443.142 464.323,440.568 C479.793,421.530 486.103,334.271 441.486,346.368 C435.678,347.943 427.739,351.140 422.622,354.301 C387.620,375.920 364.497,413.131 340.213,445.526 C333.490,454.495 323.099,461.426 316.384,470.315 C288.476,507.260 248.613,533.952 208.160,558.565 C182.049,574.452 124.595,598.648 79.086,590.296 C77.608,585.975 78.018,578.326 78.093,572.447 C81.638,567.064 80.930,558.099 83.057,551.624 C86.477,541.219 91.350,529.092 96.958,519.894 C115.238,489.908 142.635,463.956 172.416,445.526 C198.980,429.086 232.542,424.578 263.761,411.812 C317.993,389.637 359.793,362.472 373.971,299.764 C373.971,294.807 373.971,289.848 373.971,284.891 C373.951,252.338 359.936,233.371 341.206,219.447 C325.231,207.571 308.121,195.261 288.583,186.725 C240.962,165.919 187.333,151.876 158.516,112.357 C144.802,93.550 132.271,70.887 131.708,38.980 C131.552,30.103 128.019,14.950 132.701,8.241 C135.493,6.403 143.114,7.123 147.595,7.250 C154.875,9.233 162.157,11.216 169.438,13.199 C181.682,18.818 193.930,24.438 206.174,30.056 C240.781,51.094 271.912,74.699 303.476,98.475 C309.433,104.754 315.391,111.035 321.348,117.315 C339.259,135.207 357.647,154.550 377.942,169.868 C391.716,180.264 400.440,195.234 419.643,200.607 C427.540,202.816 435.757,200.803 441.486,198.624 C466.887,188.964 467.831,164.997 467.301,132.188 Z"/>
      </svg>   
    </div>

  </div>

<div id="space_after"></div>


<div id="h3" className="title">Our Sponsors <br /><span style={{color:"grey",fontSize:"3vh"}}>MEC Excel 2019 Sponsors</span></div>


<div className="grid">
  <div id="sp1" className="sponsor">
    <div className="t1">sponsor</div>
  </div>
  <div id="sp2" className="sponsor">
      <div className="t1">sponsor</div>
  </div>
  <div id="sp3" className="sponsor">
      <div className="t1">sponsor</div>
  </div>
  <div id="sp4" className="sponsor">
      <div className="t1">sponsor</div>
  </div>
</div>

<div id="h4" class="title">Legacy</div>
<div className="legacy-grid">
  <div> 
    <img src={mecvector}/>
  </div>
  <div>
  Reference site about Lorem Ipsum, giving information on its origins, Lorem Ipsum: usage Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.
   Lorem Ipsum: usage Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.
   Lorem Ipsum: usage Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.
   as well as a random Lipsum generator.</div>
</div>


<div className="logo-grid">
  <div> 
    <img src={meclogo}/>
  </div>
  <div>
    <img src={excellogo}/>
  </div>
</div>

</div>


        );
    }
}