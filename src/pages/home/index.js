import React from 'react'
import Particles from 'react-particles-js'
import asyncComponent from '../../utils/asyncComponent';
import styles from './style.module.css'
import ibetoLogo from '../../img/ibetologo.png'
import hackfortomorrow from '../../img/hftlogo.png'

const EventCardImport = () => import('components/event-card')
const ComingSoonImport = () => import('components/coming-soon')
const HeaderImport = () => import('components/header')
const ExcelAboutImport = () => import('components/excel-about')

const EventCard = asyncComponent(EventCardImport)
const ComingSoon = asyncComponent(ComingSoonImport)
const Header = asyncComponent(HeaderImport)
const ExcelAbout = asyncComponent(ExcelAboutImport)

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
        console.log(styles["home"])
        var grid = []
        var events = this.state.events
        for (var i in events) {
            var gridItem = (<a target="_blank" key={i} className={styles["events"]} href={events[i].link} ><EventCard details={events[i]} /></a>)
            grid.push(gridItem)
        }
        return (
            <div className={styles["home"]}>
                <div id="particles-js"></div>
                <script src="particles.js"></script>
                <Particles style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: 10
                }}
                    params={{
                        particles: {
                            size: {
                                value: 4
                            },
                            number: {
                                value: 100,
                                density: {
                                    enable: 'true',
                                    value_area: 800
                                }
                            },
                            line_linked: {
                                width: 1,
                                distance: 130
                            },
                            move: {
                                speed: 10
                            }
                        },
                    }
                    }
                />
                <Header />
                <ExcelAbout />
                <ComingSoon />
                <div id={styles["event-grid"]}>
                    {grid}
                </div>
            </div>
        );
    }
}