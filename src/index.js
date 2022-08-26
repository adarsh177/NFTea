import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { store } from './app/store/index';
import App from './App';
import './style/main.scss';
import theme from './style/mui-theme';
import ErrorBoundary from './app/components/containers/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<ErrorBoundary>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</ErrorBoundary>
			</Router>
		</Provider>
	</React.StrictMode>
);
