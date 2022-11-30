import React from 'react'

import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles['footer-container']}>
            <hr/>
            <div className={styles.footer}>
                <div className={styles['social-links']}>
                    <img src={Github} alt="github"/>
                    <img src={Instagram} alt="instagram"/>
                    <img src={Linkedin} alt="linkedin"/>
                </div>
                <div className={styles['logo-f']}>
                    <img src={Logo} alt="logo"/>
                </div>
            </div>
            <div className={`blur ${styles['footer-blur-1']}`}></div>
            <div className={`blur ${styles['footer-blur-2']}`}></div>
        </footer>
    )
}

export default Footer