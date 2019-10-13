import React from 'react'
import styles from './style.module.css'

export default class Loader extends React.Component {


    render() {
        return(
            <div className={styles["container-svg"]}>
                <div className={styles["vertical-align"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3826.8 5103.09">
                        <defs>
                            <pattern id="img1" patternUnits="userSpaceOnUse" width="15000" height="15000">
                            <image className={styles["abstractAnimation"]} xlinkHref={require("../../img/preloader.svg")}  width="25000" height="25000" />
                            </pattern>
                        </defs>
                            <path d="M437.62,8.73,451.4,1.07s317.11-46,1031,464.17c0,0,205.88,140,457.36,351.27,0,0,187.82,182.94,238.35,231.45s510.4,497.26,532.63,496.25c0,0,181,193,375,157.67,0,0,417.87,25.45,312.26-587.5,0,0,6.65-15,34.48,13.33,0,0,195.68,169.21,238.42,424.89,0,0,2.14,180.91-73.36,433,0,0-71.94,163.1-29.91,371.07,0,0,34.19,143.16,103.27,277.77s134.61,383.89,134.61,383.89,42.73,205.83,7.12,340.45-136,321.92-402.41,451.55c0,0-49.85,24.93-31.34-31.34,0,0,180.91-298,164.53-562s-158.83-322.61-158.83-322.61-148.85-118.23-469.36,166.66c0,0-182.33,133.92-473.58,534.26,0,0-317.38,442.31-739.17,803.84,0,0-504.51,471.83-1099.92,636.25,0,0-260.42,87.83-602.55,63.32,0,0,28-715.45,650.21-1156.47,0,0,191.56-176.7,579.12-292.52,0,0,803.33-161.63,1186.44-671.18s169.28-905.79,169.28-905.79-86.13-344.5-870.16-650.39c0,0-927.79-337.08-1103.15-700.88,0,0-121.9-213.83-148.63-363.8S437.62,8.73,437.62,8.73Z" fill="url(#img1)"/>
                            <circle cx="3057.46" cy="1344.04" r="250.59" fill="url(#img1)"/>
                    </svg>
                </div>    
            </div>
        )
    }
}