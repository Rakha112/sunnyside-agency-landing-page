import React from 'react'
import img1 from '../images/mobile/image-gallery-milkbottles.jpg'
import img2 from '../images/mobile/image-gallery-orange.jpg'
import img3 from '../images/mobile/image-gallery-cone.jpg'
import img4 from '../images/mobile/image-gallery-sugar-cubes.jpg'
const Gallery = () => {
    return (
        <div className="gallery">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            
        </div>
    )
}

export default Gallery
