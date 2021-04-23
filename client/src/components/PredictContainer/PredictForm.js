import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { predictOptimumCrop } from '../../api';
import './PredictForm.css';


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
    const [crop, setCrop] = useState('')

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
        predictOptimumCrop(items)
            .then(res => {
                setCrop(res.data.prediction);
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
        <div className="predcit_form">
            <div className="container">
                <div className="row">
                    <div style={{ margin: 'auto' }} className="my-5 col-lg-6 col-sm-6 col-md-6">
                        <Card style={{ width: '32rem', margin: 'auto' }}>
                            <Card.Body>
                                <Form onSubmit={submitHandler}>
                                    <div className="my-3 row">
                                        <div className="col-lg-4 col-sm-12">
                                            <Form.Group>
                                                <Form.Label>Nitrogen (N)</Form.Label>
                                                <Form.Control id="nitrogen" required onChange={changeHandler} type="number" placeholder="Enter N amount" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Form.Group>
                                                <Form.Label>Phosphorus (P)</Form.Label>
                                                <Form.Control id="phosphorus" required onChange={changeHandler} type="number" placeholder="Enter P amount" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Form.Group >
                                                <Form.Label>Potassium (K)</Form.Label>
                                                <Form.Control id="potassium" required onChange={changeHandler} type="number" placeholder="Enter K amount" />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="my-3 row">
                                        <div className="col-lg-4 col-sm-12">
                                            <Form.Group>
                                                <Form.Label>Temperature (T)</Form.Label>
                                                <Form.Control id="temperature" required onChange={changeHandler} type="number" step=".0001" placeholder="Enter T amount" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Form.Group>
                                                <Form.Label>Humidity (H)</Form.Label>
                                                <Form.Control id="humidity" required onChange={changeHandler} type="number" step=".0001" placeholder="Enter H amount" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-4 col-sm-12">
                                            <Form.Group>
                                                <Form.Label>PH (ph)</Form.Label>
                                                <Form.Control id="ph" required onChange={changeHandler} type="number" step=".0001" placeholder="Enter ph amount" />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <Form.Group>
                                        <Form.Label>Rainfall (R)</Form.Label>
                                        <Form.Control id="rainfall" required onChange={changeHandler} type="number" step=".0001" placeholder="Enter R amount" />
                                    </Form.Group>

                                    <button type="submit" className="btn btn-light predict_button">Submit</button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div style={{ margin: 'auto' }} className="my-5 col-lg-6 col-md-6 col-sm-6">
                        <Card style={{ width: '20rem', margin: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Optimal Crop is {crop}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PredictForm
