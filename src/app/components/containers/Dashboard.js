import { useState } from 'react';
import DashboardUI from '../presentational/DashboardPage';

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);

    return <DashboardUI showModal={showModal} setShowModal={setShowModal} />;
};

export default Dashboard;
