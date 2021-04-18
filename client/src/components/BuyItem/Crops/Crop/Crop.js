import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { fetchItems } from '../../../../redux/actions/buyActions';

import './Crop.css';


function Crop() {
    const [crops, setCrops] = useState([]);
	const dispatch = useDispatch();
	const buy = useSelector(state => state.buy);
    const { id } = useParams();

	useEffect(() => {
		dispatch(fetchItems());
	}, []);

	useEffect(() => {
		setCrops(buy.items);
	}, [buy]);

    console.log(crops.length);


    return (
        <div className="crop">
        {
            crops.length > 0 ? 
            (<Card className="crop-card col-5" >
                <Card.Img variant="top" src={crops[id].selectedFile} />
                {/* <Carousel>
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
                </Carousel> */}
                <Card.Body>
                    <Card.Title>Name : {crops[id].name}</Card.Title>
                    <Card.Text>{crops[id].description}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>):('')
        }
        </div>
    )
}

export default Crop;