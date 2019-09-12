import React from 'react'
import asyncComponent from './utils/asyncComponent'
import {Switch, Route} from 'react-router-dom'
import Particles from 'react-particles-js';
import './App.css'


const ScheduleImport = () => import('./pages/schedule')
const Schedule = asyncComponent(ScheduleImport)

const ContactsPageImport = () => import('pages/contacts')
const ContactsPage = asyncComponent(ContactsPageImport)

const HomeImport = () => import('pages/home')
const Home = asyncComponent(HomeImport)

const NavImport = () => import('./components/navbar')
const Nav = asyncComponent(NavImport)

const TestPageImport = () => import('pages/sample-component')
const TestPage = asyncComponent(TestPageImport)

const EventsImport = () => import('pages/events')
const Events = asyncComponent(EventsImport)

const WorkshopsImport = () => import('pages/workshops')
const Workshops = asyncComponent(WorkshopsImport)

const TalksImport = () => import('pages/talks')
const Talks = asyncComponent(TalksImport)

export default class App extends React.Component {
    render() {
        return(
            <div className="pageContainer">
                <Nav />
                <Switch>
                    <Route path="/contacts" component={ContactsPage} />
                    <Route path="/home" component={Home} />
                    <Route path="/test" component={TestPage} />
                    <Route path="/schedule" component={Schedule} />
                    <Route path="/events" component={Events} />
                    <Route path="/workshops" component={Workshops} />
                    <Route path="/talks" component={Talks} />
                    <Route exact path="/" component={Home} />
                </Switch>
                <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
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
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
            </div>
        )
    }
}   
