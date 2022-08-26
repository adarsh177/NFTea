import { useState } from 'react';
import LandingPageUI from '../presentational/LandingPage';

const LandingPage = () => {
	const [showModal, setShowModal] = useState(false);

	return <LandingPageUI showModal={showModal} setShowModal={setShowModal} />;
};

export default LandingPage;
