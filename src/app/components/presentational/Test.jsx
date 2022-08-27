import React from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import Modal from '../reusable/atom/Modal';
import { showLoader } from '../../store/actionCreators';

const TestUI = (props) => {
	const [arr, setArr] = React.useState([...new Array(2)]);
	const dispatch = useDispatch();

	const toggleLoader = () => {
		dispatch(showLoader(true));
		setTimeout(() => {
			dispatch(showLoader(false));
		}, 20000);
	};

	return (
		<React.Fragment>
			<div className="fullbody">
				<center>
					{arr.map(() => (
						<p onClick={() => toggleLoader()}>Landing Page</p>
					))}
				</center>

				{props.showModal ? (
					<Modal
						title={'Hello'}
						toggler={() => props.setShowModal((v) => !v)}
						footer={
							<React.Fragment>
								<Button>Save</Button>
							</React.Fragment>
						}
					>
						<p>Hello Content</p>
						{arr.map(() => (
							<p onClick={() => setArr(null)}>Landing Page</p>
						))}
					</Modal>
				) : null}
			</div>
		</React.Fragment>
	);
};

export default TestUI;
