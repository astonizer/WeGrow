import { CLEAR_ERRORS, GET_ERRORS } from '../constants/errorConstants';

export const returnErrors = message => {
	return {
		type: GET_ERRORS,
		payload: { message, status: 401 },
	};
};

export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};
