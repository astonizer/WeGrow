import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signin, signup } from '../../redux/actions/authActions';

const initialState = { username: '', email: '', password: '' };

const Auth = () => {
	const [isSignup, setIsSignup] = useState(false);
	const [formData, setFormData] = useState(initialState);
	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		if (isSignup) {
			dispatch(signup(formData, history));
		} else {
			dispatch(signin(formData, history));
		}
	};

	const handelChange = e => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const switchMode = () => {
		setIsSignup(prevMode => !prevMode);
	};

	return (
		<form className="m-3" onSubmit={handleSubmit}>
			<div class="card text-center col-12 col-sm-9 col-md-7 col-lg-6 mx-auto p-0">
				<div class="card-header bg-light">
					<h3> {isSignup ? 'Sign Up' : 'Sign In'}</h3>						
				</div>
				<div class="card-body">
					{isSignup && (
						<div className="form-group row">
							<label
								htmlFor="email"
								className="col-form-label mx-auto"
							>
								Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</label>
							<div className="col-12 col-sm-9 mx-auto">
								<input
									type="text"
									className="form-control"
									onChange={handelChange}
									id="email"
									placeholder="email@example.com"
								/>
							</div>
						</div>
					)}
					<div className="form-group">
						<div className="form-group row">
							<label
								htmlFor="username"
								className="col-form-label mx-auto"
							>
								username
							</label>
							<div className="col-12 col-sm-9 mx-auto">
								<input
									type="text"
									className="form-control"
									onChange={handelChange}
									id="username"
									placeholder="username"
								/>
							</div>
						</div>
					</div>
					<div className="form-group row">
						<label
							htmlFor="password"
							className="col-form-label mx-auto"
						>
							Password
						</label>
						<div className="col-12 col-sm-9 mx-auto">
							<input
								type="password"
								className="form-control"
								autoComplete="cc-number"
								onChange={handelChange}
								id="password"
								placeholder="Password"
							/>
						</div>
					</div>
					<button type="submit" className="col-5 btn btn-outline-dark">
						{isSignup ? 'Sign Up' : 'Sign In'}
					</button>
				</div>
				<button
						type="button"
						className="card-footer bg-light btn btn-light"
						onClick={switchMode}
					>
						{isSignup
							? 'Already have an account ? Sign In'
							: "Don't have account ? Sign Up"}
				</button>
				
			</div>
		</form>
	);
};

export default Auth;
