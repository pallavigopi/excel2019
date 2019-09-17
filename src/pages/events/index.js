import React from 'react'
import asyncComponent from '../../utils/asyncComponent'

import styles from './style.module.css'
//testing
import ibetoLogo from '../../img/ibetologo.png'
import hackfortomorrow from '../../img/hftlogo.png'

const EventEntryImport = () => import('components/event-entry')
const EventEntry = asyncComponent(EventEntryImport)

// var colors = ["#000000", "#0065F9", "#6D589D", "#3B4257", "#e84a5f", "#07689f", "590d82"];

export default class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [
                {
                    name: "IBeTo 2019",
                    codename:"1",
                    imgsrc: ibetoLogo,
                    description: "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions.",
                    info:"<b>\"To stay ahead, you must have ideas imbued in the wings!\"</b><br/><p>In the drive to 'Bridge the Realms', the 19th edition of EXCEL presents MECLABS,  a project-making event exclusively for MECians. From 'Fancy Lights' to 'Faraday's Guitar', it's fun to meddle with technology as you fine-tune your skills! Unlike never before, this year, the event has been revamped, and is now open for both 2nd and 3rd-year students!! Get ready to 'whet your wits' as you form your dream team of innovators, and unleash the creativity in you.</p><p>Engineering isn’t exclusively limited to listening to lectures and jotting down notes. Get ready to dirty your hands and build projects with assistance from knowledgeable mentors. Effectuate your ideas into reality and get the platform to exhibit your project.</p><p><b>Date : </b>4th Nov<br /><b>Venue : </b>301, 314, 315, Circuits Lab</p> <br><br> <b>Event Coordinators</b> <p>Varun Narayanan - +91 8089625814</p> <p>Mathew Thomas - +91 9645902751</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "HackForTomorrow 2019",
                    codename:"2",
                    imgsrc: hackfortomorrow,
                    description: "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!",
                    info:"<p><i>Abiding by the principles of Coulter, we have decided to make the first day of Excel count.</i></p>  <p>Beckman Coulter, one of the leading biomedical industries, presents before you, one of the most awaited talk sessions of the year. Listen to Mr Sarith P Antony, Senior team leader at Beckman Coulter speak exclusively only at Excel 2018. </p> <p>Grab this amazing opportunity to know more about the research opportunities and innovations emerging in the biomedical industry.</p> <b>Delegates:</b> <p>Mr. Mahadeven Krishna Iyer, <i>Regional Service Manager - South India</i></p> <p>Mr. Annup Babu<i>, Sales Manager - Kerala</i></p> <p>Mr. Sarith P Antony<i>, Senior Team Leader - Service, Kerala</i></p><br> <b>Event Coordinators</b> <p>Pavithra Kumar B - +91 9526068336</p> <p>Catherine vargheese - +91 9847092549</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "IBeTo 2019",
                    codename:"3",
                    imgsrc: ibetoLogo,
                    description: "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions.",
                    info:"<i>The impact of biomedical engineering is so vast that even life support systems for scientists going to Mars are built by those in this revolutionary field!</i>  <p>As a part of EXCEL 2k18, we present before you, the most distinctive and spellbinding event to celebrate biomedical engineering,  <b>PULSE 18.</b><br> Come over to explore the engineering of life.</p>  <p>An opportunity like no other for budding engineers to gain practical knowledge  through numerous project exhibits, and biomedical equipments. Active on the 2nd and 3rd of November, winning the Online Quiz O.W.L, gets you a direct entry to the highlight of the event,<i> the Obscura Maze</i>.<br>The Biomedical Exhibition, Pulse'18 is up and runnit this Nov 2 and 3.</p>  <br> <b>Event Coordinators</b> <p>Karthik Manoj - +91 9544272065</p> <p>Anjali Sunil - +91 8547746060</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "HackForTomorrow 2019",
                    codename:"4",
                    imgsrc: hackfortomorrow,
                    description: "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!",
                    info:"<p>Time and space become meaningless for those who control the flow. Brace yourselves for brilliance unimagined, for your senses could very well deceive you.</p><p>Get ready for some world class acts of mentalism and illusion at Unmasked, featuring Psychological Illusionist Arjun Guru. Arjun Guru is an Illusionist who fuses principles of magic and deception with psychology, to create illusions in your mind. He specializes in blending psychology, mentalism and sleight of hand, and is known to customize every show he takes on to create an unforgettable experience.</p><p>In a span of 2 years, Arjun has performed at various colleges including BITS Goa, IIT Delhi and SPA and various big companies like the Taj Group of hotels.</p><br /><b>Blink, and you miss it. Limited seats.</b><br /><p>Register now at : <a style = \"color: inherit\" href=\"https://www.instamojo.com/excel2018/unmasked-excel-2018/\">https://www.instamojo.com/excel2018/unmasked-excel-2018/</a></p><br /><p><b>Date : </b>3rd November<br /><b>Venue : </b>Amphitheater</p><br /><b>Talks Manager</b><p>Amrin Kareem : +91 8891888969</p><b>Event Coordinator</b><p>Aravind R Krishna : +91 75598 27553</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "IBeTo 2019",
                    codename:"5",
                    imgsrc: ibetoLogo,
                    description: "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions.",
                    info:"<p><i>Abiding by the principles of Coulter, we have decided to make the first day of Excel count.</i></p>  <p>Beckman Coulter, one of the leading biomedical industries, presents before you, one of the most awaited talk sessions of the year. Listen to Mr Sarith P Antony, Senior team leader at Beckman Coulter speak exclusively only at Excel 2018. </p> <p>Grab this amazing opportunity to know more about the research opportunities and innovations emerging in the biomedical industry.</p> <b>Delegates:</b> <p>Mr. Mahadeven Krishna Iyer, <i>Regional Service Manager - South India</i></p> <p>Mr. Annup Babu<i>, Sales Manager - Kerala</i></p> <p>Mr. Sarith P Antony<i>, Senior Team Leader - Service, Kerala</i></p><br> <b>Event Coordinators</b> <p>Pavithra Kumar B - +91 9526068336</p> <p>Catherine vargheese - +91 9847092549</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "HackForTomorrow 2019",
                    codename:"6",
                    imgsrc: hackfortomorrow,
                    description: "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!",
                    info:"<p>Time and space become meaningless for those who control the flow. Brace yourselves for brilliance unimagined, for your senses could very well deceive you.</p><p>Get ready for some world class acts of mentalism and illusion at Unmasked, featuring Psychological Illusionist Arjun Guru. Arjun Guru is an Illusionist who fuses principles of magic and deception with psychology, to create illusions in your mind. He specializes in blending psychology, mentalism and sleight of hand, and is known to customize every show he takes on to create an unforgettable experience.</p><p>In a span of 2 years, Arjun has performed at various colleges including BITS Goa, IIT Delhi and SPA and various big companies like the Taj Group of hotels.</p><br /><b>Blink, and you miss it. Limited seats.</b><br /><p>Register now at : <a style = \"color: inherit\" href=\"https://www.instamojo.com/excel2018/unmasked-excel-2018/\">https://www.instamojo.com/excel2018/unmasked-excel-2018/</a></p><br /><p><b>Date : </b>3rd November<br /><b>Venue : </b>Amphitheater</p><br /><b>Talks Manager</b><p>Amrin Kareem : +91 8891888969</p><b>Event Coordinator</b><p>Aravind R Krishna : +91 75598 27553</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "IBeTo 2019",
                    codename:"7",
                    imgsrc: ibetoLogo,
                    description: "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions.",
                    info:"<i>The impact of biomedical engineering is so vast that even life support systems for scientists going to Mars are built by those in this revolutionary field!</i>  <p>As a part of EXCEL 2k18, we present before you, the most distinctive and spellbinding event to celebrate biomedical engineering,  <b>PULSE 18.</b><br> Come over to explore the engineering of life.</p>  <p>An opportunity like no other for budding engineers to gain practical knowledge  through numerous project exhibits, and biomedical equipments. Active on the 2nd and 3rd of November, winning the Online Quiz O.W.L, gets you a direct entry to the highlight of the event,<i> the Obscura Maze</i>.<br>The Biomedical Exhibition, Pulse'18 is up and runnit this Nov 2 and 3.</p>  <br> <b>Event Coordinators</b> <p>Karthik Manoj - +91 9544272065</p> <p>Anjali Sunil - +91 8547746060</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "HackForTomorrow 2019",
                    codename:"8",
                    imgsrc: hackfortomorrow,
                    description: "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!",
                    info:"<p>Time and space become meaningless for those who control the flow. Brace yourselves for brilliance unimagined, for your senses could very well deceive you.</p><p>Get ready for some world class acts of mentalism and illusion at Unmasked, featuring Psychological Illusionist Arjun Guru. Arjun Guru is an Illusionist who fuses principles of magic and deception with psychology, to create illusions in your mind. He specializes in blending psychology, mentalism and sleight of hand, and is known to customize every show he takes on to create an unforgettable experience.</p><p>In a span of 2 years, Arjun has performed at various colleges including BITS Goa, IIT Delhi and SPA and various big companies like the Taj Group of hotels.</p><br /><b>Blink, and you miss it. Limited seats.</b><br /><p>Register now at : <a style = \"color: inherit\" href=\"https://www.instamojo.com/excel2018/unmasked-excel-2018/\">https://www.instamojo.com/excel2018/unmasked-excel-2018/</a></p><br /><p><b>Date : </b>3rd November<br /><b>Venue : </b>Amphitheater</p><br /><b>Talks Manager</b><p>Amrin Kareem : +91 8891888969</p><b>Event Coordinator</b><p>Aravind R Krishna : +91 75598 27553</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]                   
                },
                {
                    name: "IBeTo 2019",
                    codename:"9",
                    imgsrc: ibetoLogo,
                    description: "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions.",
                    info:"<p>Time and space become meaningless for those who control the flow. Brace yourselves for brilliance unimagined, for your senses could very well deceive you.</p><p>Get ready for some world class acts of mentalism and illusion at Unmasked, featuring Psychological Illusionist Arjun Guru. Arjun Guru is an Illusionist who fuses principles of magic and deception with psychology, to create illusions in your mind. He specializes in blending psychology, mentalism and sleight of hand, and is known to customize every show he takes on to create an unforgettable experience.</p><p>In a span of 2 years, Arjun has performed at various colleges including BITS Goa, IIT Delhi and SPA and various big companies like the Taj Group of hotels.</p><br /><b>Blink, and you miss it. Limited seats.</b><br /><p>Register now at : <a style = \"color: inherit\" href=\"https://www.instamojo.com/excel2018/unmasked-excel-2018/\">https://www.instamojo.com/excel2018/unmasked-excel-2018/</a></p><br /><p><b>Date : </b>3rd November<br /><b>Venue : </b>Amphitheater</p><br /><b>Talks Manager</b><p>Amrin Kareem : +91 8891888969</p><b>Event Coordinator</b><p>Aravind R Krishna : +91 75598 27553</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "HackForTomorrow 2019",
                    codename:"10",
                    imgsrc: hackfortomorrow,
                    description: "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!",
                    info:"<i>The impact of biomedical engineering is so vast that even life support systems for scientists going to Mars are built by those in this revolutionary field!</i>  <p>As a part of EXCEL 2k18, we present before you, the most distinctive and spellbinding event to celebrate biomedical engineering,  <b>PULSE 18.</b><br> Come over to explore the engineering of life.</p>  <p>An opportunity like no other for budding engineers to gain practical knowledge  through numerous project exhibits, and biomedical equipments. Active on the 2nd and 3rd of November, winning the Online Quiz O.W.L, gets you a direct entry to the highlight of the event,<i> the Obscura Maze</i>.<br>The Biomedical Exhibition, Pulse'18 is up and runnit this Nov 2 and 3.</p>  <br> <b>Event Coordinators</b> <p>Karthik Manoj - +91 9544272065</p> <p>Anjali Sunil - +91 8547746060</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "IBeTo 2019",
                    codename:"11",
                    imgsrc: ibetoLogo,
                    description: "Every social problem has a bright solution that needs to be found. IBeTo provides a platform to connect the brightest minds with these problems to create innovative solutions.",
                    info:"<i>The impact of biomedical engineering is so vast that even life support systems for scientists going to Mars are built by those in this revolutionary field!</i>  <p>As a part of EXCEL 2k18, we present before you, the most distinctive and spellbinding event to celebrate biomedical engineering,  <b>PULSE 18.</b><br> Come over to explore the engineering of life.</p>  <p>An opportunity like no other for budding engineers to gain practical knowledge  through numerous project exhibits, and biomedical equipments. Active on the 2nd and 3rd of November, winning the Online Quiz O.W.L, gets you a direct entry to the highlight of the event,<i> the Obscura Maze</i>.<br>The Biomedical Exhibition, Pulse'18 is up and runnit this Nov 2 and 3.</p>  <br> <b>Event Coordinators</b> <p>Karthik Manoj - +91 9544272065</p> <p>Anjali Sunil - +91 8547746060</p>",
                    buttons:[
                        {
                          "name": "Register Here",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                },
                {
                    name: "HackForTomorrow 2019",
                    codename:"12",
                    imgsrc: hackfortomorrow,
                    description: "A 24 hour hackathon which aims at using quick thinking to solve real-world problem statements in a competitive pressure environment. Coming Soon!",
                    info:"<p><i>Abiding by the principles of Coulter, we have decided to make the first day of Excel count.</i></p>  <p>Beckman Coulter, one of the leading biomedical industries, presents before you, one of the most awaited talk sessions of the year. Listen to Mr Sarith P Antony, Senior team leader at Beckman Coulter speak exclusively only at Excel 2018. </p> <p>Grab this amazing opportunity to know more about the research opportunities and innovations emerging in the biomedical industry.</p> <b>Delegates:</b> <p>Mr. Mahadeven Krishna Iyer, <i>Regional Service Manager - South India</i></p> <p>Mr. Annup Babu<i>, Sales Manager - Kerala</i></p> <p>Mr. Sarith P Antony<i>, Senior Team Leader - Service, Kerala</i></p><br> <b>Event Coordinators</b> <p>Pavithra Kumar B - +91 9526068336</p> <p>Catherine vargheese - +91 9847092549</p>",
                    buttons:[
                        {
                          "name": "Website",
                          "link": "https://goo.gl/forms/AMtcyzF8jYFX8Q9w1"
                        }
                      ]
                }

            ],

            scrollPos: window.scrollY
        }
    }

    /*componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        this.setState({
            scrollPos: window.scrollY
        });
        var currentPos = this.state.scrollPos;
        if (currentPos < 200) {
            document.body.style.backgroundColor = colors[0];
        }
        else if (currentPos > 200 && currentPos < 800) {
            document.body.style.backgroundColor = colors[1];
        }
        else if (currentPos > 800 && currentPos < 1200) {
            document.body.style.backgroundColor = colors[2];
        }
        else if (currentPos > 1200 && currentPos < 2000) {
            document.body.style.backgroundColor = colors[3];
        }
        else if (currentPos > 2000 && currentPos < 3000) {
            document.body.style.backgroundColor = colors[4];
        }
        else if (currentPos > 3000 && currentPos < 4000) {
            document.body.style.backgroundColor = colors[5];
        }
        else if (currentPos > 4000 && currentPos < 5000) {
            document.body.style.backgroundColor = colors[6];
        }
    };*/
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render() {
        var grid = []
        var events = this.state.events
        var cardOdd = true;
        for (var i in events) {
            var gridItem = (
                <a target="_blank" key={i} className={styles["events"]} href={events[i].link} ><EventEntry details={events[i]} direction={cardOdd} /></a>
            )
            cardOdd = !cardOdd;
            grid.push(gridItem)
        }

        return (
            <div>
                <div className={styles["header"]}>
                    <a className={styles["title"]}>Events</a><a className={styles["subtitle"]}>Excel 2019</a>
                </div>
                <div className={styles["underline"]}></div>
                <div id={styles["event-grid"]}>
                    {grid}
                </div>
                
            </div>
        )
    }
}