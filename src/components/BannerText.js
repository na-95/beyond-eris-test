import React from 'react'

export default function BannerText(props) {
    return (
        <div className="banner-text text-center ">
            <h1 className="font-weight-bold">{props.heading}</h1>
            <h2 >{props.date}</h2>
            <h2 >{props.location}</h2>
        </div>
    )
}
