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

    componentDidMount() {
        document.addEventListener('mousemove', (e) => {
            var x = (window.innerWidth/2 - e.pageX)/30
            var y = (window.innerHeight/2 - e.pageY)/30

            document.getElementsByClassName('card')[0].style.transform = "rotateY("+(-x)+"deg) rotateX("+y+"deg)"
        })
    }

    render() {

        return (

          <div class="card">

<svg id ="c1ff" class="circle"  height="1000" width="1000">
  <circle cx="500" cy="500" r="50" stroke="rgba(250,250,250,0.4)" fill="none" strokeWidth="3" strokeWidth="7" />
</svg>
<svg id ="c1fb" class="circle" height="1000" width="1000">
  <circle cx="500" cy="500" r="100" stroke="rgba(250,250,250,0.5)" fill="none" strokeWidth="5" />
</svg>

<svg id ="c1ffl" class="circle" height="1000" width="1000">
  <circle cx="500" cy="500" r="250" stroke="rgba(250,250,250,0.1)" fill="none" strokeWidth="20" strokeDasharray="3" />
</svg>
<svg id ="c1fbl" class="circle" height="1000" width="1000">
  <circle cx="500" cy="500" r="300" stroke="rgba(250,250,250,0.1)" fill="none" strokeWidth="20" strokeDasharray="3" />
</svg>

<svg id ="c1" class="circle" height="1000" width="1000">
  <circle cx="500" cy="500" r="250" stroke="rgba(250,250,250,0.4)" fill="none"  strokeWidth="3"/>
</svg>

<svg id ="c2o" class="circle" height="1000" width="1000">
  <circle cx="500" cy="500" r="500" stroke="rgba(250,250,250,1)" fill="none" strokeWidth="3" strokeDasharray="2,40" stroke-linecap="round" />
</svg>
<svg id ="c2" class="circle" height="1000" width="1000">
  <circle cx="500" cy="500" r="450" stroke="rgba(250,250,250,1)" fill="none" strokeWidth="30" strokeDasharray="1,20"  />
</svg>

<svg id ="c3" class="circle" height="1000" width="1000">
  <circle cx="500" cy="500" r="200" stroke="rgba(250,250,250,0.1)" fill="none" strokeWidth="20" strokeDasharray="400,30" />
</svg>

<img id = "logo" src={require("../../img/e.svg")}/>

</div>


        );
    }
}