import * as actions from './actions';

export const showLoader = (showLoader) => {
	return { type: actions.SHOW_LOADER, showLoader };
};

export const showHeader = (showHeader) => {
	return { type: actions.SHOW_HEADER, showHeader };
};
