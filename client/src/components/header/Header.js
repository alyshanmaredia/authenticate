import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header>
            <div className="logo">
                <h1><Link to='/'>Trademark Portal</Link></h1>
            </div>

            <ul>
                <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
                <li><Link to="/login"><i className="fas fa-sign-in-alt"></i>Login</Link></li>
            </ul>
        </header>
    )
}

export default Header;