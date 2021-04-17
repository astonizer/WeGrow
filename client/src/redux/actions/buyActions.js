import axios from 'axios';
import {
	FETCH_ITEMS_SUCCESS,
	FETCH_ITEMS_FAIL,
	FETCH_ITEMS,
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
