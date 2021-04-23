import axios from 'axios';

const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

const url = 'https://we-grow-model.herokuapp.com/predict';

export const predictOptimumCrop = data => axios.post(url, data, config);
