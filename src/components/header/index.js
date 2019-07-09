import React from 'react'
import styles from './style.module.css';

import excelLogo from '../../img/excel.png';
import mecLogo from '../../img/Meclogo.png';
import excel2014 from '../../img/excel2014.png';
import excel2015 from '../../img/excel2015.png';
import excel2016 from '../../img/excel2016.png';
import excel2017 from '../../img/excel2017.png';
import excel2018 from '../../img/excel2018.png';

export default class Header extends React.Component {
    
    render() {
        return(
            <div className={styles["header"]}>
                <div className={styles["header-left"]}>
                    <a href="http://mec.ac.in" target="_blank"><img className={styles["logomec"]} src={mecLogo}/></a>
                    <div className = {styles["mec"]}><a href="http://mec.ac.in" target="_blank">Govt. Model Engineering College, Kochi</a></div>
                </div>
                <div className={styles["header-center"]}>
                    <a href="https://excelmec.org" target="_blank"><img className={styles["logoexcel"]} src={excelLogo}/></a>
                </div>
                <div className={styles["header-right"]}>
                    <a href="https://excelmec.org/excel2014" target="_blank"><img className={styles["logolegacy"]} src={excel2014}/></a>
                    <a href="https://excelmec.org/excel2015" target="_blank"><img className={styles["logolegacy"]} src={excel2015}/></a>
                    <a href="https://excelmec.org/excel2016" target="_blank"><img className={styles["logolegacy"]} src={excel2016}/></a>
                    <a href="https://excelmec.org/excel2017" target="_blank"><img className={styles["logolegacy"]} src={excel2017}/></a>
                    <a href="https://excelmec.org/excel2018" target="_blank"><img className={styles["logolegacy"]} src={excel2018}/></a>
                </div>
            </div>
        );
    }
}