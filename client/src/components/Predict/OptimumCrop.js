import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { predictOptimumCrop } from '../../api';

function OptimumCrop() {
	const [data, setData] = useState({
		month: '',
		ph: null,
		region: '',
		soil: '',
	});
	const [error, setError] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		predictOptimumCrop(data)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	const handleChange = e => {
		setData({
			...data,
			[e.target.id]: e.target.value,
		});
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Label>Month</Form.Label>
				<Form.Control
					as="select"
					onChange={handleChange}
					id="month"
					required
				>
					<option value="">Choose Month of Production</option>
					<option value="Jan">January</option>
					<option value="Feb">February</option>
					<option value="Mar">March</option>
					<option value="Apr">April</option>
					<option value="May">May</option>
					<option value="Jun">June</option>
					<option value="Jul">July</option>
					<option value="Aug">August</option>
					<option value="Sep">September</option>
					<option value="Oct">October</option>
					<option value="Nov">November</option>
					<option value="Dec">December</option>
				</Form.Control>
				<Form.Label>pH</Form.Label>
				<Form.Control
					as="select"
					onChange={handleChange}
					id="ph"
					required
				>
					<option value="">Choose pH of Soil</option>
					<option>4</option>
					<option>4.5</option>
					<option>5</option>
					<option>5.5</option>
					<option>6</option>
					<option>6.5</option>
					<option>7</option>
					<option>7.5</option>
					<option>8</option>
					<option>8.5</option>
					<option>9</option>
				</Form.Control>
				<Form.Label>Region</Form.Label>
				<Form.Control as="select" onChange={handleChange} required>
					<option value="">Choose Region of Production</option>
					<option>Akola</option>
					<option>Amravati</option>
					<option>Aurangabad</option>
					<option>Beed</option>
					<option>Bhandara</option>
					<option>Buldhana</option>
					<option>Chandrapur</option>
					<option>Dhule</option>
					<option>Gadchiroli</option>
					<option>Gondia</option>
					<option>Hingoli</option>
					<option>Jalgaon</option>
					<option>Jalna</option>
					<option>Kolhapur</option>
					<option>Latur</option>
					<option>Mumbai</option>
					<option>Nagpur</option>
					<option>Nanded</option>
					<option>Nandurbar</option>
					<option>Nashik</option>
					<option>Osmanabad</option>
					<option>Palghar</option>
					<option>Parbhani</option>
					<option>Pune</option>
					<option>Ratnagiri</option>
					<option>Sangli</option>
					<option>Satara</option>
					<option>Solapur</option>
					<option>Thane</option>
					<option>Wardha</option>
					<option>Washim</option>
					<option>Yavatmal</option>
				</Form.Control>
				<Form.Label>Soil</Form.Label>
				<Form.Control as="select" onChange={handleChange} required>
					<option value="">Choose Soil of Production</option>
					<option value="loamy soil">Loamy Soil</option>
					<option value="clay soil">Clay Soil</option>
					<option value="alluvial soil">Alluvial Soil</option>
					<option value="red soil">Red Soil</option>
					<option value="black cotton soil">Black Cotton Soil</option>
					<option value="well-drained deep soil">
						Well-Drained Deep Soil
					</option>
					<option value="laterite soil">Laterite Soil</option>
					<option value="sandy soil">Sandy Soil</option>
				</Form.Control>
				<Button type="submit">Predict</Button>
			</Form>
		</Container>
	);
}

export default OptimumCrop;
