import React from 'react';
import { Card } from 'react-bootstrap';
import signin from '../../../api/index.js';

import './Crops.css';


function Crops() {
    return (
      <div className="container buyer">
          {/* <h1>Crops {api.crops}</h1> */}
          {console.log(api)}

          <Card className="crop">
            <Card.Img className="image" src="" />
            <Card.Body>
              <Card.Title>Crop name</Card.Title>
              <Card.Text>
                <h6>Price</h6>
                <h6>Quality</h6>
                <h6>Quantity</h6>
                <h6>number of bids</h6>
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
    )
}

export default Crops;
