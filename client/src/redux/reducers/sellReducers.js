import { SELL_ITEM_FAIL, SELL_ITEM_SUCCESS } from '../constants/sellConstants';

const initialState = {
	onSale: [],
	sold: [],
};

export default function sellReducers(state = initialState, action) {
	switch (action.type) {
		case SELL_ITEM_SUCCESS:
			console.log('sucess');
			return state;

		case SELL_ITEM_FAIL:
			return {
				...state,
				onSale: [],
				sold: [],
			};

		default:
			return state;
	}
}
