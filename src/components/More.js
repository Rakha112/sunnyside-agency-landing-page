import React from 'react'

const More = (props) => {
    return (
        <>{
            props.dataMore.map((data_More) => {
                return (
                    <div className="more" id={data_More.id} key={data_More.id}>
                        <img className="imgM" src={data_More.imgM} alt="" />
                        <img className="imgD" src={data_More.imgD} alt="" />
                        <div className="isi_more">
                            <h2>{data_More.h2}</h2>
                            <p>{data_More.p}</p>
                            <a href="#aa">LEARN MORE</a>
                            <div className={data_More.id}></div>
                        </div>
                    </div>
                )
            })
        }</>
    )
}

export default More
