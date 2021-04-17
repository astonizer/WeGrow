import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/actions/authActions';
import '../Auth.css';

function Login({ history }) {
	const [user, setUser] = useState({
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
		dispatch(loginUser(user));
		setUser({
			email: '',
			password: '',
		});
	};

	return (
		<Row>
			<Col className="login mx-auto" sm={9} md={7} lg={6} >
				<Card className="text-center">
					<Card.Header className="bg-color"><Card.Title>Login Form</Card.Title></Card.Header>
					<Card.Body>
						<Form onSubmit={handleSubmit}>							
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
							<Button variant="btn-light" className="bg-color button-color" type="submit"> Login </Button>
						</Form>
					</Card.Body>
				</Card>
			</Col>		
		</Row>
	);
}

export default Login;
