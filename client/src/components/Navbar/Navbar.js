import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <ul className="navbar">
                <Link className="navbar1" to="/">Home</Link>
                <Link className="navbar1" to="/auth">Sign In</Link>
                <Link className="navbar1" to="/profile">Profile</Link>                
            </ul>
        </div>
    )
}

export default Navbar
