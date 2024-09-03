import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>A quick link to a form where customers can provide feedback on their dining experience.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
                </div> 
                <div className="footer-content-center">
                    <h2>ABC restaurant</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>0773443773</li>
                        <li>contact@Abc.com </li>
                    </ul>

                </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyrigth 2024 Abc.com - All Right Reserverd.</p>

    </div>
  )
}

export default Footer