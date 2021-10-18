/** @format */

import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { useState, useEffect } from 'react';
import CreateParty from '../components/forms/CreateParty';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function Parties() {
  const [renderedData, setRenderedData] = useState([]);

  const history = useHistory();
  useEffect(() => {
    let get = localStorage.getItem('access_token');

    if (!get) {
      history.push('/Login');
    }
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get(
      'https://partyistic.herokuapp.com/api/v1/partyistic/parties/'
    );
    setRenderedData(data.data);
  };

  let wedding = [];
  let grad = [];
  let birthday = [];
  let special = [];
  let privateParties = [];

  renderedData &&
    renderedData.map((item) => {
      item.type === 'Wedding' &&
        item.privacy === 'Public' &&
        wedding.push(item);

      item.type === 'Graduation' &&
        item.privacy === 'Public' &&
        grad.push(item);

      item.type === 'Birthday' &&
        item.privacy === 'Public' &&
        birthday.push(item);

      item.type === 'Special' &&
        item.privacy === 'Public' &&
        special.push(item);

      item.privacy === 'Private' && privateParties.push(item);
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

  let email = localStorage.getItem('email');
  console.log(email);
  console.log(wedding, grad, birthday, special, privateParties);

  const [showParty, setShowParty] = useState(false);
  const [Party, setParty] = useState(false);

  const handleCloseDetail = () => setShowParty(false);
  const handleShowDetail = (Party) => {
    setParty(Party);
    setShowParty(true);
  };

  const [showCreateParty, setShowCreateParty] = useState(false);
  const handleCloseCreateParty = () => setShowCreateParty(false);
  const handleShowCreateParty = () => setShowCreateParty(true);

  return (
    <>
      <Carousel
        fade
        style={{
          // height: '500px',
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
        }}>
        {renderedData &&
          renderedData.map((item) => {
            return (
              item.invited_people &&
              item.invited_people.people.includes(email) && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Invited Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{ width: '100%', borderRadius: '1%' }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <h1
        style={{
          color: 'white',
          margin: '5%',
          textAlign: 'center',
          fontSize: '40px',
          fontFamily: "'Indie Flower',cursive",
        }}>
        Create and Explore Services!
      </h1>

      <Button
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontSize: '30px',
          fontFamily: "'Open Sans Condensed', sans-serif",
          width: '1200px',
          height: '60px',
        }}
        variant='outline-secondary'
        onClick={handleShowCreateParty}>
        Create Your Party
      </Button>
      <h1
        style={{
          marginTop: '12.5%',
          display: 'flex',
          justifyContent: 'center',
          color: 'white',
          fontFamily: "'Dancing Script', cursive",
          fontSize: '60px',
        }}>
        Explore Public Parties
      </h1>

      <Carousel
        fade
        style={{
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
          marginTop: '2%',
        }}>
        {wedding &&
          wedding.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Wedding Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{
                        width: '100%',
                        hight: '100%',
                        borderRadius: '1%',
                      }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <Carousel
        fade
        style={{
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
          marginTop: '3%',
        }}>
        {grad &&
          grad.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Graduation Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{ width: '100%', borderRadius: '1%' }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <Carousel
        fade
        style={{
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
          marginTop: '3%',
        }}>
        {birthday &&
          birthday.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Birthday Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{ width: '100%', borderRadius: '1%' }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <Carousel
        fade
        style={{
          borderRadius: '1%',
          width: '1200px',
          marginLeft: '15%',
          marginTop: '3%',
        }}>
        {special &&
          special.map((item) => {
            return (
              item.images.images[0] && (
                <Carousel.Item>
                  <Carousel.Caption
                    style={{
                      color: 'black',
                      fontSize: '40px',
                      fontFamily: "'Open Sans Condensed', sans-serif",
                    }}>
                    <h1>Special Parties</h1>
                  </Carousel.Caption>
                  <Card
                    style={{ width: '100%', backgroundColor: 'transparent' }}
                    onClick={() => {
                      handleShowDetail(item);
                    }}>
                    <Card.Img
                      style={{ width: '100%', borderRadius: '1%' }}
                      variant='top'
                      src={item.images.images[0]}
                    />
                  </Card>
                </Carousel.Item>
              )
            );
          })}
      </Carousel>

      <CreateParty
        showCreateParty={showCreateParty}
        handleCloseCreateParty={handleCloseCreateParty}
      />

      <Modal
        size='lg'
        show={showParty}
        onHide={handleCloseDetail}
        animation={false}>
        <Modal.Header closeButton>
          <Modal.Title
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '27px',
            }}>
            {Party.name}
          </Modal.Title>
        </Modal.Header>
        <br></br>
        <Modal.Body
          style={{
            fontFamily: "'Open Sans Condensed', sans-serif",
            fontSize: '25px',
          }}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              {Party.description}
              {Party.images && (
                <Carousel fade style={{ borderRadius: '1%', width: '100%' }}>
                  {Party.images.images &&
                    Party.images.images.map((item) => {
                      return (
                        item && (
                          <Carousel.Item>
                            <br></br>
                            <img
                              style={{ width: '100%' }}
                              src={item}
                              alt={item}
                            />
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
              <Card.Link href={Party.location_link}>Location Link</Card.Link>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}
