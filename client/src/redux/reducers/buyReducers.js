import {
	FETCH_ITEMS,
	FETCH_ITEMS_FAIL,
	FETCH_ITEMS_SUCCESS,
} from '../constants/buyConstants';

const initialState = {
	items: [],
	isLoading: false,
};

export default function buyReducers(state = initialState, action) {
	switch (action.type) {
		case FETCH_ITEMS:
			return {
				...state,
				isLoading: true,
			};

		case FETCH_ITEMS_SUCCESS:
			return {
				...state,
				items: [...state.items, ...action.payload],
				isLoading: false,
			};

		case FETCH_ITEMS_FAIL:
			return {
				...state,
				items: [],
				isLoading: false,
			};

		default:
			return state;
	}
}
