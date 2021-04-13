import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Crops from './Crops/Crops';

import './Buyer.css';


function Buyer() {

  // const 



    return (
      <div className="container buyer">
        <h1>Buyer</h1>
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

export default Buyer;
