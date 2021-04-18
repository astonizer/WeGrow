import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';
import Crop from './Crop/Crop'

import './Crops.css';

function Crops({ crop, id }) {
	const history = useHistory();

	const currCrop = crop;

	const handleClick = () => {
		//  alert("Great Shot!");


			history.push(`/crop/${id}`);
		 	// <Crop crop={currCrop} />
		
	}
	return (
		<div className="container buyer">
			{/* <h1>Crops</h1> */}
			<Card className="crop" onClick={handleClick}>
				<Card.Img className="image" src={crop.selectedFile} />
				<Card.Body>
					<Card.Text>
						<Card.Title>{crop.title}</Card.Title>
						<Card.Title>
							<Badge variant="success">Price: 199</Badge>
						</Card.Title>
					</Card.Text>
					<Card.Text>{crop.description}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Crops;
