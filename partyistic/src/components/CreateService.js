import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { Col, Card } from 'react-bootstrap'
import ImageBrowserForm from './ImageBrowserForm'
import Services from './Services'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function CreateService(props) {
  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token')

    if (!get) { history.push('/login') }
  },[])
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    // SERVICE NAME
    const [serviceNameChange, setServiceNameChange] = useState('')
    const getServiceNameChange=(event)=>{
    setServiceNameChange(event.target.value);  
  }
  console.log(serviceNameChange);


  // DESCRIPTION
  const [descriptionChange, setDescriptionChange] = useState('')
  const getDescriptionChange=(event)=>{
    setDescriptionChange(event.target.value);  
}
console.log(descriptionChange)

  // LOCATION
  const [locationChange, setLocationChange] = useState('')
  const getLocationChange=(event)=>{
    setLocationChange(event.target.value);  
}
console.log(locationChange)


  // EMAIL
  const [emailChange, setEmailChange] = useState('')
  const getEmailChange=(event)=>{
    setEmailChange(event.target.value);
}
console.log(emailChange)



  // PHONE NUMBER
  const [phoneNumberChange, setPhoneNumberChange] = useState('')
  const getPhoneNumberChange=(event)=>{
    setPhoneNumberChange(event.target.value);  
}
console.log(phoneNumberChange)




  // PRICE
  const [priceChange, setPriceChange] = useState('')
  const getPriceChange=(event)=>{
    setPriceChange(event.target.value);  
}
console.log(priceChange)








    return (
      <>
      <Modal show = {props.show} onHide={props.handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Create a service</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <div className="row row-cols-2">

            <div className="mb-3 col">
            <Form.Group  controlId="formBasicEmail">
              <Form.Control type="text" onChange={getServiceNameChange} placeholder="Service Name"  />
            </Form.Group>
            </div>
            
            <div>
            <Form.Select className="col " aria-label="Default select example">
              <option>Service Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </div>
            </div>
            <br></br>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" onChange={getDescriptionChange} placeholder="Description" />
            </Form.Group>
          
            <Form.Group as={Row} className="mb-3" >
              <Col sm={{ span: 10, offset: 2 }}>
                <input type="button"  value="Add a Photo" onClick={handleShow}/>
              </Col>
            </Form.Group>
                
            
          
              
            <div className="row row-cols-3 ">
              <div className="col">
                <Card.Img variant="" alt="First image" src="" />
              </div>
              <div className="col">
                <Card.Img  alt="Second image" src="" />
              </div>
              <div className="col">
                <Card.Img variant="" alt="Third image" src="" />
              </div>
            </div>


            <br></br>
            <div className="row row-cols-2">
            <div className="mb-3 col">
            <Form.Group  controlId="formBasicEmail">
              <Form.Control type="text" onChange={getLocationChange} placeholder="Location Link" />
            </Form.Group>
            </div>
            
            <div>
            <Form.Select className="col " aria-label="Default select example">
              <option>City</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            </div>
            </div>


            <br></br>
            <div className="row row-cols-3">
            <div className="mb-3 col">
            <Form.Group  controlId="formBasicEmail">
              <Form.Control type="email" onChange={getEmailChange} placeholder="Email" />
            </Form.Group>
            </div>

            <div className="mb-3 col">
            <Form.Group  controlId="formBasicEmail">
              <Form.Control type="text" onChange={getPhoneNumberChange} placeholder="Phone Number" />
            </Form.Group>
            </div>
            
            <div className="mb-3 col">
            <Form.Group  controlId="formBasicEmail">
              <Form.Control type="text" onChange={getPriceChange} placeholder="Price" />
            </Form.Group>
            </div>
            </div>
      

            </Form>
        
          </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      
      
     <ImageBrowserForm
      show = {show}
      handleClose={handleClose}
      />
      
      </Modal>
      </>
      );
      
}

