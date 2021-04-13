import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import FileBase from 'react-file-base64';

function SellItem() {
	const [item, setItem] = useState({
		title: '',
		description: '',
		selectedFile: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		// dispatch action
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
