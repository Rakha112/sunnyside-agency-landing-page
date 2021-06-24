import React from 'react'
import arrow from '../images/icon-arrow-down.svg'
import bg from '../images/mobile/image-header.jpg'
import Navbar from './Navbar';
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <img id="bg"src={bg} alt="" />
            <div className="isi_home">
                <h1>we are creatives</h1>
                <Link
                    activeClass="active"
                    to="more"
                    spy={true}
                    smooth={true}
                    duration={1000}
                ><img id="arrow" src={arrow} alt="" /></Link>
            </div>
            
            
        </div>
    )
}

export default Home
