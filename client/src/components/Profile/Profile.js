import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchProfile,
	uploadProfilePicture,
} from '../../redux/actions/profileActions';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import FileBase from 'react-file-base64';
import Chart from './Chart';

function Profile() {
	const [img, setImg] = useState(null);
	const dispatch = useDispatch();
	const token = useSelector(state => state.auth.token);
	const user = useSelector(state => state.profile);

	const handleSubmit = e => {
		dispatch(uploadProfilePicture(img));
	};

	const handleDone = ({ base64 }) => {
		setImg(base64);
	};

	useEffect(() => {
		dispatch(fetchProfile(token));
	}, []);

	return (
		<Container align="center">
			<Row>
				<Col>
					<Row>
						<Col>
							<img
								src={user.profilePicture}
								alt="profile picture"
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<FileBase
								type="file"
								multiple={false}
								onDone={handleDone}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button onClick={handleSubmit}>
								Upload Picture
							</Button>
						</Col>
					</Row>
				</Col>
				<Col>
					<Row>
						<Col>
							<h3>Username : {user.username}</h3>
						</Col>
					</Row>
					<Row>
						<Col>
							<h3>Email : {user.email}</h3>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Profile;
