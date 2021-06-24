import React from 'react';
import More from './More';
import GraphicnPhoto from './GraphicnPhoto'
import Gallery from './Gallery';
import Testi from './Testi'
import Footer from './Footer';
import datamore from './data/dataMore';
import dataGraphicnPhoto from './data/dataGraphicnPhoto';
import dataTesti from './data/dataTesti'


function Isiweb() {
  return (
    <>
      <More dataMore={datamore}/>
      <GraphicnPhoto dataG={dataGraphicnPhoto}/>
      <Testi dataT={dataTesti}/>
      <Gallery />
      <Footer />
    </>
  );
}

export default Isiweb;
