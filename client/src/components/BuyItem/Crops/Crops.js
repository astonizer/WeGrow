import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';
import Crop from './Crop/Crop'

import './Crops.css';

function Crops({ crop, id }) {
	const history = useHistory();	

	const handleClick = () => {
		history.push(`/crop/${id}`);		
	}
	return (
		<div className="container buyer">
			<Card className="crop" onClick={handleClick}>
				<Card.Img variant="top" className="image" src={crop.selectedFile[0]} />
				<Card.Body>
					<Card.Text>
						<Card.Title>{crop.title}</Card.Title>
						<Card.Title>
							<Badge variant="success">Price: {crop.initialPrice}</Badge>
						</Card.Title>
					</Card.Text>
					<Card.Text>{crop.description}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Crops;
