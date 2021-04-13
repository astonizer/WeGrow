import { CLEAR_ERRORS, GET_ERRORS } from '../constants/errorConstants';

export const returnErrors = (message, status) => {
	return {
		type: GET_ERRORS,
		payload: { message, status },
	};
};

export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS,
	};
};
