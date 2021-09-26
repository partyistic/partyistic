'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function Planner() {

  return (
    <>
        <h2>Hire a planner</h2>
      <div className="row row-cols-6">

      <div className="col"></div>

        <div className="col">
          <Card.Img variant="" alt="First image" src="https://afweddingdesigns.com/wp-content/uploads/2020/05/Job-of-a-Wedding-Planne-300x167.jpg" />
        </div>

        <div className="col">
          <Card.Img alt="Second image" src="https://afweddingdesigns.com/wp-content/uploads/2020/05/Job-of-a-Wedding-Planne-300x167.jpg" />
        </div>

        <div className="col">
          <Card.Img variant="" alt="Third image" src="https://afweddingdesigns.com/wp-content/uploads/2020/05/Job-of-a-Wedding-Planne-300x167.jpg" />
        </div>

        <div className="col">
          <Card.Img alt="Second image" src="https://afweddingdesigns.com/wp-content/uploads/2020/05/Job-of-a-Wedding-Planne-300x167.jpg" />
        </div>
        
        <div className="col"></div>

        </div>



    </>
  );

}
