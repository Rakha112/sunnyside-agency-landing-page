import React from 'react'
import arrow from '../images/icon-arrow-down.svg'
import bgM from '../images/mobile/image-header.jpg'
import bgD from '../images/desktop/image-header.jpg'
import Navbar from './Navbar';
import { Link } from "react-scroll";
const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <img id="bgM"src={bgM} alt="" />
            <img id="bgD"src={bgD} alt="" />
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
