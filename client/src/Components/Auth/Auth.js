import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signin, signup } from '../../actions/auth';

const initialState = {username: '', email: '', password: ''};

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            dispatch(signup(formData, history));
        } else{
            dispatch(signin(formData, history));
        }
    };

    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevMode) => !prevMode);        
    }

    return (
        <div>
            <h3> {isSignup ? 'Sign Up' : 'Sign In'}</h3>
            <form className="m-3"  onSubmit={handleSubmit}>
                {
                    isSignup &&
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label m-2">Email</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control m-2" onChange={handelChange} id="email" placeholder="email@example.com" />
                        </div>
                    </div>
                }
                <div className="form-group">
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label m-2">username</label>
                        <div className="col-sm-5">
                            <input type="text" className="form-control m-2" onChange={handelChange} id="username" placeholder="username" />
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label m-2">Password</label>
                    <div className="col-sm-5">
                        <input type="password" className="form-control m-2" autoComplete="cc-number" onChange={handelChange} id="password" placeholder="Password" />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-dark">
                    {isSignup ? 'Sign Up' :  'Sign In'}
                </button>                
                <button type="button" className="btn btn-light" onClick={switchMode}>
                    {isSignup ? 'Already have an account ? Sign In' : 'Don\'t have account ? Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Auth;