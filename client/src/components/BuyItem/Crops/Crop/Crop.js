import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
	Card,
	Col,
	Row,
	Carousel,
	Badge,
} from 'react-bootstrap';

import Loading from '../../../Loading/Loading';
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

	return (
		<div className="crop">
			{crop && id > -1 ? (
				<>
					<Row>
						<Col lg={7} md={12} sm={12} className="mx-auto">
							<Card className="crop-card">
								<div className="crop-inside">
									<Carousel>
										{
											crop?.selectedFile?.map((img, index) => (

												<Carousel.Item key={index}>
													<img
														// className="d-block w-100"
														src={img}
														alt="First slide"
													/>
												</Carousel.Item>

											))
										}
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
												Price: {counter}
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
								<h4>Highest Bid Till now: {counter}</h4>
								<h5>Want to place higher Bid? </h5>
								<input
									ref={countRef}
									type="number"
									min={0}
									max={1000000}
								/>
								<button className="btn btn-light bg-color pl-3 pr-3 pt-0 pb-0 ml-1" onClick={counterHandler}>Add</button>								
							</div>
						</Col>
					</Row>
					<h2>Bid</h2>
					<div>{counter}</div>
				</>
			) : (
				<Loading />
			)}
		</div>
	);
}

export default Crop;
