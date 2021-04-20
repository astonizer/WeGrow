import axios from 'axios';
import {
	FETCH_PROFILE,
	FETCH_PROFILE_FAIL,
	FETCH_PROFILE_SUCCESS,
	UPLOAD_PROFILE_PICTURE,
	UPLOAD_PROFILE_PICTURE_FAIL,
	UPLOAD_PROFILE_PICTURE_SUCCESS,
} from '../constants/profileConstants';
import { clearErrors, returnErrors } from './errorActions';

export const fetchProfile = token => async dispatch => {
	dispatch(clearErrors());

	// Request headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	dispatch({ type: FETCH_PROFILE });

	try {
		axios
			.post('/api/profile', JSON.stringify({ token }), config)
			.then(res => {
				dispatch({
					type: FETCH_PROFILE_SUCCESS,
					payload: res.data.stats,
				});
			})
			.catch(err => {
				dispatch({ type: FETCH_PROFILE_FAIL });
				dispatch(returnErrors(err.response.data.error));
			});
	} catch (error) {
		dispatch({ type: FETCH_PROFILE_FAIL });
		dispatch(returnErrors(error.response.data.error));
	}
};

export const uploadProfilePicture = img => async dispatch => {
	dispatch(clearErrors());

	// Request headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	dispatch({ type: UPLOAD_PROFILE_PICTURE });
	try {
		axios
			.post(
				'/api/profile/picture',
				JSON.stringify({
					img,
					token: localStorage.getItem('authToken'),
				}),
				config
			)
			.then(res => {
				console.log(res);
				dispatch({
					type: UPLOAD_PROFILE_PICTURE_SUCCESS,
					payload: res.data.stats,
				});
			})
			.catch(err => {
				dispatch({ type: UPLOAD_PROFILE_PICTURE_FAIL });
				dispatch(returnErrors(err.response.data.error));
			});
	} catch (error) {
		dispatch({ type: FETCH_PROFILE_FAIL });
		dispatch(returnErrors(error.response.data.error));
	}
};
