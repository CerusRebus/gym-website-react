import React from 'react'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

import styles from './Reasons.module.css'

const Reasons = () => {
    return (
        <div className={styles.reasons} id="reasons">
            <section className={styles['left-r']}>
                <img src={image1} alt="image1"/>
                <img src={image2} alt="image2"/>
                <img src={image3} alt="image3"/>
                <img src={image4} alt="image4"/>
            </section>
            <section className={styles['right-r']}>
                <span>some reasons</span>
                <div>
                    <span className="stroke-text">why</span>
                    <span> choose us?</span>
                </div>
                <div className={styles['details-r']}>
                    <div>
                        <img src={tick} alt="tick"/>
                        <span>OVER 140+ EXPERT COACHS</span>
                    </div>
                    <div>
                        <img src={tick} alt="tick"/>
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div>
                        <img src={tick} alt="tick"/>
                        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                    <div>
                        <img src={tick} alt="tick"/>
                        <span>RELIABLE PARTNERS</span>
                    </div>
                </div>
                <span>OUR PARTNERS</span>
                <div className={styles.partners}>
                    <img src={nb} alt="nb"/>
                    <img src={adidas} alt="adidas"/>
                    <img src={nike} alt="nike"/>
                </div>
            </section>
        </div>
    )
}

export default Reasons