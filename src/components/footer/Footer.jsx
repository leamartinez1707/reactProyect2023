import React from 'react'
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import '../styles.css'
import { Link } from 'react-router-dom'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <div className='footer-main'>
            <div className="footer-container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <hr className='hr-footer' />
                    </div>
                </div >
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <Link to={'https://www.instagram.com/leamartinez1707'} target='_blank'>
                        <button className='btn social-media'>
                            <BsInstagram />
                        </button></Link>

                        <Link to={'https://wa.me/59895220063'} target='_blank'>
                            <button className="btn social-media"><BsWhatsapp /></button>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/leandro-mart%C3%ADnez-03501a202/'} target='_blank'>
                            <button className='btn social-media'>
                                <BsLinkedin /></button></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center text-center">
                        <span className='terms'>About us</span>
                        <span className='terms'>Contact</span>
                        <span className='terms'>Terms and conditions</span>
                    </div>
                    <div>
                        <p>©️{currentYear} | Leandro Martínez.
                        </p></div>
                </div >
                <div className="row">
                    <div className="col d-flex p-column justify-content-center">
                        <hr className='hr-footer-two' />

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Footer