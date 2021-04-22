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
		alert("logged out");
		history.push('/');
	};

	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	return (

		<>
			{
				isAuthenticated ? (
					<Navbar className="fixed-top" bg="dark" expand="lg">
						<Navbar.Brand>
							<Link to='/'>
								<img className="logo" src={Logo} />
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link>
									<Link className="header_link" to="/">
										Home
					               </Link>
								</Nav.Link>

								<Nav.Link>
									<Link className="header_link" to="/buy">
										Buy
					                </Link>
								</Nav.Link>

								<Nav.Link>
									<Link className="header_link" to="/sell">
										Sell
							       </Link>
								</Nav.Link>

								<Nav.Link>
									<Link className="header_link" to="/profile">
										Profile
							       </Link>
								</Nav.Link>

								<Nav.Link>
									<Link
										className="header_link"
										onClick={handleLogout}
										to="#"
									>
										Logout
					                </Link>
								</Nav.Link>

							</Nav>
						</Navbar.Collapse>
					</Navbar>
				) : (
					<Navbar className="fixed-top" bg="dark" expand="lg">
						<Navbar.Brand>
							<Link to='/'>
								<img className="logo" src={Logo} />
							</Link>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link>
									<Link className="header_link" to="/">
										Home
					               </Link>
								</Nav.Link>
								<Nav.Link>
									<Link className="header_link" to="/auth/register">
										Register
								</Link>
								</Nav.Link>

								<Nav.Link>
									<Link className="header_link" to="/auth/login">
										Login
								</Link>
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				)
			}

		</>
	);
}

export default Header;
