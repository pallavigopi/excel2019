import React from 'react'
import asyncComponent from './utils/asyncComponent'
import {Switch, Route} from 'react-router-dom'
import './App.css'

const HomeImport = () => import('pages/home')
const Home = asyncComponent(HomeImport)

export default class App extends React.Component {
    render() {
        return(
            <div className="pageContainer">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        )
    }
}
