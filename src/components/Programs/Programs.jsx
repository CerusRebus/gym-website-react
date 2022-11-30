import React from 'react'
import {programsData} from "../../data/programsData"

import RightArrow from '../../assets/rightArrow.png'

import styles from './Programs.module.css'

const Programs = () => {
    return (
        <div className={styles.programs} id="programs">
            {/* header */}
            <div className="programs-header">
                <span className="stroke-text">Explore our</span>
                <span>Programs</span>
                <span className="stroke-text">to shape you</span>
            </div>
            <div className={styles['programs-categories']}>
                {programsData.map((program, index) => (
                    <section key={index} className={styles.category}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className={styles['join-now']}>
                            <span>Join Now</span>
                            <img src={RightArrow} alt="right-arrow"/>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    )
}

export default Programs