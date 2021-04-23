import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Crops from './Crops/Crops';
import Loading from '../Loading/Loading';
import './BuyItem.css';

import { fetchItems } from '../../redux/actions/buyActions';

function BuyItem() {
	const [crops, setCrops] = useState([]);
	const dispatch = useDispatch();
	const buy = useSelector(state => state.buy);

	useEffect(() => {
		dispatch(fetchItems());
	}, [dispatch]);

	useEffect(() => {
		setCrops(buy.items);
	}, [buy]);

	return (
		<div className="container buyer" align="center">
			{buy.isLoading ? (
				<Loading />
			) : (
				<Row>
					{crops.map((crop, id) => (
						<Col lg={4} md={6} key={id}>
							<Crops crop={crop} id={id} />
						</Col>
					))}
				</Row>
			)}
		</div>
	);
}

export default BuyItem;
