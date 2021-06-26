import logo from '../images/logo.svg'
import ham from '../images/icon-hamburger.svg'
import React, {useState} from 'react'

const Navbar = () => {
    const [isAktif,setisAktif] = useState(false)

    return (
            <div className="navbar">

                <div className="wrapper">
                    <img className="logo" src={logo} alt="" />
                    <ul className={isAktif ? "aktif" : ""}>
                        <div id="arrow-left"></div>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li className="li_con"><a href="#" className="contact">Contact</a></li>
                    </ul>
                    <img className="ham" onClick={() => setisAktif(!isAktif)} src={ham} alt="" />
                </div>   
            </div>
    )
}

export default Navbar
