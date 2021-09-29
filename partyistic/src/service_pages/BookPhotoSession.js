/** @format */

import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Card, Form } from "react-bootstrap";
import usePhotosessions from "../hook/useServicesPhotosessions";
import { useState } from "react";

export default function BookPhotoSession() {
  const originalPhotosessions = usePhotosessions().resources;

  const [photosessions, setPhotosessions] = useState(originalPhotosessions);
  const App = () => {
    setPhotosession(usePhotosessions().resources);
  };

  const [price, setPrice] = useState(200000000000000);
  const getPrice = (event) => {
    setPrice(event.target.value);
  };
  console.log(price)

  let date = document.getElementById("date");
  const [selectedDate, setDate] = useState("Available Date");
  const getDateValue = () => {
    setDate(date.options[date.selectedIndex].value);
  };
  console.log(selectedDate);

  let city = document.getElementById("city");
  const [selectedCity, setCity] = useState("City");
  const getCityValue = () => {
    setCity(city.options[city.selectedIndex].value);
  };
  console.log(selectedCity);

  function filtering() {
    let lister = [];

    originalPhotosessions.map((item) => {
      if (
        (item.price <= price || price == "") &&
        (item.booked_dates == null ||
          item.booked_dates.dates[0] == selectedDate ||
          item.booked_dates.dates[1] == selectedDate ||
          item.booked_dates.dates[2] == selectedDate ||
          item.booked_dates.dates[3] == selectedDate ||
          item.booked_dates.dates[4] == selectedDate ||
          selectedDate == "Available Date")
      ) {
        lister.push(item);
        setPhotosessions(lister);
      } else {
        setPhotosessions([]);
      }
    });
  }

  const [showPhotosession, setShowPhotosession] = useState(false);
  const [photosession, setPhotosession] = useState(false);
  const handleClose = () => setShowPhotosession(false);
  const handleShow = (photosession) => {
    setPhotosession(photosession);
    setShowPhotosession(true);
  };

  const modalshow = () => {
    if (showPhotosession) {
      return (
        <>
          <Modal show={showPhotosession} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{photosession.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  {photosession.description}
                  {photosession.images && (
                    <Carousel>
                      {photosession.images.images &&
                        photosession.images.images.map((item) => {
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
                  <Card.Text>Price: {photosession.price}</Card.Text>
                  <Card.Text>Reviews:</Card.Text>
                  {photosession.reviews &&
                    photosession.reviews.reviews.map((review) => (
                      <Card.Text>{review}</Card.Text>
                    ))}
                  <Card.Text>Booked Dates:</Card.Text>
                  {photosession.booked_dates &&
                    photosession.booked_dates.dates.map((date) => (
                      <Card.Text>{date}</Card.Text>
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
        <div className='col'>
          <Button variant='primary' onClick={filtering}>
            {" "}
            SHOW ALL PHOTOSESSIONS
          </Button>
        </div>

        <div className='col'>
          <Form.Select
            className='col'
            id='date'
            onChange={getDateValue}
            aria-label='Default select example'>
            <option value='Available Date'>Available Date</option>
            <option value='2021/19/3'>2021/19/3</option>
            <option value='2020/10/1'>2020/10/1</option>
            <option value='2013/31/1'>2013/31/1</option>
            <option value='32011/24/4'>2011/24/4</option>
          </Form.Select>
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

      <h1>Book a Photo Session</h1>

      <div className='row row-cols-6'>
        {photosessions &&
          photosessions.map((item) => (
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
