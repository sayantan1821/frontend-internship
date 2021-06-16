import React from 'react'
import './card.css';
import { BsLink45Deg } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Card({price, date, icon, txt, color, ...props}) {
    console.log(color);
    return (
        <div className='card-data' style={{color:{color}}}>
            <h2>{price}</h2>
            <h5>{date}</h5>
            
            <Link to='#'>
                <BsLink45Deg size={25}/>
            </Link>
            <div className='card-footer'></div>
                <div className='icon'>{icon}</div>
                <p>{txt}</p>
            <div/>
        </div>
    )
}

export default Card
