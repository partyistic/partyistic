import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
// import Row from 'react-bootstrap/Row'
// import { Col, Card } from 'react-bootstrap'
// import ImageBrowserForm from './ImageBrowserForm'


export default function ImageBrowserForm(props) {
    return (
        <>
      <Modal show = {props.show} onHide={props.handleClose} >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Create a service</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form >
            <div className="row row-cols-3">

            <div className="col">
            <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
            </div>

            <div className="col">
            <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
            </div>

            <div className="col">
            <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
            </div>
           
            </div>

            </Form>
         
          </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={props.handleClose} >Close</button>
          <button variant="primary" type="submit">
            Submit
          </button>
        </Modal.Footer>
      </Modal.Dialog>
      </Modal>

    </>
      );
}

