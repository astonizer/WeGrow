import axios from 'axios';
import {
	FETCH_PROFILE,
	FETCH_PROFILE_FAIL,
	FETCH_PROFILE_SUCCESS,
	UPLOAD_PROFILE_PICTURE,
	UPLOAD_PROFILE_PICTURE_FAIL,
	UPLOAD_PROFILE_PICTURE_SUCCESS,
} from '../constants/profileConstants';

export const fetchProfile = token => async dispatch => {
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
				console.log(err);
				dispatch({ type: FETCH_PROFILE_FAIL });
			});
	} catch (error) {
		console.log(error);
		dispatch({ type: FETCH_PROFILE_FAIL });
	}
};

export const uploadProfilePicture = img => async dispatch => {
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
				console.log(err);
				dispatch({ type: UPLOAD_PROFILE_PICTURE_FAIL });
			});
	} catch (error) {
		console.log(error);
		dispatch({ type: FETCH_PROFILE_FAIL });
	}
};
