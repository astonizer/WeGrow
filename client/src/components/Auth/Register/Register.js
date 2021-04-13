import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { registerUser } from '../../../redux/actions/authActions';

function Register({ history }) {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});
	// const [error, setError] = useState('');
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	useEffect(() => {
		if (localStorage.getItem('authToken')) {
			history.push('/');
		}
	}, [isAuthenticated, history]);

	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(registerUser(user));
		setUser({
			username: '',
			email: '',
			password: '',
		});
	};

	return (
		<div>
			<form className="register_form" onSubmit={handleSubmit}>
				<h1>Register Form</h1>
				<div>
					<label>Username</label>
					<input
						type="text"
						id="username"
						value={user.username}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Email</label>
					<input
						type="text"
						id="email"
						value={user.email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						id="password"
						value={user.password}
						onChange={handleChange}
					/>
				</div>
				<button>Register</button>
			</form>
			{/* {error && <span>{error}</span>} */}
		</div>
	);
}

export default Register;
