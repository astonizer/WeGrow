import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { sellItem } from '../../redux/actions/sellActions';
import './SellItem.css';

function SellItem() {
	const [item, setItem] = useState({
		title: '',
		description: '',
		initialPrice: '',
		selectedFile: [],
	});
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		if (item.selectedFile.length > 0) dispatch(sellItem(item));
	};

	const handleChange = e => {
		setItem({
			...item,
			[e.target.id]: e.target.value,
		});
	};

	const handleDone = e => {
		let data = [];
		// e.map();
		e.forEach(({ base64 }) => {
			data.push(base64);
		});
		setItem({
			...item,
			selectedFile: [...data],
		});
	};

	return (
		<>
			<h1 style={{ textAlign: 'center' }}>Sell you crops here!!!</h1>
			<Container>
				<Form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							id="title"
							placeholder="Enter title"
							value={item.title}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							id="description"
							placeholder="Enter description"
							as="textarea"
							rows={3}
							value={item.description}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Initial Price</Form.Label>
						<Form.Control
							id="initialPrice"
							placeholder="Set an initial price"
							value={item.initialPrice}
							onChange={handleChange}
							required
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Input File</Form.Label>
						<br />
						<FileBase
							type="file"
							multiple={true}
							onDone={handleDone}
						/>
					</Form.Group>
					<button type="submit" className="btn btn-light sell_item">
						Submit
					</button>
				</Form>
			</Container>
		</>
	);
}

export default SellItem;
