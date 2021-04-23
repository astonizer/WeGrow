import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/authActions';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/logo.png';

import './Header.css';

function Header({ history }) {
	const dispatch = useDispatch();

	const handleLogout = e => {
		dispatch(logoutUser());
		alert('You have logged out.');
		history.push('/');
	};

	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (
		<>
			{isAuthenticated ? (
				<Navbar className="fixed-top" bg="dark" expand="lg">
					<Navbar.Brand>
						<Link to="/">
							<img className="logo" src={Logo} alt="logo" />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="header_link" as={Link} to="/">
								Home
							</Nav.Link>

							<Nav.Link
								className="header_link"
								as={Link}
								to="/buy"
							>
								Buy
							</Nav.Link>

							<Nav.Link
								className="header_link"
								as={Link}
								to="/sell"
							>
								Sell
							</Nav.Link>

							<Nav.Link
								className="header_link"
								as={Link}
								to="/profile"
							>
								Profile
							</Nav.Link>

							<Nav.Link
								className="header_link"
								as={Link}
								to="#"
								onClick={handleLogout}
							>
								Logout
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			) : (
				<Navbar className="fixed-top" bg="dark" expand="lg">
					<Navbar.Brand>
						<Link to="/">
							<img className="logo" src={Logo} alt="logo" />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link className="header_link" as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link
								className="header_link"
								as={Link}
								to="/auth/register"
							>
								Register
							</Nav.Link>

							<Nav.Link
								className="header_link"
								as={Link}
								to="/auth/login"
							>
								Login
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)}
		</>
	);
}

export default Header;
