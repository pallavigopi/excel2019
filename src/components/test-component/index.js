import React from 'react'

import styles from './style.module.css'

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <h3 className={styles["test-class"]}>Test Component Loaded</h3>
    }
}

/*
if your component does not have any state 
    prefer using this format for making components
*/

const TestComponent2 = props => {
    return <div> Stateless Component</div>
}