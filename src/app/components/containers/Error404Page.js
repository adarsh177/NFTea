import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Error404Page = () => {
	const navigate = useNavigate();

	return (
		<div className="fullbody error404page">
			<img src="/images/error404.svg" alt="Error 404" />
			<br />
			<br />
			<br />
			<h1>Lost in the wild?</h1>
			<p>
				Seems like you've lost your way. No worries, let's get back to home. <br />
				<br />
				<Button variant="contained" onClick={() => navigate('/')} size="large">
					Home
				</Button>
			</p>
		</div>
	);
};

export default Error404Page;
