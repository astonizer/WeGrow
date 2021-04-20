import {
	FETCH_ITEMS,
	FETCH_ITEMS_FAIL,
	FETCH_ITEMS_SUCCESS,
	BID_SUCCESS,
	BID_FAIL
} from '../constants/buyConstants';

const initialState = {
	items: [],
	isLoading: false,
};

export default function buyReducers(state = initialState, action) {	
	// console.log(action);
	// console.log(action.payload);
	// console.log(action.payload ? action.payload[0]._id : 'null');
	switch (action.type) {
		case FETCH_ITEMS:
			return {
				...state,
				isLoading: true,
			};

		case FETCH_ITEMS_SUCCESS:
			return {
				...state,
				items: [...action.payload],
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


// const initialBidState = 0;

export function bidReducers(state = initialState, action){
	switch(action.type){
		case BID_SUCCESS:
			return {
				...state, 
				items: [...action.payload, action.payload.initialprice = 199 ]
			};
		case BID_FAIL:
		default:
			return state;
	}
}