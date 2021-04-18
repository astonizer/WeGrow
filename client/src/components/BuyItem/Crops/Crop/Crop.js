import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Col, Row, Carousel, Jumbotron } from 'react-bootstrap';
import './Crop.css';


function Crop(props) {

    const countRef = useRef(0);

    const [counter, setCounter] = useState(0);

    let a;
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

    const { id } = useParams();

    return (
        <div className="crop">
            <Row>
                <Col lg={12} md={12} sm={12}>
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
        </div>
    )
}

export default Crop;