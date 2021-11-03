import React from 'react'
// eslint-disable-next-line
import {Link, useHistory} from 'react-router-dom'
import './style.css'

const Nav = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                <Link to="/Home"  className="link">Home</Link>
                </li>
                <li>
                <Link to="/About"  className="link">About Us</Link>
                </li>
                <li>
                <Link to="/Favorit"  className="link">Favorit</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default Nav
