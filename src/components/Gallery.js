import React from 'react'
import imgM1 from '../images/mobile/image-gallery-milkbottles.jpg'
import imgM2 from '../images/mobile/image-gallery-orange.jpg'
import imgM3 from '../images/mobile/image-gallery-cone.jpg'
import imgM4 from '../images/mobile/image-gallery-sugar-cubes.jpg'

import imgD1 from '../images/desktop/image-gallery-milkbottles.jpg'
import imgD2 from '../images/desktop/image-gallery-orange.jpg'
import imgD3 from '../images/desktop/image-gallery-cone.jpg'
import imgD4 from '../images/desktop/image-gallery-sugarcubes.jpg'

const Gallery = () => {
    return (
        <div className="gallery">

                <img className="imgM" src={imgM1} alt="" />
                <img className="imgM" src={imgM2} alt="" />
                <img className="imgM" src={imgM3} alt="" />
                <img className="imgM" src={imgM4} alt="" />
                
                <img className="imgD" src={imgD1} alt="" />
                <img className="imgD" src={imgD2} alt="" />
                <img className="imgD" src={imgD3} alt="" />
                <img className="imgD" src={imgD4} alt="" />
            
            
        </div>
    )
}

export default Gallery
