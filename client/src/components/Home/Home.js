import React from 'react';
import AuthenticatedToast from '../Auth/AuthenticatedToast/AuthenticatedToast';

function Home() {
	return (
		<div>
			Home
			<AuthenticatedToast />
		</div>
	);
}

export default Home;
