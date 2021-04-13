import { combineReducers } from 'redux';

import authReducers from './authReducers';
import errorReducers from './errorReducers';

const reducers = combineReducers({
	auth: authReducers,
	error: errorReducers,
});

export default reducers;
