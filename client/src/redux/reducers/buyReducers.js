import { FETCH_ITEMS, FETCH_ITEMS_ERROR } from '../constants/buyConstants';

const initialState = [];

export default function buyReducers(state = initialState, action) {
	switch (action.type) {
		case FETCH_ITEMS:
			return [
				...state,
				{
					image: action.payload.image,
					title: action.payload.title,
					price: action.payload.price,
				},
			];

		case FETCH_ITEMS_ERROR:
		default:
			return state;
	}
}
