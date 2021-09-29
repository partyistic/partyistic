/** @format */
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Col, Card, Form, Nav } from "react-bootstrap";
import { useState } from "react";
import useFashion from "../hook/useServicesFashions";

export default function GetFashion() {
  const originalFashion = useFashion().resources;

  const [fashions, setFashions] = useState(originalFashion);
  const App = () => {
    setFashions(useFashion().resources);
  };

  const [price, setPrice] = useState(200000000000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  let city = document.getElementById("city");
  const [selectedCity, setCity] = useState("City");
  const getCityValue = () => {
    setCity(city.options[city.selectedIndex].value);
  };
  console.log(selectedCity);

  function filtering() {
    let lister = [];

    originalFashion.map((item) => {
      if (
        (item.price <= price || item.price == "") &&
        (item.city == selectedCity || selectedCity == "City")
      ) {
        lister.push(item);
        setFashions(lister);
      }
      else{
        setFashions([])
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
          <Modal show={showFashion} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{fashion.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  {fashion.description}
                  {fashion.images && (
                    <Carousel>
                      {fashion.images.images &&
                        fashion.images.images.map((item) => {
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
      <div className='row row-cols-6'>
        <div className='col'></div>
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
            id='city'
            className='col'
            onChange={getCityValue}
            aria-label='Default select example'>
            <option value='City' selected>
              City
            </option>
            <option value='Amman'>Amman</option>
            <option value='Zarqa'>Zarqa</option>
            <option value='Irbid'>Irbid</option>
            <option value='Al-Mafraq'>Al-Mafraq</option>
            <option value='Jarash'>Jarash</option>
            <option value='Ajloun'>Ajloun</option>
            <option value='As-Salt'>As-Salt</option>
            <option value='Madaba'>Madaba</option>
            <option value='karak'>karak</option>
            <option value='Tafilah'>Tafilah</option>
            <option value='Maan'>Maan</option>
            <option value='Aqaba'>Aqaba</option>
          </Form.Select>
        </div>

        <div className='col'>
        <Button variant='primary' onClick={filtering}>
          {" "}
          All Fashion
        </Button>
      </div>
        <div className='col'>
          <input
            type='text'
            onChange={getPrice}
            placeholder='Maximum Price'></input>
        </div>
        <div className='col'>
        <Button variant='primary' onClick={filtering}>
          {" "}
          SEARCH
        </Button>
      </div>
      </div>

      <h1>Get Fashion</h1>
      <div className='row row-cols-6'>
        {fashions &&
          fashions.map((item) => (
            <div className='col'>
              <Card
                style={{ width: "18rem" }}
                onClick={() => {
                  handleShow(item);
                }}>
                <Card.Img variant='top' src={item.images.images[0]} />
              </Card>
            </div>
          ))}
      </div>
      {modalshow()}
    </>
  );
}