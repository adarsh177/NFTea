import { useState } from 'react';
import LoginUI from '../presentational/LoginPage';

const Login = () => {
	const [showModal, setShowModal] = useState(false);

	return <LoginUI showModal={showModal} setShowModal={setShowModal} />;
};

export default Login;
