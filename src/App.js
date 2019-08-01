import React from 'react'
import asyncComponent from './utils/asyncComponent'
import {Switch, Route} from 'react-router-dom'
import './App.css'

const ScheduleImport = () => import('./pages/schedule')
const Schedule = asyncComponent(ScheduleImport)

const HomeImport = () => import('pages/home')
const Home = asyncComponent(HomeImport)


const TestPageImport = () => import('pages/sample-component')
const TestPage = asyncComponent(TestPageImport)

export default class App extends React.Component {
    render() {
        return(
            <div className="pageContainer">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/test" component={TestPage} />
                    <Route path="/schedule" component={Schedule} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}   
