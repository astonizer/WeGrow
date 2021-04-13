import {
	AUTH_ERROR,
	AUTH_SUCCESS,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
} from '../constants/authConstants';

const initialState = {
	token: localStorage.getItem('authToken'),
	isAuthenticated: null,
};

export default function authReducers(state = initialState, action) {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				token: action.payload,
				isAuthenticated: true,
			};

		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			localStorage.setItem('authToken', action.payload);
			return {
				...state,
				token: action.payload,
				isAuthenticated: true,
			};

		case AUTH_ERROR:
		case LOGIN_FAIL:
		case REGISTER_FAIL:
		case LOGOUT_SUCCESS:
			localStorage.removeItem('authToken');
			return {
				...state,
				token: null,
				isAuthenticated: false,
			};

		default:
			return state;
	}
}
