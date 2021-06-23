import React from 'react';
import More from './More';
import img1 from '../images/mobile/image-transform.jpg'
import img2 from '../images/mobile/image-stand-out.jpg'



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

  return (
    <>
      <More dataMore={datamore}/>
    </>
  );
}

export default Isiweb;
