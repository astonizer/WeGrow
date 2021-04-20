import axios from 'axios';
import {
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAIL,
	FETCH_ITEMS,
	BID_SUCCESS,
	BID_FAIL,
} from '../constants/buyConstants';
import { clearErrors, returnErrors } from './errorActions';

export const fetchItems = () => async dispatch => {
	dispatch(clearErrors());
	dispatch({ type: FETCH_ITEMS });
	axios
		.get('/api/buy')
		.then(res => {
			dispatch({ type: FETCH_ITEMS_SUCCESS, payload: res.data.items });
		})
		.catch(error => {
			dispatch({ type: FETCH_ITEMS_FAIL });
			dispatch(returnErrors(error.response.data.error));
		});
};

export const bidPrice = (cropId, newBuyPrice) => async dispatch => {
	dispatch(clearErrors());

	// Request headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const data = {
		cropId,
		newBuyPrice,
		token: localStorage.getItem('authToken'),
	};

	axios
		.post('/api/buy/bid', JSON.stringify(data), config)
		.then(res => {
			dispatch({ type: BID_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: BID_FAIL });
			dispatch(returnErrors(err.response.data.error));
		});
};
