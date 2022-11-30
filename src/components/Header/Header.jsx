import React, {useState} from 'react'
import {Link} from "react-scroll"

import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'

import styles from './Header.module.css'

const Header = () => {
    const mobile = window.innerWidth <= 768
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo" className={styles.logo}/>
            {!menuOpened && mobile ? (
                <div className={styles['burger-menu']} onClick={() => setMenuOpened(true)}>
                    <img src={Bars} alt="bars" className={styles['burger-icon']}/>
                </div>
            ) : (
                <ul className={styles['header-menu']}>
                    <li>
                        <Link onClick={() => setMenuOpened(false)} to="home" spy={true} smooth={true}>Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => setMenuOpened(false)} to="programs" spy={true} smooth={true}>Programs</Link>
                    </li>
                    <li>
                        <Link onClick={() => setMenuOpened(false)} to="reasons" spy={true} smooth={true}>Why us</Link>
                    </li>
                    <li>
                        <Link onClick={() => setMenuOpened(false)} to="plans" spy={true} smooth={true}>Plans</Link>
                    </li>
                    <li>
                        <Link onClick={() => setMenuOpened(false)} to="testimonials" spy={true} smooth={true}>Testimonials</Link>
                    </li>
                </ul>
            )}
        </header>
    )
}

export default Header