import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import AuthProvider from '../../Context/AuthContext';

function Home() {
    return (
        
            <div>
                {/* <h1>Home</h1>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <h1>Home route</h1>
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/signup'>
                        <Signup />
                    </Route>
                    <Route path='/profile'>
                        <AuthProvider>
                            <Profile />
                        </AuthProvider>
                    </Route>            
                </Switch>
                <Footer /> */}
                <h1>Hello</h1>
            </div>
    )
}

export default Home
