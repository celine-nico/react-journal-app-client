import React from 'react'
import { NavLink } from 'react-router-dom'



const NavBar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/newform">Create a New Entry</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;