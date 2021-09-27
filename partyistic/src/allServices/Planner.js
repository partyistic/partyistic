'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function Planner(props) {
  return (
    <>
    <h2 className="align-middle">Hire a Planner</h2>
      <div className="row row-cols-6">

      <div className="col"></div>

        {props.planners && props.planners.map((item,key)=>key<4 && (

          <div className="col">
  
            <a href="/Services/planners"> <Card.Img variant=""  alt={item.images.images[0]} src={item.images.images[0]} />
            </a>
            </div>
            )
        )}
          
        <div className="col"></div>
        </div>

    </>
  );

}
