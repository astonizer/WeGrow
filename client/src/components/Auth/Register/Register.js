import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
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
	}, [history]);

	const handleChange = e => {
		setUser({ ...user, [e.target.id]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(registerUser(user));
		if (isAuthenticated) {
			history.push('/');
		}
		setUser({
			username: '',
			email: '',
			password: '',
		});
	};

	return (
		<Row>
			<Col className="mx-auto" sm={9} md={7} lg={6} >
				<Card className="text-center">
					<Card.Header className="bg-primary"><Card.Title>Registration Form</Card.Title></Card.Header>
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
							<Button variant="outline-primary" type="submit">Register</Button>
						</Form>
					</Card.Body>
				</Card>
			</Col>		
		</Row>
	);
}

export default Register;
