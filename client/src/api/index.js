import axios from 'axios';

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const url = 'http://127.0.0.1:5000/predict';

// const url = 'https://we-grow-model.herokuapp.com/predict';

export const predictOptimumCrop = data =>
	axios.post(url, data, config);
