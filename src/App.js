import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Error404Page from './app/components/containers/Error404Page';
import LandingPage from './app/components/containers/LandingPage';
import Login from './app/components/containers/Login';
import Test from './app/components/containers/Test'
import Dashboard from './app/components/containers/Dashboard';
import AlertModal from './app/components/reusable/modals/AlertModal';
import ConfirmModal from './app/components/reusable/modals/ConfirmModal';
import Loading from './app/components/reusable/others/Loading';
import MainHeader from './app/components/reusable/others/MainHeader';
import useAlert from './app/hooks/useAlert';
import useConfirm from './app/hooks/useConfirm';

const App = () => {
	const showLoader = useSelector((state) => state.showLoader);
	const showHeader = useSelector((state) => state.showHeader);
	const [showAlert, closeAlert] = useAlert();
	const [showConfirm, closeConfirm] = useConfirm();

	return (
		<React.Fragment>
			{/* Overlay Elements */}
			{showLoader ? <Loading /> : null}
			{showAlert ? <AlertModal text={showAlert} close={closeAlert} /> : null}
			{showConfirm ? <ConfirmModal text={showConfirm} close={closeConfirm} /> : null}
			{showHeader ? <MainHeader /> : null}
			<Toaster />

			{/* Router */}
			<Routes>
				<Route path="/test" element={<Test />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="*" element={<Error404Page />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;
