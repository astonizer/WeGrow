import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Crops from './Crops/Crops';
import './BuyItem.css';

import { fetchItems } from '../../redux/actions/buyActions';

function BuyItem() {
	const [crops, setCrops] = useState([]);
	const dispatch = useDispatch();
	const items = useSelector(state => state.buy);

	useEffect(() => {
		dispatch(fetchItems());
		setCrops(items);
	}, []);

	// const
	return (
		<div className="container buyer">
			{/* <h1>BuyItem {crops.data}</h1> */}
			<Row>
				{crops.map(crop => {
					<Col lg={4} md={6}>
						<Crops />
					</Col>;
				})}
			</Row>
		</div>
	);
}

export default BuyItem;
