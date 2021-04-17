require('dotenv').config();
const STRIPE_KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(STRIPE_KEY);

const donate_post = async (req, res, next) => {
	const { amount } = req.body;

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: 'T-shirt',
					},
					unit_amount: amount,
				},
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: 'https://example.com/success',
		cancel_url: 'https://example.com/cancel',
	});

	res.json({ id: session.id });
};

module.exports = {
	donate_post,
};
