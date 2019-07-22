import React from 'react'
import asyncComponent from '../../utils/asyncComponent'

// import css in this format only
import styles from './style.module.css'

//always lazy load components. never import directly
const TestComponentImport = () => import('components/test-component')
const TestComponent = asyncComponent(TestComponentImport)

export default class TestPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles["test-container"]}>
                <h1 className={styles["color-white"]}>This Component is a dummy component</h1>
                <p className={styles["color-white"]}>Use this format for writing any components</p>
                <TestComponent />
            </div>
        )
    }
}