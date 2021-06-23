import React from 'react'

const GraphicnPhoto = (props) => {
    console.log(props)
    return (
        <>{
            props.dataG.map((data_G) => {
                return (
                    <div className="graphicnphoto" key={data_G.id}>
                        <div className="isi_graphicnphoto">
                            <h2>{data_G.h2}</h2>
                            <p>{data_G.p}</p> 
                        </div>
                        <img src={data_G.img} alt="" />
                    </div>
                )
            })
        }
        </>
    )
}

export default GraphicnPhoto
