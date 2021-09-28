'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function PhotoSession(props) {


  return (
    <>
    <h2 className="align-middle">Book Photo Session</h2>
      <div className="row row-cols-6">

      <div className="col"></div>

        {props.photosessions && props.photosessions.map((item,key)=>key<4 && (

          <div className="col">
  
            <a href="/Services/photosessions"> <Card.Img variant=""  alt={item.images.images[0]} src={item.images.images[0]} />
            </a>
            </div>
            )
        )}
          
        <div className="col"></div>
        </div>

    </>
  );

}
