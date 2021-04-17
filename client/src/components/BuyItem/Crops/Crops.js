import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import Crop from './Crop/Crop';

import './Crops.css';

// const cardHandler = () => {

// }

function Crops({ crop }) {
	return (
		<div className="container buyer">
			{/* <h1>Crops</h1> */}
			<Card className="crop">
				<Card.Img className="image" src={crop.selectedFile} />
				<Card.Body>
					<Card.Title>{crop.title}</Card.Title>
					<Card.Text>
						<Card.Title>Name: wheat</Card.Title>
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
