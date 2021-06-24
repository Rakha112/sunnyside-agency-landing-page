import React from 'react'

const Testi = (props) => {
    return (
        <div className="testi">
            <h3>Client testimonials</h3>
            <div className="card_testi">
                {
                    props.dataT.map((data_T) => {
                        return (
                            <div className="isi_testi" key={data_T.id}>
                            <img src={data_T.img} alt="" />
                            <p>{data_T.p}</p>
                            <h4>{data_T.h4}</h4>
                            <h5>{data_T.h5}</h5>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testi
