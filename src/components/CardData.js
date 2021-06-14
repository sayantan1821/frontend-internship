import React from 'react'
import { SiBmcsoftware, SiApple } from "react-icons/si";
import { GiThreeFriends } from "react-icons/gi";
import './card.css'

export const CardData= [
    {
        price: '$20.00',
        date: '23 Sep, 2020',
        icon: <SiBmcsoftware size='2x'/>,
        txt: 'Software',
        color: 'rgb(167 244 255)'
    },
    {
        price: '$30.00',
        date: '26 Sep, 2020',
        icon: <GiThreeFriends size='2x' />,
        txt: 'Management',
        color: 'rgb(167 244 255)'
    },
    {
        price: '$60.00k',
        date: '28 Sep, 2020',
        icon: <SiApple size='2x' />,
        txt: 'Support',
        color: 'rgb(167 244 255)'
    }
]

