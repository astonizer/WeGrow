import axios from 'axios';

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const predictOptimumCrop = data =>
	axios.post('http://127.0.0.1:5001/predict', data, config);
