'use strict';
import React from 'react';
import { Col, Card, Form } from 'react-bootstrap'

export default function PhotoSession(props) {


  return (
    <>
    <h1 
    style={{ marginTop:"3%", color:"white",marginLeft:"40%", fontFamily: "'Dancing Script', cursive"}}
    className="align-middle">Book Photo Session</h1>
      <div className="row row-cols-6">

      

        {props.photosessions && props.photosessions.map((item,key)=>key<4 && (

          <div className="col">
  
            <a href="/Services/photosessions"> 
            
            <Card.Img 
            style={{ height:"20rem", marginTop:"3%" }}
            variant=""  
            alt={item.images.images[0]} 
            src={item.images.images[0]} />
            </a>
            </div>
            )
        )}
          
        
        </div>

    </>
  );

}
