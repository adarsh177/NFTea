import React from 'react';
import './style.css';
const LandingPageUI = () => {
	return (
		<React.Fragment>
			<div className="landingSection">
				<div className="container customSection">
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
				<div className="customSection buildSection">
					<div className="row">
						<div className="col-lg-12">
							<br />
							<h1 className="text-center">Build Using</h1>
							<br />
						</div>
						<div className="row">
							<div className="col-lg-4">
								<div className="cardCompany">
									<img
										src="https://solana.com/_next/static/media/dark-horizontal.c3a5eb36.svg"
										alt=".."
									/>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="cardCompany">
									<img
										src="https://solana.com/_next/static/media/dark-horizontal.c3a5eb36.svg"
										alt=".."
									/>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="cardCompany">
									<img
										src="https://solana.com/_next/static/media/dark-horizontal.c3a5eb36.svg"
										alt=".."
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="customSection" id="about">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 text-center">
								<h1>
									<br />
									What are building?
									<br />
								</h1>
								<br />
								<br />
								<h4>
									An NFT Toolkit helping developers integrate NFTs on their Web2
									platforms without any knowledge of Web3
								</h4>
								<br />
								<br />
								<button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 border border-blue-700 rounded">
									Read More
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="customSection buildSection">
					<div className="container-fluid text-center">
						<div className="row justify-content-center">
							<div className="col-lg-12">
								<br />
								<h1>Who are we?</h1>
								<br />
							</div>
							<div className="col-lg-6">
								<div className="profileCard">
									<h4>Adarsh Srivastava</h4>
									<a href="https://adarshshrivastava.in/">
										<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
											adarshshrivastava.in
										</button>
									</a>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="profileCard">
									<h4>Vibhanshu Jain</h4>
									<a href="https://vibhanshu.in">
										<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
											vibhanshu.in
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="customSection">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-6 text-center">
								<h1>
									<br />
									Join us for your journey Web 3.0 from Web 2.0
									<br />
								</h1>
								<br />
								<br />
								<h4>
									Sign in with NFT to create amazing Web 3 applications from Web
									2.0
								</h4>
								<br />
								<br />
								<a href="/login">
									<button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 border border-blue-700 rounded">
										Sign In
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LandingPageUI;
