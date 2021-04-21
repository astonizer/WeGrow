import React from 'react';
import DonateContainer from '../DonateContainer/DonateContainer';
import Feedback from '../Feedback/Feedback';
import Banner from './Banner/Banner';
import './Home.css';
import Testimonials from './Testimonials/Testimonials';

function Home() {
	return (
		<div className="homePage">
			<div className="container">
				<div className="row">
					<div className="banner_p1 col-lg-6 col-md-12 col-sm-12">
						<h1>
							{' '}
							<b>
								FARMER{' '}
								<span style={{ color: '#10B981' }}>TO</span>{' '}
								BUYER
							</b>{' '}
						</h1>
						<h2>
							<b>IN A SNAP</b>
						</h2>
					</div>
					<div className="banner_p2 col-lg-6 col-md-12 col-sm-12">
						<Banner />
					</div>
				</div>
				<div className="row">
					<DonateContainer />
				</div>
				<div className="row">
					<Feedback />
				</div>
			</div>
			<Testimonials />
		</div>
	);
}

export default Home;
