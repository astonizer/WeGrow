import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { Button, Container, Form } from 'react-bootstrap';
import './Donate.css';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_test_51IhCfqSHIeArmip8K3F4JtLgUHsLXBM6sYUGBgghvR91gHkYRuSQ1HTCd5UFsFUXlWYkUczL7dtDMr2CDuWxZ9YD00pfOUnunb'
);

function Donate() {
	const [amount, setAmount] = useState(0);

	const handleClick = async e => {
		// Get Stripe.js instance
		const stripe = await stripePromise;

		// Call your backend to create the Checkout Session
		const response = await axios.post(
			'/api/checkout',
			JSON.stringify({ amount: 1000 }),
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const session = response.data;

		// When the customer clicks on the button, redirect them to Checkout.
		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			// If `redirectToCheckout` fails due to a browser or network
			// error, display the localized error message to your customer
			// using `result.error.message`.
		}
	};

	return (
		<div align="center" className="my-5 p-5 container donate">
			<Form onSubmit={handleClick}>
				<h1>Donate Money</h1>
				<Form.Group controlId="email">
					<Form.Control
						type="number"
						value={amount}
						onChange={e => setAmount(e.target.value)}
						placeholder="Enter amount to donate"
						min="0"
						max="1000000000"
					/>
				</Form.Group>				
				<Button role="link" variant="btn-light" className="bg-color">Donate</Button>
			</Form>
		</div>
	);
}

export default Donate;
