import { combineReducers } from 'redux';

import authReducers from './authReducers';
import errorReducers from './errorReducers';
import buyReducers from './buyReducers';

const reducers = combineReducers({
	auth: authReducers,
	error: errorReducers,
	buy: buyReducers
});

export default reducers;
