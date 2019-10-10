import React from 'react'
import Particles from 'react-particles-js';
import { inherits } from 'util';

export default class Background extends React.Component {
    render() {
        return(
            <Particles className="particles" style={{
                position: 'fixed',
                left: 0,
                top: 0,
                width: 10,
                zIndex: 1
            }}
    params={{
	    "particles": {
	        "number": {
	            "value": 200,
	            "speed":7,
	            "density": {
	                "enable": false
	            }

	        },
	        "size": {
	            "value": 5,
	            "random": true,
	            "anim": {
	                "speed": 2	,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 2,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 0,
	                "duration": 1,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 200,
	                "duration": 1
	            }
	        }
	    }
	}} />
        )
    }
}   