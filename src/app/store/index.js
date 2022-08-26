import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import loggingReduxMiddleware from './reduxLoggingMiddleware';

export const store = configureStore({
	reducer: rootReducer,
	middleware: [loggingReduxMiddleware],
});
