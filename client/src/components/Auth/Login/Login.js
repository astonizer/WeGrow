import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/actions/authActions';
import './Login.css';

function Login({ history }) {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	// const [error, setError] = useState('');
	const dispatch = useDispatch();

	useEffect(() => {
		if (localStorage.getItem('authToken')) {
			history.push('/');
		}
	}, [history]);

	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(loginUser(user));
		history.push('/');
	};

	return (
		<div>
			<form className="login_form" onSubmit={handleSubmit}>
				<h1>Login Form</h1>
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
				<button>Login</button>
			</form>
			{/* {error && <span>{error}</span>} */}
		</div>
	);
}

export default Login;
