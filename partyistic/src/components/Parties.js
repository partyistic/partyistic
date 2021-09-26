import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


export default function Parties() {
  const [showParty, setShowParty] = useState(false);

  const handleClose = () => setShowParty(false);
  const handleShow = () => setShowParty(true);
  return (
    <>
      <h1>Parties</h1>
      <h2>Invited Parties</h2>
      <Button variant="outline-secondary" onClick={handleShow}>Create Your Party</Button>
      <h2>Explore Public Partie</h2>
      <h3>Wedding Parties</h3>
      <h3>Graduation Parties</h3>
      <h3>Birthday Parties</h3>
      <h3>Special Parties</h3>

      <Modal show={showParty} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Party</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control type="text" placeholder="Party Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="partyType">
              <Form.Select aria-label="Default select example">
                <option>Party Type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>

              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Control
                as="textarea"
                placeholder="Add Description"
                style={{ height: '100px' }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="privacy">
              Privacy:
              <Form.Check type="radio" inline label="Public" id="public" name="privacy" value="public" />
              <Form.Check type="radio" inline label="Private" id="private" name="privacy" value="private" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Control
                as="textarea"
                placeholder="Location Link"
                style={{ height: '100px' }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
              <Form.Select label="City">
                <option value="1">City</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>

              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="invite">

            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Invite People" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>


    </>
  );

}