import React from 'react'
import { BiRocket } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineDollarCircle, AiOutlineTeam } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <BiRocket />,
        cname: 'nav-text'
    },
    {
        title: 'Clients',
        path: '#',
        icon: <BsFillPersonFill />,
        cname: 'nav-text'
    },
    {
        title: 'Invoices',
        path: '#',
        icon: <AiOutlineDollarCircle />,
        cname: 'nav-text'
    },
    {
        title: 'Estimates',
        path: '#',
        icon: <HiDocumentText />,
        cname: 'nav-text'
    },
    {
        title: 'My team',
        path: '#',
        icon: <AiOutlineTeam />,
        cname: 'nav-text'
    }
]
