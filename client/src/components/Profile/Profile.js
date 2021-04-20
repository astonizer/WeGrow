import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchProfile,
	uploadProfilePicture,
} from '../../redux/actions/profileActions';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import FileBase from 'react-file-base64';
import './Profile.css';

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
		<div className="profile-main">
			<Row style={{margin: 'auto'}}>
				<Col style={{margin: 'auto', marginTop: '150px'}} lg={8} md={6} sm={6}>
					<Card style={{ width: '30rem', borderRadius: '30px', margin: 'auto'}}>
						<Card.Img style={{borderRadius: '30px 30px 0px 0px'}} variant="top" src={user.profilePicture} />
						<div className="profile-card-details">
							<Card.Body>
								<Card.Title>My Profile</Card.Title>
								<br />
								<br />
								<Card.Text>
									<p>{user.username}</p>
									<hr />
									<p>{user.email}</p>
									<hr />
                               </Card.Text>
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default Profile;
