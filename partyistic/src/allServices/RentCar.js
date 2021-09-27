'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function RentCar() {

  return (
    <>
        <h2>Rent a Car</h2>
      <div className="row row-cols-6">
      <div className="col"></div>
        <div className="col">
          <Card.Img variant="" alt="First image" src="https://olympic-rentacar.gr/wp-content/uploads/2019/03/slide1.jpg"/>
        </div>

        <div className="col">
          <Card.Img alt="Second image" src="https://olympic-rentacar.gr/wp-content/uploads/2019/03/slide1.jpg"/>
        </div>

        <div className="col">
          <Card.Img variant="" alt="Third image" src="https://olympic-rentacar.gr/wp-content/uploads/2019/03/slide1.jpg"/>
        </div>

        <div className="col">
          <Card.Img alt="Second image" src="https://olympic-rentacar.gr/wp-content/uploads/2019/03/slide1.jpg"/>
        </div>
        <div className="col"></div>
        </div>


    </>
  );

}
