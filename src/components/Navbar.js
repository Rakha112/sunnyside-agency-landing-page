import logo from '../images/logo.svg'
import ham from '../images/icon-hamburger.svg'
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <img src={ham} alt="" />
        </div>
    )
}

export default Navbar
