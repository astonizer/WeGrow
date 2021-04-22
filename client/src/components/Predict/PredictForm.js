import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const PredictForm = () => {

    const [items, setItems] = useState({
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        temperature: '',
        humidity: '',
        ph: '',
        rainfall: ''
    });

    const changeHandler = (e) => {

        setItems({
            ...items,
            [e.target.id]: e.target.value
        })

    }

    const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(items);
        axios
        .post('http://127.0.0.1:5001/predict', JSON.stringify(items), config)
		.then(res => {
            // console.log(res);
            console.log('prediction ', res.data.prediction);
		})
		.catch(err => {
            console.log(err);
		});
    }


    return (
        <div className="predcit_form">
            <div className="container">
                <div className="row">
                    <div style={{ margin: 'auto' }} className="col-lg-4 col-sm-6 col-md-6">
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Form onSubmit={submitHandler}>
                                    <Form.Group>
                                        <Form.Label>Nitrogen (N)</Form.Label>
                                        <Form.Control id="nitrogen" onChange={changeHandler} type="number" placeholder="Enter N amount" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Phosphorus (P)</Form.Label>
                                        <Form.Control id="phosphorus" onChange={changeHandler} type="number" placeholder="Enter P amount" />
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Potassium (K)</Form.Label>
                                        <Form.Control id="potassium" onChange={changeHandler} type="number" placeholder="Enter K amount" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Temperature (T)</Form.Label>
                                        <Form.Control id="temperature" onChange={changeHandler} type="number" step=".0001" placeholder="Enter T amount" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Humidity (H)</Form.Label>
                                        <Form.Control id="humidity" onChange={changeHandler} type="number" step=".0001" placeholder="Enter H amount" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>PH (ph)</Form.Label>
                                        <Form.Control id="ph" onChange={changeHandler} type="number" step=".0001" placeholder="Enter ph amount" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Rainfall (R)</Form.Label>
                                        <Form.Control id="rainfall" onChange={changeHandler} type="number" step=".0001" placeholder="Enter R amount" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Submit
                                   </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PredictForm
