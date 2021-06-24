import logo from '../images/logo.svg'
import ham from '../images/icon-hamburger.svg'
import React, {useState} from 'react'

const Navbar = () => {
    const [isAktif,setisAktif] = useState(false)

    return (
        <div className="navbar">
            
            <img src={logo} alt="" />
            <ul className={isAktif ? "aktif" : ""}>
                <div id="arrow-left"></div>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li className="li_con"><a href="#contact" className="contact">Contact</a></li>
            </ul>
            <img onClick={() => setisAktif(!isAktif)} src={ham} alt="" />
        </div>
    )
}

export default Navbar
