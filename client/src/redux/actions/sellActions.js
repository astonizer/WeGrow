import axios from 'axios';
import { SELL_ITEM_FAIL, SELL_ITEM_SUCCESS } from '../constants/sellConstants';

export const sellItem = item => async dispatch => {
	// console.log(item);
	// Request headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const data = {
		item,
		token: localStorage.getItem('authToken'),
	};

	axios
		.post('/api/sell', JSON.stringify(data), config)
		.then(res => {
			console.log(res);
			console.log(res.data.token);
			dispatch({ type: SELL_ITEM_SUCCESS, payload: res.data.token });
		})
		.catch(err => {
			dispatch({ type: SELL_ITEM_FAIL });
			// dispatch(returnErrors('Register failed', 404));
		});
};
