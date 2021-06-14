import React from 'react'
import './card.css';

function Card({price, date, icon, txt, color, ...props}) {
    console.log(color);
    return (
        <div className='card' style={{color:{color}}}>
            <h2>{price}</h2>
            <h5>{date}</h5>
            <div className='icon'>{icon}</div>
            <p>{txt}</p>
        </div>
    )
}

export default Card
