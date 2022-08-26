import * as actions from './actions';
import initialState from './initialState';

const rootReducer = (state = initialState, action = { type: '' }) => {
	switch (action.type) {
		case actions.SHOW_LOADER:
			return { ...state, showLoader: action.showLoader };
			case actions.SHOW_HEADER:
			return { ...state, showHeader: action.showHeader };
		default:
			return state;
	}
};

export default rootReducer;
