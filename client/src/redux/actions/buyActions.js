import axios from 'axios';
import { FETCH_ITEMS, FETCH_ITEMS_ERROR } from '../constants/buyConstants';

export const fetchItems = () => async dispatch => {
	axios
		.get('/api/buy')
		.then(res => {
			console.log(res);
			dispatch({ type: FETCH_ITEMS, payload: res.data });
		})
		.catch(error => {
			console.log(error);
			dispatch({ type: FETCH_ITEMS_ERROR, payload: error });
		});
};
