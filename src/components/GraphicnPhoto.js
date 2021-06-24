import React from 'react'

const GraphicnPhoto = (props) => {
    return (
        <div className="wrap_graphicnphoto">
            {
            props.dataG.map((data_G) => {
                return (
                    
<                       div className="graphicnphoto" key={data_G.id}>
                            <div className="isi_graphicnphoto">
                                <h2>{data_G.h2}</h2>
                                <p>{data_G.p}</p> 
                            </div>
                            <img className="imgM" src={data_G.imgM} alt="" />
                            <img className="imgD" src={data_G.imgD} alt="" />
                        </div>

                    
                )
            })
        }
        </div>
    )
}

export default GraphicnPhoto
