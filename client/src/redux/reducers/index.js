import { combineReducers } from 'redux';

import authReducers from './authReducers';
import errorReducers from './errorReducers';
import buyReducers from './buyReducers';
import sellReducers from './sellReducers';

const reducers = combineReducers({
	auth: authReducers,
	error: errorReducers,
	buy: buyReducers,
	sell: sellReducers,
});

export default reducers;
