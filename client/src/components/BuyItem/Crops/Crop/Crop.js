import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	Card,
	Button,
	Col,
	Row,
	Carousel,
	Jumbotron,
	Badge,
} from 'react-bootstrap';

import { fetchItems } from '../../../../redux/actions/buyActions';
import { bidPrice } from '../../../../redux/actions/buyActions';
import './Crop.css';

function Crop() {
	const countRef = useRef(0);
	const [crop, setCrop] = useState({});
	const [counter, setCounter] = useState(0);
	const dispatch = useDispatch();
	const buy = useSelector(state => state.buy);
	const { id } = useParams();

	let a;

	// Fetch Crops
	useEffect(() => {
		dispatch(fetchItems());
	}, []);

	useEffect(() => {
		setCrop(buy.items[id]);
		setCounter(buy.items[id]?.buyPrice);
	}, [buy]);

	// Bidding
	const counterHandler = () => {
		a = countRef.current.value;
		updateBid(a);
		if (Number(a) > 0) setCounter(Number(a));
	};

	const updateBid = a => {
		if (Number(a) > counter) dispatch(bidPrice(crop._id, Number(a)));
	};

	const addHandler = () => {
		setCounter(prevCount => prevCount + 1);
	};

	const subtractHandler = () => {
		setCounter(prevCount => {
			if (prevCount <= 0) return;
			return prevCount - 1;
		});
	};

	// console.log(crop);
	return (
		<div className="crop">
			{crop && id > -1 ? (
				<>
					<Row>
						<Col lg={7} md={12} sm={12} className="mx-auto">
							<Card className="crop-card">
								<div className="crop-inside">
									<Carousel>
										<Carousel.Item>
											<img
												className="d-block w-100"
												src={crop.selectedFile}
												alt="First slide"
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="d-block w-100"
												src={crop.selectedFile}
												alt="Second slide"
											/>
										</Carousel.Item>
										<Carousel.Item>
											<img
												className="d-block w-100"
												src={crop.selectedFile}
												alt="Third slide"
											/>
										</Carousel.Item>
									</Carousel>
									<Card.Body>
										<Card.Title>
											Crop Name: {crop.title}{' '}
										</Card.Title>
										<Card.Text>
											{crop.description}
										</Card.Text>
										<Card.Title>
											<Badge variant="success">
												Price: {crop.initialPrice}
											</Badge>
										</Card.Title>
									</Card.Body>
								</div>
							</Card>
						</Col>

						<Col
							className="my-5"
							style={{ textAlign: 'center' }}
							md={12}
							lg={12}
							sm={12}
						>
							<div className="bid_info">
								<h4>Highest Bid Till now: 320</h4>
								<h5>Want to place higher Bid? </h5>
								<input
									ref={countRef}
									type="number"
									min={0}
									max={1000000}
								/>
								<button onClick={counterHandler}>Add</button>
							</div>
						</Col>
					</Row>
					<h2>Bid</h2>
					<div>{counter}</div>
				</>
			) : (
				'No Crop present'
			)}
		</div>
	);
}

export default Crop;
