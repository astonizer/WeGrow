import axios from 'axios';
import { returnErrors } from './errorActions';

import {
	AUTH_ERROR,
	AUTH_SUCCESS,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	REGISTER_FAIL,
	REGISTER_SUCCESS,
} from '../constants/authConstants';
// import { GET_ERRORS } from '../constants/errorConstants';

export const registerUser = user => async dispatch => {
	// Request headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	axios
		.post('/api/auth/register', JSON.stringify(user), config)
		.then(res => {
			dispatch({ type: REGISTER_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: REGISTER_FAIL });
			dispatch(returnErrors('Register failed', 404));
		});
};

export const loginUser = user => async dispatch => {
	// Request headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	axios
		.post('/api/auth/login', JSON.stringify(user), config)
		.then(res => {
			dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
		})
		.catch(err => {
			dispatch({ type: LOGIN_FAIL });
			dispatch(returnErrors('Register failed', 404));
		});
};

export const logoutUser = () => dispatch => {
	dispatch({ type: LOGOUT_SUCCESS });
};

export const loadUser = () => dispatch => {
	const token = localStorage.getItem('authToken');

	if (!token) {
		dispatch(returnErrors('No token', 404));
		return dispatch({ type: AUTH_ERROR });
	}

	dispatch({ type: AUTH_SUCCESS, payload: token });
};
