import { useState } from 'react';
import TestUI from '../presentational/Test';

const Test = () => {
	const [showModal, setShowModal] = useState(false);

	return <TestUI showModal={showModal} setShowModal={setShowModal} />;
};

export default Test;
