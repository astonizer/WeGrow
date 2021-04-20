import {
	FETCH_PROFILE,
	FETCH_PROFILE_FAIL,
	FETCH_PROFILE_SUCCESS,
	UPLOAD_PROFILE_PICTURE,
	UPLOAD_PROFILE_PICTURE_FAIL,
	UPLOAD_PROFILE_PICTURE_SUCCESS,
} from '../constants/profileConstants';

const initialState = {
	sellItems: [],
	username: '',
	email: '',
	profilePicture: '',
	isLoading: false,
};

export default function profileReducers(state = initialState, action) {
	switch (action.type) {
		case FETCH_PROFILE:
		case UPLOAD_PROFILE_PICTURE:
			return {
				...state,
				isLoading: true,
			};

		case FETCH_PROFILE_SUCCESS:
			return {
				...state,
				isLoading: false,
				username: action.payload.user.username,
				email: action.payload.user.email,
				profilePicture: action.payload.user.profilePicture,
				sellItems: action.payload.sellItems,
			};

		case FETCH_PROFILE_FAIL:
			return {
				...state,
				isLoading: false,
				username: '',
				email: '',
				profilePicture: '',
				sellItems: '',
			};

		case UPLOAD_PROFILE_PICTURE_SUCCESS:
			return {
				...state,
				profilePicture: action.payload,
			};

		case UPLOAD_PROFILE_PICTURE_FAIL:
			return {
				...state,
				isLoading: false,
				profilePicture: '',
			};

		default:
			return state;
	}
}
