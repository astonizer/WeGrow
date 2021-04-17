import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import './Crop.css';


function Crop(props) {
    return (
        <div className="crop">
            <Card className="crop-card" style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="https://media.nationalgeographic.org/assets/photos/120/983/091a0e2f-b93d-481b-9a60-db520c87ec33.jpg" /> */}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.nationalgeographic.org/assets/photos/120/983/091a0e2f-b93d-481b-9a60-db520c87ec33.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.nationalgeographic.org/assets/photos/120/983/091a0e2f-b93d-481b-9a60-db520c87ec33.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://media.nationalgeographic.org/assets/photos/120/983/091a0e2f-b93d-481b-9a60-db520c87ec33.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title>Crop Name</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                   </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Crop;