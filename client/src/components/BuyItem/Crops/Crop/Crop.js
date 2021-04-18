import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row, Carousel, Jumbotron } from 'react-bootstrap';

import { fetchItems } from '../../../../redux/actions/buyActions';
import './Crop.css';


function Crop() {
    const countRef = useRef(0);
    const [counter, setCounter] = useState(0);
    const [crops, setCrops] = useState([]);
	const dispatch = useDispatch();
	const buy = useSelector(state => state.buy);
    const { id } = useParams();
    let a;

	useEffect(() => {
		dispatch(fetchItems());
	}, []);

	useEffect(() => {
		setCrops(buy.items);
	}, [buy]);

    const counterHandler = () => {
        a = countRef.current.value;
        setCounter(prevCount => prevCount + Number(a));
    }

    const addHandler = () => {
        setCounter(prevCount => prevCount + 1);
    }

    const subtractHandler = () => {
        setCounter(prevCount => prevCount - 1);
    }

    return (
        <div className="crop">
        {(crops.length > id && id > -1) ? (
            <>
            <Row>
                <Col lg={4} md={12} sm={12} className="mx-auto">
                    <Card className="crop-card">
                        {/* <Card.Img variant="top" src="https://media.nationalgeographic.org/assets/photos/120/983/091a0e2f-b93d-481b-9a60-db520c87ec33.jpg" /> */}
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={crops[id].selectedFile}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={crops[id].selectedFile}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={crops[id].selectedFile}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title>Crop Name : {crops[id].name} </Card.Title>
                            <Card.Text>{crops[id].description}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-5" style={{ textAlign: "center" }} md={12} lg={12} sm={12}>
                    <div className="bid_info">
                        <h4>Highest Bid Till now: 320</h4>
                        <h5>Want to place higher Bid? </h5>
                        <input ref={countRef} value={a} type="number" min={0} max={1000000} />
                        <button onClick={counterHandler}>Add</button>
                        {/* <button onClick={addHandler}>+</button>
                        <button onClick={subtractHandler}>-</button> */}
                    </div>
                </Col>
            </Row>
            <h2>Bid</h2>
            <div>{counter}</div>
            </>
        ): ('No Crop present')}
        </div>
    )
}

export default Crop;