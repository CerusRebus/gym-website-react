import React from 'react'
import {motion} from "framer-motion"
import NumberCounter from "number-counter"

import Header from "../Header/Header"

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

import styles from './Hero.module.css'


const Hero = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth <= 768


    return (
        <div className={styles.hero} id="home">
            <div className={`blur ${styles['hero-blur']}`}></div>
            <div className={styles['left-h']}>
                <Header/>
                {/* the best ad */}
                <div className={styles['the-best-ad']}>
                    <motion.div initial={{left: mobile ? '180px' : '240px'}} whileInView={{left: '8px'}}
                                transition={{...transition, type: 'tween'}}>
                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>
                {/* Hero Heading */}
                <section className={styles['hero-text']}>
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest.</span>
                    </div>
                </section>
                {/* figures */}
                <section className={styles.figures}>
                    <div>
                        <span>
                            <NumberCounter start={100} end={140} delay="4" preFix="+"/>
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={800} end={978} delay="4" preFix="+"/>
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={0} end={50} delay="4" preFix="+"/>
                        </span>
                        <span>fitness programs</span>
                    </div>
                </section>
                {/* hero buttons */}
                <div className={styles['hero-buttons']}>
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className={styles['right-h']}>
                <button className="btn">Join Now</button>
                <motion.div className={styles['heart-rate']} initial={{right: '-4rem'}} whileInView={{right: '4rem'}}
                            transition={transition}>
                    <img src={Heart} alt="heart"/>
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/* hero images */}
                <img src={hero_image} alt="hero_image" className={styles['hero_image']}/>
                <motion.img src={hero_image_back} alt="hero_image_back" className={styles['hero_image_back']}
                            initial={{right: '11rem'}} whileInView={{right: '20rem'}} transition={transition}/>
                {/* calories */}
                <motion.div className={styles.calories} initial={{right: '37rem'}} whileInView={{right: '26rem'}}
                            transition={transition}>
                    <img src={Calories} alt="calories"/>
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero