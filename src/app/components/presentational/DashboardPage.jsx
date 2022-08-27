import React from 'react';
import './style.css';
const DashboardUI = () => {
	return (
		<React.Fragment>
			<div className="landingSection">
				<div className="container dashboard">
					<div className="row">
						<div className="col-lg-4 landingSectionText">
							<h1 className="LogoFont">
								<b>NFTea</b>
							</h1>
							<h1>Integrating NFTs is like a cup of tea</h1>
						</div>
						<div className="col-lg-2"></div>
						<div className="col-lg-6">
							<h3 className="text-center">Build at</h3>
							<img
								className="landingPageImage"
								src="./images/unfold.webp"
								class="max-w-full h-auto"
								alt="..."
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default DashboardUI;
