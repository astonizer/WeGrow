import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { sellItem } from '../../redux/actions/sellActions';

function SellItem() {
	const [item, setItem] = useState({
		title: '',
		description: '',
		selectedFile: '',
		initialPrice: 0
	});
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(sellItem(item));
	};

	const handleChange = e => {
		setItem({
			...item,
			[e.target.id]: e.target.value,
		});
	};

	const handleDone = ({ base64 }) => {
		setItem({ ...item, selectedFile: base64 });
	};

	return (
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
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Price</Form.Label>
					<Form.Control
						id="price"
						type="text"
						placeholder="Enter price"
						rows={3}
						value={item.initialPrice}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Input File</Form.Label>
					<br />
					<FileBase
						type="file"
						multiple={false}
						onDone={handleDone}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default SellItem;
