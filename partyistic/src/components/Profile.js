import React from 'react';
import Row from 'react-bootstrap/Row'
import { Col, Image, Container, Card } from 'react-bootstrap'

export default function Profile()  {
    
     return (
        <>
        <h1>Personal Profile</h1>
      <img style={{height: "10%" ,width:"10%"}} src="https://images.unsplash.com/photo-1612532479617-71b3a8878565?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt= "profile pic"/>
      <h4>Name</h4>
      <h6>email@gmail.com</h6>


      <h2>Your Services</h2>
      <div className="row row-cols-6">

                <div className="col"></div>

                  <div className="col">

                    <a href="/Services/places"> <Card.Img variant=""  alt="First image" src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                    </a>
                    </div>

                  <div className="col">
                  <a href="/Services/places"> <Card.Img alt="Second image" src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                  </a>
                  </div>

                  <div className="col">
                  <a href="/Services/places"> <Card.Img variant="" alt="Third image" src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                  </a>
                  </div>

                  <div className="col">
                  <a href="/Services/places"> <Card.Img alt="Second image" src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                  </a>

                  </div>


                  <div className="col"></div>

                  </div>
        </>
      );
    
  }