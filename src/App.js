import React from 'react'
import asyncComponent from './utils/asyncComponent'
import {Switch, Route} from 'react-router-dom'
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

const CompetitionsImport = () => import('pages/competitions')
const Competitions = asyncComponent(CompetitionsImport)

const EventsImport = () => import('pages/events')
const Events = asyncComponent(EventsImport)

const WorkshopsImport = () => import('pages/workshops')
const Workshops = asyncComponent(WorkshopsImport)

const TalksImport = () => import('pages/talks')
const Talks = asyncComponent(TalksImport)

const BackgroundImport = () => import('components/background')
const Background = asyncComponent(BackgroundImport)

export default class App extends React.Component {
    render() {
        return(
            <div className="pageContainer">
                <Background />
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
                    <Route path="/competitions" component={Competitions} />
                </Switch>
            </div>
        )
    }
}   
