import React from 'react';
import './style.css';
const LoginUI = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		window.location.href = '/dashboard';
		window.localStorage.setItem('isAuth', true);
	};
	return (
		<React.Fragment>
			<div className="loginPage">
				<div className="row justify-content-center">
					<div className="col-lg-6 text-center">
						<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
							<h3>Login</h3>
							<br />
							<form onSubmit={handleSubmit}>
								<div>
									<button
										className={`bg-red py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
										type="submit"
									>
										Sign In with Wallet
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LoginUI;
