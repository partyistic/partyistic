import React from 'react';
import Row from 'react-bootstrap/Row'
import {  Card } from 'react-bootstrap'
import updateServiceForm from "./updateServiceForm"
import { useState } from 'react';
export default function Profile()  {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

                     <Card.Img variant="" href={handleShow} alt="First image" src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                    
                    </div>

                  <div className="col">
                   <Card.Img alt="Second image" href={handleShow} src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                  
                  </div>

                  <div className="col">
                   <Card.Img variant="" alt="Third image" href={handleShow} src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                  
                  </div>

                  <div className="col">
                   <Card.Img alt="Second image" href={handleShow} src="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
                  

                  </div>


                  <div className="col"></div>

                  </div>





                  <h2>Your Favorites</h2>
                 <div className="row row-cols-6">

                <div className="col"></div>

                  <div className="col">

                     <Card.Img variant="" onClick={handleShow} alt="First image" src="https://images.unsplash.com/photo-1603481502506-275d81ffcdef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" />
                    
                    </div>

                  <div className="col">
                   <Card.Img alt="Second image" onClick={handleShow} src="https://images.unsplash.com/photo-1603481502506-275d81ffcdef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" />
                  
                  </div>

                  <div className="col">
                   <Card.Img variant="" alt="Third image" onClick={handleShow} src="https://images.unsplash.com/photo-1603481502506-275d81ffcdef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" />
                  
                  </div>

                  <div className="col">
                   <Card.Img alt="Second image" onClick={handleShow} src="https://images.unsplash.com/photo-1603481502506-275d81ffcdef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80" />
                  

                  </div>


                  <div className="col"></div>

                  </div>

                  <h2>Your Parties</h2>
                 <div className="row row-cols-6">

                <div className="col"></div>

                  <div className="col">

                     <Card.Img variant="" onClick={handleShow} alt="First image" src="https://images.unsplash.com/photo-1509666537727-9154b6962292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                    
                    </div>

                  <div className="col">
                   <Card.Img alt="Second image" onClick={handleShow} src="https://images.unsplash.com/photo-1509666537727-9154b6962292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                  
                  </div>

                  <div className="col">
                   <Card.Img variant="" alt="Third image" onClick={handleShow} src="https://images.unsplash.com/photo-1509666537727-9154b6962292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                  
                  </div>

                  <div className="col">
                   <Card.Img alt="Second image" onClick={handleShow} src="https://images.unsplash.com/photo-1509666537727-9154b6962292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                  

                  </div>


                  <div className="col"></div>

                  </div>



                  <updateServiceForm show={show} handleClose={handleClose} />
        </>
      );
    
  }