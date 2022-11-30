import React, {useState} from 'react'
import {motion} from "framer-motion"
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

import styles from './Testimonials.module.css'

const Testimonials = () => {
    const transition = {type: 'spring', duration: 3}
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    return (
        <div className={styles.testimonials} id="testimonials">
            <div className={styles['left-t']}>
                <span>testimonials</span>
                <span className="stroke-text">what they</span>
                <span>say about us</span>
                <motion.span key={selected} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 100}} transition={transition}>
                    {testimonialsData[selected].review}
                </motion.span>
                <span>
                    <span>
                        {testimonialsData[selected].name}
                    </span> - {" "}{testimonialsData[selected].status}
                </span>
            </div>
            <div className={styles['right-t']}>
                <motion.div initial={{opacity: 0, x: -100}} transition={{...transition, duration: 2}} whileInView={{opacity: 1, x: 0}}></motion.div>
                <motion.div initial={{opacity: 0, x: 100}} transition={{...transition, duration: 2}} whileInView={{opacity: 1, x: 0}}></motion.div>
                <motion.img src={testimonialsData[selected].image} alt="trainer" key={selected} initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} transition={transition}/>
                <div className={styles.arrows}>
                    <img onClick={() => (
                        selected === 0
                            ? setSelected(tLength - 1)
                            : setSelected((prev) => prev - 1)
                    )} src={leftArrow} alt="left arrow"/>
                    <img onClick={() => (
                        selected === tLength - 1
                            ? setSelected(0)
                            : setSelected((prev) => prev + 1)
                    )} src={rightArrow} alt="right arrow"/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials