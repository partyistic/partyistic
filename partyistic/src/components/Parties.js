import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import useResource from '../hook/uesParties';
import { useAuth } from '../Auth';

export default function Parties() {
  const { resources, loading } = useResource();
  const { user } = useAuth();

  let wedding = [];
  let grad = [];
  let birthday = [];
  let special = [];
  let privateParties = [];

  resources &&
    resources.map((item) => {
      item.type == 'Wedding' && item.privacy == 'Public' && wedding.push(item);

      item.type == 'Graduation' && item.privacy == 'Public' && grad.push(item);

      item.type == 'Birthday' &&
        item.privacy == 'Public' &&
        birthday.push(item);

      item.type == 'Special' && item.privacy == 'Public' && special.push(item);

      item.privacy == 'Private' && privateParties.push(item);
    });

  wedding = wedding.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  grad = grad.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  birthday = birthday.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  special = special.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
  privateParties = privateParties.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  let email = 'yahiaqous@gmail.com';
  console.log(wedding, grad, birthday, special, privateParties);

  const [showParty, setShowParty] = useState(false);
  const [Party, setParty] = useState(false);

  const handleCloseDetail = () => setShowParty(false);
  const handleShowDetail = (Party) => {
    setParty(Party);
    setShowParty(true);
  };

  const partymodalshow = () => {
    if (showParty) {
      return (
        <>
          <Modal show={showParty} onHide={handleCloseDetail} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{Party.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {Party.description}
                  {Party.images && (
                    <Carousel>
                      {Party.images.images &&
                        Party.images.images.map((item) => {
                          return (
                            item && (
                              <Carousel.Item interval={3000}>
                                <img src={item} alt={item} />
                              </Carousel.Item>
                            )
                          );
                        })}
                    </Carousel>
                  )}
                  <Card.Text>Party Type: {Party.type}</Card.Text>
                  <Card.Text>Privacy: {Party.privacy}</Card.Text>
                  {/* <Card.Text>Party By: {Party.owner}</Card.Text> */}
                  <Card.Text>Date: {Party.date}</Card.Text>
                  <Card.Text>City: {Party.city}</Card.Text>
                  <Card.Text>Party Privacy: {Party.privacy}</Card.Text>
                  <Card.Link href={Party.location_link}>
                    Location Link
                  </Card.Link>
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDetail}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };

  const [showCreateParty, setshowCreateParty] = useState(false);

  const handleCloseCreate = () => setshowCreateParty(false);
  const handleShowCreate = () => setshowCreateParty(true);

  return (
    <>
      <h1>Parties</h1>
      <h2>Invited Parties</h2>
      <Carousel>
        {privateParties &&
          privateParties.map((item) => {
            return (
              item.invited_people.people.includes(email) && (
                <Carousel.Item interval={3000}>
                  <Card
                    style={{ width: '18rem' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}
                  >
                    <Card.Img variant="top" src={item.images.images[0]} />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>
      <Button variant="outline-secondary" onClick={handleShowCreate}>
        Create Your Party
      </Button>
      <h2>Explore Public Partie</h2>
      <h3>Wedding Parties</h3>
      <Carousel>
        {wedding &&
          wedding.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item interval={3000}>
                  <Card
                    style={{ width: '18rem' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}
                  >
                    <Card.Img variant="top" src={item.images.images[0]} />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>
      <h3>Graduation Parties</h3>
      <Carousel>
        {grad &&
          grad.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item interval={3000}>
                  <Card
                    style={{ width: '18rem' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}
                  >
                    <Card.Img variant="top" src={item.images.images[0]} />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>
      <h3>Birthday Parties</h3>
      <Carousel>
        {birthday &&
          birthday.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item interval={3000}>
                  <Card
                    style={{ width: '18rem' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}
                  >
                    <Card.Img variant="top" src={item.images.images[0]} />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>
      <h3>Special Parties</h3>
      <Carousel>
        {special &&
          special.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item interval={3000}>
                  <Card
                    style={{ width: '18rem' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}
                  >
                    <Card.Img variant="top" src={item.images.images[0]} />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <Modal show={showCreateParty} onHide={handleCloseCreate}>
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
              <Form.Check
                type="radio"
                inline
                label="Public"
                id="public"
                name="privacy"
                value="public"
              />
              <Form.Check
                type="radio"
                inline
                label="Private"
                id="private"
                name="privacy"
                value="private"
              />
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
            <Form.Group className="mb-3" controlId="invite"></Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control type="email" placeholder="Invite People" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {partymodalshow()}
    </>
  );
}
