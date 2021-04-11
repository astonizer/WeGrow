import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';

function Navbar() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const signOut = () => {
        dispatch({ type: 'LOGOUT' });

        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        // const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
        // console.log(user?.user);

        // JWT acess token

    }, [location]);

    return (
        <div>
            <ul className="navbar">
                <Link className="navbar1" to="/">Home</Link>
                {user ? (
                    <>
                        <Link className="navbar1" to="/auth/profile">Profile</Link>
                        <Link className="navbar1" to="/" onClick={signOut}>Sign Out</Link>
                    </>
                ) : (
                    <Link className="navbar1" to="/auth">Sign In</Link>
                )}

            </ul>
        </div>
    )
}

export default Navbar
