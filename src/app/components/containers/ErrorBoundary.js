import React from 'react';
import MainHeader from '../reusable/others/MainHeader';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	componentDidCatch(error) {
		console.log('ERROR BOUNDARY', error);
		this.setState({ hasError: true, error: error.stack ?? error.toString() });
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<React.Fragment>
					<MainHeader />
					<div className="fullbody errorpage">
						<img src="/images/error.svg" alt="Error" />
						<br />
						<h1>Encountered an unexpected error</h1>
						<h2>we have informed our team about the error.</h2>
						<br />
						<p>{this.state.error ?? ''}</p>
					</div>
				</React.Fragment>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
