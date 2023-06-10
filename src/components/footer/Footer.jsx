import React from 'react'
import { BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import '../styles.css'

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (

        <div className='footer-main'>

            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <hr className='hr-footer' />
                    </div>
                </div >
                <div className="row">
                    <div className="col d-flex justify-content-center">
                    <button className='btn social-media'>
                        <BsInstagram />
                    </button>
                        <button className="btn social-media"><BsWhatsapp /></button>
                        <button className='btn social-media'><BsLinkedin/></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center text-center">
                        <span className='terms'>About us</span>
                        <span className='terms'>Contact</span>
                        <span className='terms'>Terms and conditions</span>
                    </div>
                    <div><p>©️{currentYear} Leandro Martínez.</p></div>
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