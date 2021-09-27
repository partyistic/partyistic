'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function PhotoSession() {

  return (
    <>
    <h2 className="align-middle">Book Photo Session</h2>
      <div className="row row-cols-6">
      
      <div className="col"></div>

        <div className="col">
          <Card.Img variant="" alt="First image" src="https://www.signupgenius.com/cms/images/business/appointment-scheduling-tips-photographers-article-600x400.jpg" />
        </div>

        <div className="col">
          <Card.Img alt="Second image" src="https://www.signupgenius.com/cms/images/business/appointment-scheduling-tips-photographers-article-600x400.jpg" />
        </div>

        <div className="col">
          <Card.Img variant="" alt="Third image" src="https://www.signupgenius.com/cms/images/business/appointment-scheduling-tips-photographers-article-600x400.jpg" />
        </div>

        <div className="col">
          <Card.Img alt="Second image" src="https://www.signupgenius.com/cms/images/business/appointment-scheduling-tips-photographers-article-600x400.jpg" />
        </div>
        <div className="col"></div>
        </div>
    </>
  );

}
