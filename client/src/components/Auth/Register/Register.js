import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../Auth.css';
import './Register.css';
import { registerUser } from '../../../redux/actions/authActions';
import register from '../../../assets/register.svg';

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
		<div className="register">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-12">
						<Card className="text-center">
							<Card.Header className="bg-color"><Card.Title>Registration Form</Card.Title></Card.Header>
							<Card.Body>
								<Form onSubmit={handleSubmit}>
									<Form.Group controlId="username">
										<Row>
											<Col sm={3}>
												<Form.Label>Username</Form.Label>
											</Col>
											<Col>
												<Form.Control
													type="text"
													value={user.username}
													onChange={handleChange}
													placeholder="Enter Username"
												/>
											</Col>
										</Row>
									</Form.Group>
									<Form.Group controlId="email">
										<Row>
											<Col sm={3}>
												<Form.Label>Email address</Form.Label>
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
												<Form.Label>Password</Form.Label>
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
									<Button variant="btn-light" className="bg-color button-color" type="submit">Register</Button>
								</Form>
							</Card.Body>
						</Card>
					</div>
					<div className="col-lg-1 col-md-1 col-sm-1 register_img">
					</div>
					<div className="col-lg-5 col-md-12 col-sm-12 register_img">
						<img className="register_img" src={register} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
