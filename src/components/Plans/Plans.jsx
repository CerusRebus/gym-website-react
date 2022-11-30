import React, {useRef} from 'react'
import {plansData} from "../../data/plansData"
import whiteTick from '../../assets/whiteTick.png'

import styles from './Plans.module.css'

const Plans = () => {
    const usePlans = useRef(null)

    const handleChangeClass = (e) => {
        const {current: {children: plan}} = usePlans
        Array.from(plan).map(plan => plan.classList.remove(styles.active))
        e.currentTarget.classList.add(styles.active)
    }

    return (
        <div className={styles['plans-container']} id="plans">
            <div className={`blur ${styles['plans-blur-1']}`}></div>
            <div className={`blur ${styles['plans-blur-2']}`}></div>
            <div className="programs-header">
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITH US</span>
            </div>

            {/* plans card */}

            <div className={styles.plans} ref={usePlans}>
                {plansData.map((plan, index) => (
                    <div className={index === 1 ? styles.plan + ` ${styles.active}` : styles.plan} key={index} onClick={(e) => handleChangeClass(e)}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>
                        <div className={styles.features}>
                            {plan.features.map((feature, index) => (
                                <div className={styles.feature} key={index}>
                                    <img src={whiteTick} alt="white tick"/>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans