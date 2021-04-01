import React from 'react'

function Navbar() {
    return (
        <div>
            <h1>Navbar</h1>
            <ul className="navbar">
                <li className="navbar1"><a href="/">Home</a></li>
                <li className="navbar1"><a href="/profile">Profile</a></li>
                <li className="navbar1"><a href="/login">Login</a></li>
                <li className="navbar1"><a href="/signup">Signup</a></li>
            </ul>
        </div>
    )
}

export default Navbar
