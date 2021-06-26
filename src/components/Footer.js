import React from 'react'
import logo from '../images/logo-footer.svg'
import fb from '../images/icon-facebook.svg'
import ig from '../images/icon-instagram.svg'
import tw from '../images/icon-twitter.svg'
import pin from '../images/icon-pinterest.svg'

const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="" />
            <div className="nav_butt">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#" className="services">Services</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
            <div className="sosmed">
                <img src={fb} alt="" />
                <img src={ig} alt="" />
                <img src={tw} alt="" />
                <img src={pin} alt="" />
            </div>  
        </div>
    )
}

export default Footer
