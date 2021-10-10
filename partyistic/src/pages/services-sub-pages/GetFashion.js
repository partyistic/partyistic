/** @format */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Card, Form, Nav } from 'react-bootstrap';
import { useState } from 'react';
import useResourceFash from '../../hook/UseServicesFashions';

export default function GetFashion() {
  const originalFashion = useResourceFash().fashresources;

  const [fashions, setFashions] = useState(originalFashion);
  const App = () => {
    setFashions(useResourceFash().fashresources);
  };

  const [price, setPrice] = useState(200000000000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  let city = document.getElementById('city');
  const [selectedCity, setCity] = useState('City');
  const getCityValue = () => {
    setCity(city.options[city.selectedIndex].value);
  };
  console.log(selectedCity);

  function filtering() {
    let lister = [];

    originalFashion.map((item) => {
      if (
        (item.price <= price || price == '') &&
        (item.city == selectedCity || selectedCity == 'City')
      ) {
        lister.push(item);
        setFashions(lister);
      } else {
        setFashions([]);
      }
    });
  }

  const [showFashion, setShowFashion] = useState(false);
  const [fashion, setFashion] = useState(false);
  const handleClose = () => setShowFashion(false);
  const handleShow = (fash) => {
    setFashion(fash);
    setShowFashion(true);
  };

  const modalshow = () => {
    if (showFashion) {
      return (
        <>
          <Modal
            size='lg'
            show={showFashion}
            onHide={handleClose}
            animation={false}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: '27px',
                }}>
                {fashion.name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                fontFamily: "'Open Sans Condensed', sans-serif",
                fontSize: '25px',
              }}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  {fashion.description}
                  {fashion.images && (
                    <Carousel
                      fade
                      style={{ borderRadius: '1%', width: '100%' }}>
                      {fashion.images.images &&
                        fashion.images.images.map((item) => {
                          return (
                            item && (
                              <Carousel.Item interval={3000}>
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
                  <Card.Text>Price: {fashion.price}</Card.Text>
                  <Card.Text>City: {fashion.city}</Card.Text>
                  <Card.Link href={fashion.location_link}>Location</Card.Link>
                  <Card.Text>Reviews:</Card.Text>
                  {fashion.reviews &&
                    fashion.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                </Card.Body>
              </Card>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </>
      );
    } else {
      return <> </>;
    }
  };
  return (
    <>
      <h1
        style={{
          marginTop: '3%',
          color: 'white',
          marginLeft: '40%',
          fontFamily: "'Dancing Script', cursive",
        }}>
        Get Fashion
      </h1>
      <br></br>
      <br></br>
      <div className='row row-cols-6'>
        <div className='col'>
          <button
            style={{
              background: 'transparent',
              color: '#fff',
              borderBlockColor: 'black',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '30px',
            }}
            variant='primary'
            onClick={filtering}>
            {' '}
            SHOW ALL FASHION
          </button>
        </div>

        <br></br>
        <div className='col '>
          <Nav
            activeKey='/home'
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
            <Nav.Item>
              <Nav.Link href='#'>Man</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Woman</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className='col'>
          <Form.Select
            style={{ backgroundColor: 'transparent', color: '#fff' }}
            id='city'
            className='col'
            onChange={getCityValue}
            aria-label='Default select example'>
            <option value='City' selected>
              City
            </option>
            <option style={{ color: 'black' }} value='Amman'>
              Amman
            </option>
            <option style={{ color: 'black' }} value='Zarqa'>
              Zarqa
            </option>
            <option style={{ color: 'black' }} value='Irbid'>
              Irbid
            </option>
            <option style={{ color: 'black' }} value='Al-Mafraq'>
              Al-Mafraq
            </option>
            <option style={{ color: 'black' }} value='Jarash'>
              Jarash
            </option>
            <option style={{ color: 'black' }} value='Ajloun'>
              Ajloun
            </option>
            <option style={{ color: 'black' }} value='As-Salt'>
              As-Salt
            </option>
            <option style={{ color: 'black' }} value='Madaba'>
              Madaba
            </option>
            <option style={{ color: 'black' }} value='karak'>
              karak
            </option>
            <option style={{ color: 'black' }} value='Tafilah'>
              Tafilah
            </option>
            <option style={{ color: 'black' }} value='Maan'>
              Maan
            </option>
            <option style={{ color: 'black' }} value='Aqaba'>
              Aqaba
            </option>
          </Form.Select>
        </div>

        <div className='col'>
          <input
            style={{ backgroundColor: 'transparent', color: '#fff' }}
            type='text'
            onChange={getPrice}
            placeholder='Maximum Price'></input>
        </div>
        <div className='col'>
          <button
            style={{
              background: 'transparent',
              color: '#fff',
              borderBlockColor: 'black',
              fontFamily: "'Dancing Script', cursive",
              fontSize: '30px',
            }}
            variant='primary'
            onClick={filtering}>
            {' '}
            SEARCH
          </button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className='row row-cols-6'>
        {fashions &&
          fashions.map((item) => (
            <div className='col'>
              <Card
                style={{ height: '20rem', marginTop: '3%' }}
                onClick={() => {
                  handleShow(item);
                }}>
                <Card.Img
                  style={{ height: '100%' }}
                  variant='top'
                  src={item.images.images[0]}
                />
              </Card>
            </div>
          ))}
      </div>
      {modalshow()}
    </>
  );
}
