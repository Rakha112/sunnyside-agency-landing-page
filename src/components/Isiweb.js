import React from 'react';
import More from './More';
import GraphicnPhoto from './GraphicnPhoto'
import img1 from '../images/mobile/image-transform.jpg'
import img2 from '../images/mobile/image-stand-out.jpg'
import graphic from '../images/mobile/image-graphic-design.jpg'
import photo from '../images/mobile/image-photography.jpg'


function Isiweb() {

const datamore = [
   {
        id: 'transform',
        img: img1,
        h2: 'Transform your brand',
        p: 'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
    },
    {
        id: 'stand',
        img: img2,
        h2: 'Stand out to the right audience',
        p: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
    }
]

const dataGraphicnPhoto = [
    {
        id: 'graphic',
        img: graphic,
        h2: 'Graphic Design',
        p: 'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
    },
    {
        id: 'photo',
        img: photo,
        h2: 'Photography',
        p: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
    }
]

  return (
    <>
      <More dataMore={datamore}/>
      <GraphicnPhoto dataG={dataGraphicnPhoto}/>
    </>
  );
}

export default Isiweb;
