import axios from 'axios';
import {
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAIL,
	FETCH_ITEMS,
	BID_SUCCESS,
	BID_FAIL
} from '../constants/buyConstants';

export const fetchItems = () => async dispatch => {
	dispatch({ type: FETCH_ITEMS });
	axios
		.get('/api/buy')
		.then(res => {
			dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data.items });
		})
		.catch(error => {
			console.log(error);
			dispatch({ type: FETCH_ITEMS_FAIL, payload: error });
		});
};

export const bidPrice = (id, price) => async dispatch => {
	// Request headers

	// console.log('id = ', id, '  price = ', price);

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const data = {
		id,
		price,
		token: localStorage.getItem('authToken'),
	};

	console.log(data.id, data.price);

	axios
		.post(`/api/buy/crop/${id}`, JSON.stringify(data), config)
		.then(res => {
			dispatch({ type: BID_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: BID_FAIL });
			// dispatch(returnErrors('Register failed', 404));
		});
};
