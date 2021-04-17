import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import Crop from './Crop/Crop'

import './Crops.css';

const crops = [
  {
    id: 1,
    name: "Wheat",
    price: 50,
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FvLRoJ91rpFY%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DvLRoJ91rpFY&tbnid=D3oxxPzj3Isf1M&vet=12ahUKEwjU49rdpoPwAhWVZSsKHY5JAb0QMygEegUIARDVAQ..i&docid=RqZ4sVZCLuVHsM&w=1280&h=720&q=crops&hl=en-GB&ved=2ahUKEwjU49rdpoPwAhWVZSsKHY5JAb0QMygEegUIARDVAQ"
  },
  {
    id: 2,
    name: "Rice",
    price: 50,
    img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fekincare.files.wordpress.com%2F2017%2F10%2Fdesi-crops-of-andhra.jpeg%3Fw%3D800&imgrefurl=https%3A%2F%2Fblog.ekincare.com%2F2017%2F10%2F30%2Fdesi-crops-of-andhra-pradesh-and-telangana%2F&tbnid=Gfubro22Ie4vDM&vet=12ahUKEwjU49rdpoPwAhWVZSsKHY5JAb0QMygGegUIARDaAQ..i&docid=m8uKU8QlGfnNRM&w=800&h=448&q=crops&hl=en-GB&ved=2ahUKEwjU49rdpoPwAhWVZSsKHY5JAb0QMygGegUIARDaAQ"
  }
]


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
