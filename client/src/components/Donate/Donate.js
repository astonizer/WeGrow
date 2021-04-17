import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
	'pk_test_51IhCfqSHIeArmip8K3F4JtLgUHsLXBM6sYUGBgghvR91gHkYRuSQ1HTCd5UFsFUXlWYkUczL7dtDMr2CDuWxZ9YD00pfOUnunb'
);

function Donate() {
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
		<button role="link" onClick={handleClick}>
			Checkout
		</button>
	);
}

export default Donate;
