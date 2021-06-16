import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { SidebarData } from './SlidebarData';

import pic1 from '../assets/prfl3.png'
import { RiSettings4Fill } from "react-icons/ri";

import './Navbar.style.css';


function Navbar() {
    const [option, setOption] = useState(false);
    const markOption = () => setOption(!option);

    return (
        <nav className= 'sidebar'>
            <div className='profile'>
                <img className='prfl-img' src= {pic1} alt='profile'/>
                <p>Welcome back,</p>
                <h2>Julie Bell</h2>
            </div>
            <ul className= 'nav-menu-items'>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className= {option ? `${item.cname} active` : item.cname}>
                        {/* <h1>{option ? 'X' : ''}</h1> */}
                            <Link to= {item.path} onClick= {markOption}>
                                {item.icon}
                                <span className='txt'>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className='settings'>
                <Link to= '#'>
                    <RiSettings4Fill />
                    <span>Settings</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
