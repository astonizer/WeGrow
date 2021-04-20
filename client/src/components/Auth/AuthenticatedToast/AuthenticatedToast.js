import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import '../Auth.css';

function AuthenticatedToast() {
	const [showToast, setShowToast] = useState(true);

	const toggleShowToast = () => setShowToast(false);

	return (
		// <Toast
		// 	show={showToast}
		// 	onClose={toggleShowToast}
		// 	delay={3000}
		// 	autohide
		// 	className="authenticatedToast"
		// >
		// 	<Toast.Header>Authenticated!</Toast.Header>
		// 	<Toast.Body>You are already authenticated</Toast.Body>
		// </Toast>
		<>
			
		</>
	);
}

export default AuthenticatedToast;
