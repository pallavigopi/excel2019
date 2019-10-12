import React from 'react'
import Particles from 'react-particles-js';
// import { inherits } from 'util';

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
	            "value": 175,
	            "speed":7,
	            "density": {
	                "enable": false
	            }

			},
			"opacity": {
				"value": 0.3
			},
			"shape": {
				"type": "polygon",
				"polygon": {
					"nb_sides": 3
				}
			},
	        "size": {
	            "value": 3,
	            "random": false,
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
	                "enable": false,
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