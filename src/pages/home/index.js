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

        }  
    }

    render() {

        return (
            <div>
            </div>
        );
    }
}