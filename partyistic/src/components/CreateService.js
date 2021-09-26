import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export class CreateService extends Component {
  render() {
    return (
      
      <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Create a service</Modal.Title>
      </Modal.Header>
    
      <Modal.Body>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Service Name" />

  </Form.Group>
  <Form.Select aria-label="Default select example">
  <option>Service Type</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
<br></br>
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Description" />

  </Form.Group>
  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Add an image</Button>
    </Col>
  </Form.Group>

  
</Form>
      </Modal.Body>
    
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" type="submit">
    Submit
  </Button>
      </Modal.Footer>
    </Modal.Dialog>
    )
  }
}

export default CreateService