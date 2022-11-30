import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

import styles from './Join.module.css'

const Join = () => {
    const form = useRef()
    const [email, setEmail] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        if (email.length > 0) {
            emailjs.sendForm('service_jikt157', 'template_iwes0xn', form.current, 'D6Es1oW58zAA99dtD')
                .then((result) => {
                    console.log(result.text)
                }, (error) => {
                    console.log(error.text)
                })
            setEmail('')
        }
    }

    return (
        <div className={styles.join} id="join">
            <div className={styles['left-j']}>
                <hr/>
                <div>
                    <span className="stroke-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="stroke-text">WITH US?</span>
                </div>
            </div>
            <div className={styles['right-j']}>
                <form ref={form} action="" className={styles['email-container']} onSubmit={sendEmail}>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="user_email"
                           placeholder="Enter your Email address" id=""/>
                    <button className={`btn ${styles['btn-j']}`}>Join now</button>
                </form>
            </div>
        </div>
    )
}


export default Join