import React from 'react'

const More = (props) => {
    return (
        <>{
            props.dataMore.map((data_More) => {
                return (
                    <div className="more" key={data_More.id}>
                        <img src={data_More.img} alt="" />
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
