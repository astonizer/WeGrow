import { CLEAR_ERRORS, GET_ERRORS } from '../constants/errorConstants';

const initialState = {
	error: null,
	status: null,
};

export default function errorReducers(state = initialState, action) {
	switch (action.type) {
		case GET_ERRORS:
			return {
				error: action.payload.message,
				status: action.payload.status,
			};

		case CLEAR_ERRORS:
			return {
				error: null,
				status: null,
			};

		default:
			return state;
	}
}
