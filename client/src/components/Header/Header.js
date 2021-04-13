import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/authActions';
import './Header.css';

function Header({ history }) {
	const dispatch = useDispatch();

	const handleLogout = e => {
		dispatch(logoutUser());
		history.push('/');
	};
	return (
		<div className="header">
			<h1>MERN Project with Authentication</h1>
			<nav>
				<ul className="header_links">
					<li>
						<Link className="header_link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="header_link" to="/auth/register">
							Register
						</Link>
					</li>
					<li>
						<Link className="header_link" to="/auth/login">
							Login
						</Link>
					</li>
					<li>
						<Link
							className="header_link"
							onClick={handleLogout}
							to="#"
						>
							Logout
						</Link>
					</li>
					<li>
						<Link className="header_link" to="/profile">
							Profile
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
