import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';
import './AuthenticatedToast.css';

function AuthenticatedToast() {
	const [showToast, setShowToast] = useState(true);

	const toggleShowToast = () => setShowToast(false);

	return (
		<Toast
			show={showToast}
			onClose={toggleShowToast}
			delay={3000}
			autohide
			className="authenticatedToast"
		>
			<Toast.Header>Authenticated!</Toast.Header>
			<Toast.Body>You are already authenticated</Toast.Body>
		</Toast>
	);
}

export default AuthenticatedToast;
