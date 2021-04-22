import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/actions/authActions';
import '../Auth.css';
import './Login.css';
import login from '../../../assets/sign.svg';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../../redux/actions/errorActions';

function Login({ history }) {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const dispatch = useDispatch();
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	const error = useSelector(state => state.error.error);

	useEffect(() => {
		dispatch(clearErrors());
		if (localStorage.getItem('authToken')) {
			history.push('/profile');
			alert('logged in');
		}
	}, [isAuthenticated, history]);

	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(loginUser(user));
		setUser({
			email: '',
			password: '',
		});
	};

	return (
		<div className="login">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12">
						<Card className="text-center">
							<Card.Header className="bg-color">
								<Card.Title>Login Form</Card.Title>
							</Card.Header>
							<Card.Body>
								<Form onSubmit={handleSubmit}>
									<Form.Group controlId="email">
										<Row>
											<Col sm={3}>
												<Form.Label>
													Email address
												</Form.Label>
											</Col>
											<Col>
												<Form.Control
													type="email"
													value={user.email}
													onChange={handleChange}
													placeholder="Enter email"
												/>
											</Col>
										</Row>
									</Form.Group>
									<Form.Group controlId="password">
										<Row>
											<Col sm={3}>
												<Form.Label>
													Password
												</Form.Label>
											</Col>
											<Col>
												<Form.Control
													type="password"
													value={user.password}
													onChange={handleChange}
													placeholder="Enter Password"
												/>
											</Col>
										</Row>
									</Form.Group>
									<Form.Label className="text-muted">
										Already have an account?
										<Link to="/auth/register">
											<Button
												variant="btn-light"
												size="sm"
											>
												Register
											</Button>
										</Link>
									</Form.Label>
									<br />
									{error && error !== 'No token' && (
										<Alert variant="danger">{error}</Alert>
									)}
									<Button
										variant="btn-light"
										className="bg-color button-color"
										type="submit"
									>
										{' '}
										Login{' '}
									</Button>
								</Form>
							</Card.Body>
						</Card>
					</div>
					<div className="col-lg-5 col-md-12 col-sm-12">
						<img className="login_img" src={login} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
