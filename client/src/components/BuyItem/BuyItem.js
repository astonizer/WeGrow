import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Crops from './Crops/Crops';
import './BuyItem.css';


function BuyItem() {

  const [crops, setCrops] = useState({});

  useEffect(() => {
    axios.get('/buy')
    .then((data) => {
      setCrops(data);
    });
  }, []);

  // const 
    return (
      <div className="container buyer">
        <h1>BuyItem => {crops.data}</h1>
        <Row>
          <Col lg={4} md={6}>
            <Crops />
          </Col>
          <Col lg={4} md={6}>
            <Crops />
          </Col>
          <Col lg={4} md={6}>
            <Crops />
          </Col>
          <Col lg={4} md={6}>
            <Crops />
          </Col>
          <Col lg={4} md={6}>
            <Crops />
          </Col>
          <Col lg={4} md={6}>
            <Crops />
          </Col>
          <Col lg={4} md={6}>
            <Crops />
          </Col>
        </Row>
      </div>
    )
}

export default BuyItem;
